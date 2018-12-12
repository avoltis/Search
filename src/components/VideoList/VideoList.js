import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos }) => {
    const renderetList = videos.map(video => {
        return <VideoItem video={video}/>
    });

    return <div className="ui relaxed divided list">{renderetList}</div>
};


export default VideoList;