import * as React from "react";
import VideoPlayer from "./VideoPlayer";
import "./App.css";

function App() {
  const [currentTime, setCurrentTime] = React.useState(0);
  const [playing, setPlaying] = React.useState(false);
  const refA = React.useRef(null);
  const refB = React.useRef(null);

  // play/pause both videos same time
  React.useEffect(() => {
    const videoA = refA.current;
    const videoB = refB.current;

    if (videoA && videoB) {
      if (playing) {
        videoA.play();
        videoB.play();
      } else {
        videoA.pause();
        videoB.pause();
      }
    }
  }, [playing]);

  // ensure we are on the same timeframe on each stop
  React.useEffect(() => {
    const videoA = refA.current;
    const videoB = refB.current;

    if (videoA && videoB && !playing) {
      videoA.currentTime = currentTime;
      videoB.currentTime = currentTime;
    }
  }, [currentTime, playing]);

  return (
    <div>
      <div className="videos-container">
        <VideoPlayer
          ref={refA}
          playing={playing}
          setPlaying={setPlaying}
          setCurrentTime={setCurrentTime}
        />
        <VideoPlayer
          ref={refB}
          playing={playing}
          setPlaying={setPlaying}
          setCurrentTime={setCurrentTime}
        />
      </div>
      <div className="controls">
        <button onClick={() => setPlaying(!playing)}>
          {playing ? "Pause" : "Play"}
        </button>
        <button
          onClick={() => {
            // makes no sense to push the step while videos are playing
            if (!playing) {
              setCurrentTime((prevTime) => prevTime + 0.05);
            }
          }}
        >
          Step
        </button>
      </div>
    </div>
  );
}

export default App;
