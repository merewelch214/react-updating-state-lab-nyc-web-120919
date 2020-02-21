// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }
    
    handleBitrate = () => {
      this.setState({
          settings: {
            ...this.state.settings,
            bitrate: 12
          }
      })
    }
      
    handleResolution = () => {  
      this.setState({
            settings: {
              ...this.state.settings,
            video: {
              ...this.state.settings.video,
              resolution: '720p'
              }
            }
        })
      }

    render() {
        return (
          <div>
            <button className='bitrate' onClick={this.handleBitrate}> update bitrate </button>
            <button className='resolution' onClick={this.handleResolution}> update resolution </button>
            <p>Bitrate: {this.state.settings.bitrate}</p>
            <p>Resolution: {console.log(this.state)}</p>
          </div>
        )
    }
}
