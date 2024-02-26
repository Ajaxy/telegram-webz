/* eslint-disable no-null/no-null */
import * as idb from 'idb-keyval';

import type { ApiSessionData } from '../api/types';

import {
  DEBUG, GLOBAL_STATE_CACHE_KEY, LEGACY_SESSION_KEY, SESSION_USER_KEY,
} from '../config';
import * as cacheApi from './cacheApi';

const DC_IDS = [1, 2, 3, 4, 5];

export function hasStoredSession(withLegacy = false) {
  if (withLegacy && localStorage.getItem(LEGACY_SESSION_KEY)) {
    return true;
  }

  if (checkSessionLocked()) {
    return true;
  }

  const userAuthJson = localStorage.getItem(SESSION_USER_KEY);
  if (!userAuthJson) {
    return false;
  }

  try {
    const userAuth = JSON.parse(userAuthJson);
    return Boolean(userAuth && userAuth.id && userAuth.dcID);
  } catch (err) {
    // Do nothing.
    return false;
  }
}

export function storeSession(sessionData: ApiSessionData, currentUserId?: string) {
  const { mainDcId, keys, hashes } = sessionData;

  localStorage.setItem(SESSION_USER_KEY, JSON.stringify({ dcID: mainDcId, id: currentUserId }));
  localStorage.setItem('dc', String(mainDcId));
  Object.keys(keys).map(Number).forEach((dcId) => {
    localStorage.setItem(`dc${dcId}_auth_key`, JSON.stringify(keys[dcId]));
  });

  if (hashes) {
    Object.keys(hashes).map(Number).forEach((dcId) => {
      localStorage.setItem(`dc${dcId}_hash`, JSON.stringify(hashes[dcId]));
    });
  }
}

export function clearStoredSession() {
  // eslint-disable-next-line no-debugger
  debugger;
  [
    SESSION_USER_KEY,
    'dc',
    ...DC_IDS.map((dcId) => `dc${dcId}_auth_key`),
    ...DC_IDS.map((dcId) => `dc${dcId}_hash`),
    ...DC_IDS.map((dcId) => `dc${dcId}_server_salt`),
  ].forEach((key) => {
    localStorage.removeItem(key);
  });
}

export function loadStoredSession(): ApiSessionData | undefined {
  if (DEBUG) {
    console.log('!hasStoredSession():', !hasStoredSession());
    console.log('userAuth:', localStorage.getItem(SESSION_USER_KEY));
  }

  if (!hasStoredSession()) {
    return undefined;
  }

  const userAuth = JSON.parse(localStorage.getItem(SESSION_USER_KEY)!);
  if (!userAuth) {
    return undefined;
  }
  const mainDcId = Number(userAuth.dcID);
  const keys: Record<number, string> = {};
  const hashes: Record<number, string> = {};

  DC_IDS.forEach((dcId) => {
    try {
      const key = localStorage.getItem(`dc${dcId}_auth_key`);
      if (key !== null) {
        keys[dcId] = key;
      }

      const hash = localStorage.getItem(`dc${dcId}_hash`);
      if (hash !== null) {
        hashes[dcId] = hash;
      }
    } catch (err) {
      if (DEBUG) {
        // eslint-disable-next-line no-console
        console.warn('Failed to load stored session', err);
      }
      // Do nothing.
    }
  });

  if (DEBUG) {
    console.log('keys:', keys);
  }

  if (!Object.keys(keys).length) return undefined;

  const result = {
    mainDcId,
    keys,
    hashes,
  };

  try {
    let entourage = localStorage.getItem('user_entourage');
    // @ts-ignore;
    entourage = JSON.parse(entourage);

    if (DEBUG) {
      console.log('entourage:', entourage);
    }
    // @ts-ignore;
    if (entourage?.apiId && entourage?.apiHash) {
      // @ts-ignore;
      result.initConnectionParams = entourage || {};
      // @ts-ignore;
      result.apiId = entourage.apiId;
      // @ts-ignore;
      result.apiHash = entourage.apiHash;
    }
  } catch (error) {
    console.log('initConnectionParams error:', error);
  }

  if (DEBUG) {
    console.log('loadStoredSession result:', result);
  }

  return result;
}

export async function importLegacySession() {
  const sessionId = localStorage.getItem(LEGACY_SESSION_KEY);
  if (!sessionId) return;

  const sessionJson = await idb.get(`GramJs:${sessionId}`);
  console.log('sessionJson sessionData:', sessionJson);
  try {
    const sessionData = JSON.parse(sessionJson) as ApiSessionData;
    console.log('importLegacySession sessionData:', sessionData);
    storeSession(sessionData);
  } catch (err) {
    if (DEBUG) {
      // eslint-disable-next-line no-console
      console.error('Failed to load legacy session', err);
    }
  }
}

// Remove previously created IndexedDB and cache API sessions
export async function clearLegacySessions() {
  try {
    localStorage.removeItem(LEGACY_SESSION_KEY);

    const idbKeys = await idb.keys();

    await Promise.all<Promise<any>>([
      cacheApi.clear('GramJs'),
      ...idbKeys
        .filter((k) => typeof k === 'string' && k.startsWith('GramJs:GramJs-session-'))
        .map((k) => idb.del(k)),
    ]);
  } catch (err) {
    if (DEBUG) {
      // eslint-disable-next-line no-console
      console.warn('Failed to clear legacy session', err);
    }
  }
}

export function importTestSession() {
  const sessionJson = process.env.TEST_SESSION!;
  try {
    const sessionData = JSON.parse(sessionJson) as ApiSessionData & { userId: string };
    storeSession(sessionData, sessionData.userId);
  } catch (err) {
    if (DEBUG) {
      // eslint-disable-next-line no-console
      console.warn('Failed to load test session', err);
    }
  }
}

function checkSessionLocked() {
  const stateFromCache = JSON.parse(localStorage.getItem(GLOBAL_STATE_CACHE_KEY) || '{}');

  return Boolean(stateFromCache?.passcode?.isScreenLocked);
}
