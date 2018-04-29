import React from 'react'
import styled from 'styled-components'

class Stopwatch extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      time: 0,
      timerRunning: false,
      hide: false
    }

    this.incrementer = null
  }

  startClock = () => {
    this.incrementer = setInterval( () =>
      this.setState({
        time: this.state.time + 1,
        timerRunning: true
      })
    , 1000);
  }

  stopClock = () => {
    clearInterval(this.incrementer)
    this.setState({
      timerRunning: false
    })
  }

  resetClock = () => {
    this.setState({
      time: 0
    })
  }

  startStopHandler = (isRunning) => {
    if(isRunning)
      this.stopClock()
    else
      this.startClock()
  }

  toggleCheckbox = (isChecked) => {
    this.setState({
      hide: isChecked
    })
  }

  componentWillUnmount() {
    clearInterval(this.incrementer)
  }

  render () {
    return <div>
      <div>
        <input type="checkbox" onChange={(e) => this.toggleCheckbox(e.currentTarget.checked)}/> hide stopwatch
      </div>
      {!this.state.hide &&
      <div>
        <div>
          {this.state.time}
        </div>
        <div>
          <button onClick={() => this.startStopHandler(this.state.timerRunning)}>
            {this.state.timerRunning ? 'stop' : 'start'}
          </button>
          <br />
          <button onClick={this.resetClock}>reset</button>
        </div>
      </div>
      }
    </div>
  }
}

export default Stopwatch