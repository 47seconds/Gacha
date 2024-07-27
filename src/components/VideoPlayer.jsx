import React, {useEffect} from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

// Styles to maintain a 9:16 aspect ratio and fill the viewport height
const videoContainerStyle = {
  position: 'relative',
  width: '56.25vh', // 9:16 aspect ratio, 16 / 9 = 1.777, 100vh / 1.777 = 56.25vh
  height: '89vh',
  overflow: 'hidden',
};

const videoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
};

export const VideoPlayer = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement('video-js');

      videoElement.classList.add('vjs-big-play-centered');
      videoElement.style.position = 'absolute';
      videoElement.style.top = 0;
      videoElement.style.left = 0;
      videoElement.style.width = '100%';
      videoElement.style.height = '100%';

      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        // videojs.log('player is ready');
        onReady && onReady(player);
      }));

      // Enable autoplay
      // if (options.autoplay) player.autoplay(true);

    // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div style={videoContainerStyle}>
      <div ref={videoRef} style={videoStyle} />
    </div>
  );
};

export default VideoPlayer;
