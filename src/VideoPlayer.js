import * as React from "react";

const VideoPlayer = React.forwardRef(function VideoPlayer(
  { setPlaying, setCurrentTime, setSeeking },
  ref
) {
  return (
    <div className="video-container">
      <video
        ref={ref}
        className="video"
        src="video.mp4"
        controls
        muted
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
      />
    </div>
  );
});

export default VideoPlayer;
