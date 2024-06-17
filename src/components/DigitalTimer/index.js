// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {play: true, minutes: 25, seconds: 0, limit: 25}

  timer = () => {
    const {seconds, minutes, play} = this.state
    if (play === false) {
      if (seconds === 0 && minutes === 0) {
        this.setState(prev => ({play: !prev.play}))
        clearInterval(this.timerId)
      } else if (seconds === 0) {
        this.setState(prev => ({minutes: prev.minutes - 1, seconds: 59}))
      } else {
        this.setState(prev => ({seconds: prev.seconds - 1}))
      }
    }
  }

  changeAction = () => {
    const {play} = this.state
    this.setState(prev => ({play: !prev.play}))
    if (!play === false) {
      this.timerId = setInterval(this.timer, 1000)
    } else {
      clearInterval(this.timerId)
    }
  }

  minIncrement = () => {
    const {minutes, play} = this.state
    if (play === true) {
      this.setState(prev => ({
        limit: prev.limit + 1,
        minutes: prev.minutes + (prev.limit + 1 - prev.minutes),
      }))
    }
  }

  minDecrement = () => {
    const {minutes, play} = this.state
    if (minutes > 0 && play === true) {
      this.setState(prev => ({
        limit: prev.limit - 1,
        minutes: -(prev.minutes - (prev.limit - 1 + prev.minutes)),
      }))
    }
  }

  reset = () => {
    this.setState({play: true, minutes: 25, seconds: 0})
  }

  render() {
    const {play, minutes, seconds, limit} = this.state
    return (
      <div className="bg-container">
        <h1 style={{textAlign: 'center'}}>Digital Timer</h1>
        <div className="container">
          <div className="container1">
            <div className="clock">
              <div className="clock-time">
                <h1 style={{color: '#4fdbd0'}}>
                  {minutes}:{seconds > 9 ? seconds : `0${seconds}`}
                </h1>
                <p style={{fontWeight: 'bold', fontSize: '25px'}}>
                  {play ? 'Paused' : 'Running'}
                </p>
              </div>
            </div>
          </div>
          <div className="container2">
            <div className="icons">
              <div className="style">
                <button type="button" onClick={this.changeAction}>
                  <img
                    style={{
                      height: '45px',
                      paddingRight: '10px',
                      paddingTop: '20px',
                    }}
                    src={
                      play
                        ? 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                    }
                    alt={play ? 'play icon' : 'pause icon'}
                  />{' '}
                  <span
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '30px',
                      fontWeight: '1000',
                    }}
                  >
                    {' '}
                    {play ? 'Start' : 'Pause'}
                  </span>
                </button>
              </div>
              <div className="style">
                <button type="button" onClick={this.reset}>
                  <img
                    style={{
                      height: '45px',
                      paddingRight: '10px',
                      paddingTop: '20px',
                    }}
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                  />{' '}
                  <span
                    style={{
                      fontFamily: 'Roboto',
                      fontSize: '30px',
                      fontWeight: '1000',
                    }}
                  >
                    {' '}
                    Reset
                  </span>
                </button>
              </div>
            </div>
            <div>
              <div className="icons">
                <button
                  type="button"
                  style={{
                    marginRight: '25px',
                    marginTop: '40px',
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                  onClick={this.minDecrement}
                >
                  -
                </button>

                <div style={{marginRight: '25px'}}>
                  <p
                    style={{
                      fontSize: '15px',
                      marginTop: '30px',
                      fontWeight: 'bold',
                    }}
                  >
                    Set Timer limit
                  </p>
                  <p className="value">{limit}</p>
                </div>
                <button
                  type="button"
                  style={{
                    marginTop: '52px',
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                  onClick={this.minIncrement}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
