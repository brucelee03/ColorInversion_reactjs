import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
    buttonText: 'Light Mode',
    className: 'dark-mode',
  }

  changeColorInversion = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
      className: prevState.isDarkMode ? 'light-mode' : 'dark-mode',
      buttonText: prevState.isDarkMode ? 'Dark Mode' : 'Light Mode',
    }))
  }

  render() {
    const {buttonText, className} = this.state
    return (
      <div className="bg-container">
        <div className={className}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            type="button"
            className="button"
            onClick={this.changeColorInversion}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
