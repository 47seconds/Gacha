import React, { useRef, useState } from 'react';
import {VideoPlayer} from '../components';
import {useLatestShotties} from '../hooks/video';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

function Home() {
  const videoPlayer = useRef(null);
  const [shotties, setShotties] = useLatestShotties();

  // Video.js player options
  const VideoPlayerOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: shotties,
        type: "application/x-mpegURL",
      },
    ],
    loop: true,
    auto: true,
    aspectRatio: "9:16",
    // autoplay: "any",
  };

  // Handle player readiness
  const handlePlayerReady = (player) => {
    videoPlayer.current = player;

    // Event handling for player
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      {shotties.map((url, index) => {
          // Video.js player options
          const VideoPlayerOptions = {
            controls: true,
            responsive: true,
            fluid: true,
            sources: [
              {
                src: url,
                type: "application/x-mpegURL",
              },
            ],
            loop: true,
            aspectRatio: "9:16",
            // autoplay: "any",
      };

      return (
        <div key={index} className='mb-4'>
          <VideoPlayer options={VideoPlayerOptions} onReady={handlePlayerReady}/>
        </div>
      )
      })}
    </div>
  );
}

export default Home;
