import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ..</div>;
  }

  let videoSrc = 'https://www.youtube.com/embed/';
  if (video.id.videoid !== null && video.id.videoId !== undefined)
    videoSrc = videoSrc + video.id.videoId;
  else videoSrc = videoSrc + 'videoseries?list=' + video.id.playlistId;

  return (
    <div>
      <div className="ui embed">
        <iframe
          title="video player"
          src={videoSrc}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
