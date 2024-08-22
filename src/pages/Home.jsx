import React, { useRef, useState, useEffect } from 'react';
import {VideoPlayer} from '../components';
import ContentLoading from '../utils/ContentLoading.util';
import {useLatestShotties} from '../hooks/video';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

function Home() {
  const videoPlayer = useRef(null);
  const [shotties, setShotties] = useLatestShotties();
  // console.log(shotties);
  const [contentLoading, setContentLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (shotties.length > 0) {
      // Start fade out when content is ready
      setFadeOut(true);

      // Remove splash screen after fade-out completes
      const timer = setTimeout(() => {
        setContentLoading(false);
      }, 1000); // Match with the duration of your fade-out transition

      return () => clearTimeout(timer);
    }
  }, [shotties]);

  const handlePlayerReady = (player) => {
    videoPlayer.current = player;

    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      {contentLoading ? (
        <ContentLoading fadeOut={fadeOut}/>
      ) : (
        shotties.map((url, index) => {
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
        })
      )}
    </div>
  );
}

export default Home;
