import React, { FC, memo, useCallback } from '../../lib/teact/teact';
import { withGlobal } from '../../lib/teact/teactn';
import convertPunycode from '../../lib/punycode';
import { GlobalActions } from '../../global/types';

import { DEBUG, RE_TME_INVITE_LINK, RE_TME_LINK } from '../../config';
import { pick } from '../../util/iteratees';
import buildClassName from '../../util/buildClassName';

type OwnProps = {
  url?: string;
  text: string;
  className?: string;
  children?: any;
};

type DispatchProps = Pick<GlobalActions, 'toggleSafeLinkModal' | 'openTelegramLink'>;

const SafeLink: FC<OwnProps & DispatchProps> = ({
  url,
  text,
  className,
  children,
  toggleSafeLinkModal,
  openTelegramLink,
}) => {
  const content = children || text;
  const isNotSafe = url !== content;

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (
      e.ctrlKey || e.altKey || e.shiftKey || e.metaKey
      || !url || (!url.match(RE_TME_LINK) && !url.match(RE_TME_INVITE_LINK))
    ) {
      if (isNotSafe) {
        toggleSafeLinkModal({ url });

        e.preventDefault();
        return false;
      }

      return true;
    }

    e.preventDefault();
    openTelegramLink({ url });

    return false;
  }, [isNotSafe, openTelegramLink, toggleSafeLinkModal, url]);

  if (!url) {
    return undefined;
  }

  const classNames = buildClassName(
    className || 'text-entity-link',
    text.length > 50 && 'long-word-break-all',
  );

  return (
    <a
      href={ensureProtocol(url)}
      title={getDomain(url)}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames}
      onClick={handleClick}
    >
      {content}
    </a>
  );
};

function ensureProtocol(url?: string) {
  if (!url) {
    return undefined;
  }

  return url.includes('://') ? url : `https://${url}`;
}

function getDomain(url?: string) {
  if (!url) {
    return undefined;
  }

  const href = ensureProtocol(url);
  if (!href) {
    return undefined;
  }

  try {
    let decodedHref = decodeURI(href);

    const match = decodedHref.match(/^https?:\/\/([^/:?#]+)(?:[/:?#]|$)/i);
    if (!match) {
      return undefined;
    }
    const domain = match[1];
    decodedHref = decodedHref.replace(domain, convertPunycode(domain));

    return decodedHref;
  } catch (error) {
    if (DEBUG) {
      // eslint-disable-next-line no-console
      console.error('SafeLink.getDecodedUrl error ', url, error);
    }
  }

  return undefined;
}

export default memo(withGlobal<OwnProps>(
  undefined,
  (setGlobal, actions): DispatchProps => pick(actions, [
    'toggleSafeLinkModal', 'openTelegramLink',
  ]),
)(SafeLink));
