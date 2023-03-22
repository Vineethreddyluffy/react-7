import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    } else {
      this.setState(prevState => ({count: prevState.count}))
    }
  }

  onBrake = () => this.setState(() => ({count: 0}))

  render() {
    const {count} = this.state
    return (
      <div className="cont">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h2 className="subhead">Speed is {count}mph</h2>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-cont">
          <button type="button" className="button1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
