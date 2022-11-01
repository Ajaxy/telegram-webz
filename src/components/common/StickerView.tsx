import React, { memo, useState } from '../../lib/teact/teact';
import { getGlobal } from '../../global';

import type { FC } from '../../lib/teact/teact';
import type { ObserveFn } from '../../hooks/useIntersectionObserver';
import type { ApiSticker } from '../../api/types';

import { IS_WEBM_SUPPORTED } from '../../util/environment';
import * as mediaLoader from '../../util/mediaLoader';
import buildClassName from '../../util/buildClassName';
import { getStickerPreviewHash } from '../../global/helpers';
import { selectIsAlwaysHighPriorityEmoji } from '../../global/selectors';

import useMedia from '../../hooks/useMedia';
import { useIsIntersecting } from '../../hooks/useIntersectionObserver';
import useThumbnail from '../../hooks/useThumbnail';
import useMediaTransition from '../../hooks/useMediaTransition';
import useFlag from '../../hooks/useFlag';

import AnimatedSticker from './AnimatedSticker';
import OptimizedVideo from '../ui/OptimizedVideo';

import styles from './StickerView.module.scss';

type OwnProps = {
  containerRef: React.RefObject<HTMLDivElement>;
  sticker: ApiSticker;
  thumbClassName?: string;
  fullMediaHash?: string;
  fullMediaClassName?: string;
  isSmall?: boolean;
  size?: number;
  customColor?: [number, number, number];
  loopLimit?: number;
  shouldLoop?: boolean;
  shouldPreloadPreview?: boolean;
  observeIntersection?: ObserveFn;
  observeIntersectionForPlaying?: ObserveFn;
  noLoad?: boolean;
  noPlay?: boolean;
  cacheBuster?: number;
  onVideoEnded?: AnyToVoidFunction;
  onAnimatedStickerLoop?: AnyToVoidFunction;
};

const STICKER_SIZE = 24;

const StickerView: FC<OwnProps> = ({
  containerRef,
  sticker,
  thumbClassName,
  fullMediaHash,
  fullMediaClassName,
  isSmall,
  size = STICKER_SIZE,
  customColor,
  loopLimit,
  shouldLoop = false,
  shouldPreloadPreview,
  observeIntersection,
  observeIntersectionForPlaying,
  noLoad,
  noPlay,
  cacheBuster,
  onVideoEnded,
  onAnimatedStickerLoop,
}) => {
  const {
    id, isLottie, stickerSetInfo, emoji,
  } = sticker;
  const isUnsupportedVideo = sticker.isVideo && !IS_WEBM_SUPPORTED;
  const isVideo = sticker.isVideo && !isUnsupportedVideo;
  const isStatic = !isLottie && !isVideo;
  const previewMediaHash = getStickerPreviewHash(sticker.id);

  const isIntersectingForLoad = useIsIntersecting(containerRef, observeIntersection);
  const shouldLoad = isIntersectingForLoad && !noLoad;
  const isIntersectingForPlaying = useIsIntersecting(containerRef, observeIntersectionForPlaying);
  const shouldPlay = isIntersectingForPlaying && !noPlay;

  const thumbDataUri = useThumbnail(sticker);
  // Use preview instead of thumb but only if it's already loaded
  const [preloadedPreviewData] = useState(mediaLoader.getFromMemory(previewMediaHash));
  const thumbData = preloadedPreviewData || thumbDataUri;

  const shouldForcePreview = isUnsupportedVideo || (isStatic && isSmall);
  fullMediaHash ||= shouldForcePreview ? previewMediaHash : `sticker${id}`;

  // If preloaded preview is forced, it will render as thumb, so no need to load it again
  const shouldSkipFullMedia = Boolean(fullMediaHash === previewMediaHash && preloadedPreviewData);

  const fullMediaData = useMedia(fullMediaHash, !shouldLoad || shouldSkipFullMedia, undefined, cacheBuster);
  const [isPlayerReady, markPlayerReady] = useFlag(Boolean(isLottie && fullMediaData));
  const isFullMediaReady = fullMediaData && (isStatic || isPlayerReady);

  const fullMediaClassNames = useMediaTransition(isFullMediaReady);
  const thumbClassNames = useMediaTransition(!isFullMediaReady);

  // Preload preview for Message Input and local message
  useMedia(previewMediaHash, !shouldLoad || !shouldPreloadPreview, undefined, cacheBuster);

  return (
    <>
      <img
        src={thumbData}
        className={buildClassName(styles.thumb, thumbClassName, thumbClassNames)}
        alt=""
      />
      {isLottie ? (
        <AnimatedSticker
          size={size}
          key={fullMediaData}
          className={buildClassName(styles.media, fullMediaClassName, fullMediaClassNames)}
          tgsUrl={fullMediaData}
          play={shouldPlay}
          color={customColor}
          noLoop={!shouldLoop}
          isLowPriority={!selectIsAlwaysHighPriorityEmoji(getGlobal(), stickerSetInfo)}
          onLoad={markPlayerReady}
          onLoop={onAnimatedStickerLoop}
        />
      ) : isVideo ? (
        <OptimizedVideo
          canPlay={shouldPlay && shouldLoop}
          className={buildClassName(styles.media, fullMediaClassName, fullMediaClassNames)}
          src={fullMediaData}
          playsInline
          muted
          loop={!loopLimit}
          disablePictureInPicture
          onPlay={markPlayerReady}
          onEnded={onVideoEnded}
        />
      ) : (
        <img
          className={buildClassName(styles.media, fullMediaClassName, fullMediaClassNames)}
          src={fullMediaData}
          alt={emoji}
        />
      )}
    </>
  );
};

export default memo(StickerView);
