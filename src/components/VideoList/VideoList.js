import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderetList = videos.map((video, index) => {
        return <VideoItem key={index} onVideoSelect={onVideoSelect} video={video} />
    });

    return <div className="ui relaxed divided list">{renderetList}</div>
};


export default VideoList;