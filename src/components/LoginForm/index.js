// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitTheForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
      errorMessageVisible: false,
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    if (password === '') {
      this.setState({errorMessage: 'enter the password'})
    } else {
      const response = await fetch(url, options)
      const {ok} = response
      if (ok) {
        this.onSubmitSuccess()
        this.setState({username: '', password: ''})
      } else {
        this.setState({errorMessage: "*Username and password didn't match"})
      }
    }
  }

  render() {
    const {username, password, errorMessage} = this.state
    return (
      <div className="login-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            className="website-login-image"
            alt="website login"
          />
        </div>
        <form className="form-container" onSubmit={this.submitTheForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="website-logo"
            alt="website logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
            className="website-login-mobile-image"
            alt="website logo"
          />
          <div className="username-container">
            <label className="labels" htmlFor="usernameInput">
              USERNAME
            </label>
            <br />
            <input
              className="login-inputs"
              placeholder="Username"
              id="usernameInput"
              type="text"
              onChange={this.onChangeUsername}
              value={username}
            />
            <br />
          </div>
          <div className="password-container">
            <label className="labels" htmlFor="passwordInput">
              PASSWORD
            </label>
            <br />
            <input
              className="login-inputs"
              id="passwordInput"
              type="password"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={password}
            />
            <br />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
          <p className="error-message">{errorMessage}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
