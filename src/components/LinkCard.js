import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fork from '../fork.jpg'
import '../css/linkcard.css';

class LinkCard extends Component {

  render() {
    return (
      <div className="link" alt="link">
        <img src={fork} id="fork" />
        <h3 className="title">Example Link</h3>
        <p className="url">www.exampleurl.com</p>
        <p className="edit">Edit</p>
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
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (LinkCard)
