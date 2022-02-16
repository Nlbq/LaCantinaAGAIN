import React from 'react'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'

function VideoPlayer() {
    return (
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=Wl02K1SqhUU'
          width='100%'
          height='80%'
        />
      </div>
    )
}

export default VideoPlayer
