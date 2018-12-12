import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos }) => {
    const renderetList = videos.map(video => {
        return <VideoItem video={video}/>
    });

    return <div>{renderetList}</div>
};


export default VideoList;