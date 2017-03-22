import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fork from '../fork.jpg'
import '../css/App.css';
import { Link } from 'react-router-dom'
import { fetchUsername } from '../actions'

class Home extends Component {

  componentDidMount() {
    this.props.fetchUsername()
  }

  render() {
    return (
      <div className="Home">
        <div className="App-header">
          <img src={fork} className="App-logo" alt="logo" />
          <h2 id="welcome">Welcome to Forking Paths, {this.props.username}</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/login">Go to login page</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchUsername}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)
