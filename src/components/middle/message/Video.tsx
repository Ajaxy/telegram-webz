import React, {
  FC, useCallback, useRef, useState,
} from '../../../lib/teact/teact';

import { ApiMessage } from '../../../api/types';
import { IMediaDimensions } from './helpers/calculateAlbumLayout';

import { formatMediaDuration } from '../../../util/dateFormat';
import buildClassName from '../../../util/buildClassName';
import { calculateVideoDimensions } from '../../common/helpers/mediaDimensions';
import {
  getMediaTransferState,
  getMessageMediaFormat,
  getMessageMediaHash,
  getMessageVideo,
  getMessageWebPageVideo,
  isForwardedMessage,
  isOwnMessage,
} from '../../../modules/helpers';
import { ObserveFn, useIsIntersecting } from '../../../hooks/useIntersectionObserver';
import useMediaWithDownloadProgress from '../../../hooks/useMediaWithDownloadProgress';
import useShowTransition from '../../../hooks/useShowTransition';
import useTransitionForMedia from '../../../hooks/useTransitionForMedia';
import usePrevious from '../../../hooks/usePrevious';
import useBuffering from '../../../hooks/useBuffering';
import useHeavyAnimationCheckForVideo from '../../../hooks/useHeavyAnimationCheckForVideo';
import useVideoCleanup from '../../../hooks/useVideoCleanup';
import usePauseOnInactive from './hooks/usePauseOnInactive';
import useBlurredMediaThumbRef from './hooks/useBlurredMediaThumbRef';

import ProgressSpinner from '../../ui/ProgressSpinner';

export type OwnProps = {
  id?: string;
  message: ApiMessage;
  observeIntersection: ObserveFn;
  noAvatars?: boolean;
  shouldAutoLoad?: boolean;
  shouldAutoPlay?: boolean;
  uploadProgress?: number;
  dimensions?: IMediaDimensions;
  lastSyncTime?: number;
  onClick?: (id: number) => void;
  onCancelUpload?: (message: ApiMessage) => void;
};

const Video: FC<OwnProps> = ({
  id,
  message,
  observeIntersection,
  noAvatars,
  shouldAutoLoad,
  shouldAutoPlay,
  uploadProgress,
  lastSyncTime,
  dimensions,
  onClick,
  onCancelUpload,
}) => {
  // eslint-disable-next-line no-null/no-null
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line no-null/no-null
  const videoRef = useRef<HTMLVideoElement>(null);

  const video = (getMessageVideo(message) || getMessageWebPageVideo(message))!;
  const localBlobUrl = video.blobUrl;

  const isIntersecting = useIsIntersecting(ref, observeIntersection);

  const [isDownloadAllowed, setIsDownloadAllowed] = useState(shouldAutoLoad);
  const shouldDownload = Boolean(isDownloadAllowed && isIntersecting && lastSyncTime);
  const [isPlayAllowed, setIsPlayAllowed] = useState(shouldAutoPlay);

  const thumbRef = useBlurredMediaThumbRef(message);
  const { mediaData, downloadProgress } = useMediaWithDownloadProgress(
    getMessageMediaHash(message, 'inline'),
    !shouldDownload,
    getMessageMediaFormat(message, 'inline'),
    lastSyncTime,
  );
  const fullMediaData = localBlobUrl || mediaData;

  const { isBuffered, bufferingHandlers } = useBuffering(!shouldAutoLoad);
  const { isUploading, isTransferring, transferProgress } = getMediaTransferState(
    message,
    uploadProgress || downloadProgress,
    shouldDownload && !isBuffered,
  );
  const wasDownloadDisabled = usePrevious(isDownloadAllowed) === false;
  const {
    shouldRender: shouldRenderSpinner,
    transitionClassNames: spinnerClassNames,
  } = useShowTransition(isTransferring, undefined, wasDownloadDisabled);
  const { shouldRenderThumb, transitionClassNames } = useTransitionForMedia(fullMediaData, 'slow');

  const [playProgress, setPlayProgress] = useState<number>(0);
  const handleTimeUpdate = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    setPlayProgress(Math.max(0, e.currentTarget.currentTime - 1));
  }, []);

  const duration = (videoRef.current && videoRef.current.duration) || video.duration || 0;

  const isOwn = isOwnMessage(message);
  const isForwarded = isForwardedMessage(message);
  const { width, height } = dimensions || calculateVideoDimensions(video, isOwn, isForwarded, noAvatars);

  useHeavyAnimationCheckForVideo(videoRef, Boolean(fullMediaData && shouldAutoPlay));
  usePauseOnInactive(videoRef, isPlayAllowed);
  useVideoCleanup(videoRef, [fullMediaData]);

  const handleClick = useCallback(() => {
    if (isUploading) {
      if (onCancelUpload) {
        onCancelUpload(message);
      }
    } else if (!fullMediaData) {
      setIsDownloadAllowed((isAllowed) => !isAllowed);
    } else if (fullMediaData && !isPlayAllowed) {
      setIsPlayAllowed(true);
      videoRef.current!.play();
    } else if (onClick) {
      onClick(message.id);
    }
  }, [isUploading, fullMediaData, isPlayAllowed, onClick, onCancelUpload, message]);

  const className = buildClassName('media-inner dark', !isUploading && 'interactive');
  const videoClassName = buildClassName('full-media', transitionClassNames);

  const style = dimensions
    ? `width: ${width}px; height: ${height}px; left: ${dimensions.x}px; top: ${dimensions.y}px;`
    : '';

  const shouldRenderPlayButton = (isDownloadAllowed && !isPlayAllowed && !shouldRenderSpinner);
  const shouldRenderDownloadButton = !isDownloadAllowed;

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      // @ts-ignore teact feature
      style={style}
      onClick={isUploading ? undefined : handleClick}
    >
      {(shouldRenderThumb || fullMediaData) && (
        <canvas
          ref={thumbRef}
          className="thumbnail"
          // @ts-ignore teact feature
          style={`width: ${width}px; height: ${height}px;`}
        />
      )}
      {fullMediaData && (
        <video
          ref={videoRef}
          className={videoClassName}
          width={width}
          height={height}
          autoPlay={isPlayAllowed}
          muted
          loop
          playsInline
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...bufferingHandlers}
          onTimeUpdate={handleTimeUpdate}
        >
          <source src={fullMediaData} />
        </video>
      )}
      {shouldRenderPlayButton && (
        <i className="icon-large-play" />
      )}
      {shouldRenderSpinner && (
        <div className={`media-loading ${spinnerClassNames}`}>
          <ProgressSpinner progress={transferProgress} onClick={isUploading ? handleClick : undefined} />
        </div>
      )}
      {shouldRenderDownloadButton && (
        <i className="icon-download" />
      )}
      {isTransferring ? (
        <span className="message-upload-progress">...</span>
      ) : (
        <div className="message-media-duration">
          {video.isGif ? 'GIF' : formatMediaDuration(Math.max(duration - playProgress, 0))}
        </div>
      )}
    </div>
  );
};

export default Video;
