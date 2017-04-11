import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../css/login.css';
import { logInUser } from '../actions'

class Login extends Component {

  handleSubmit(event) {
    event.preventDefault()
    const user = {email: this.refs.logInEmail.value, password: this.refs.logInPassword.value}
    this.props.logInUser(user)
  }

  handleCreateClick() {
    this.props.history.push('/signup')
  }

  componentDidUpdate() {
    if (Object.keys(this.props.user).length !== 0) {
      this.props.history.push(`/user/${this.props.user.username}`)
    }
  }

  render() {
    return (
      <div className="myForm">

        <h1 id="title">Forking Paths</h1>

        <div id="logIn">
          <h2 className="formTitle">Log In</h2>
          <form>
            <label>Email: </label>
            <input ref="logInEmail" />
            <label>Password: </label>
            <input type="password" ref="logInPassword" />
            <button className="formButton" type="submit" onClick={this.handleSubmit.bind(this)}>Log In</button>
          </form>
          <div id="newDiv">
            <p id="new">New to Forking Paths?</p>
          </div>
          <button className="formButton createButton" onClick={this.handleCreateClick.bind(this)}>Create Account</button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({logInUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Login)
