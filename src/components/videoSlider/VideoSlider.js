import React from 'react'
import ReactPlayer from 'react-player'
import './VideoSlider.css'

function VideoSlider() {

const externalSource = 'https://www.youtube.com/watch?v=Wl02K1SqhUU';

// const internalSource = 'data/videoSlider/CrookedPath.mp4';

    return (
        <div className="player-wrapper">
            <ReactPlayer 
            url={externalSource}
            width="70%"
            height="70%"
            className="video-player"
            controls
            />
        </div>
    )
}

export default VideoSlider
