import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fork from '../fork.jpg'
import '../css/linkcard.css';

class LinkCard extends Component {

  constructor() {
    super()

    this.state = {
      title: "Example Title",
      url: "https://www.exampleurl.com",
      thumbnail: fork
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      title: nextProps.linkData.title,
      url: nextProps.linkData.url,
      thumbnail: nextProps.linkData.thumbnail
    })
  }

  render() {
    return (
      <div className="link" alt="link">
        <img src={this.state.thumbnail || fork} className="thumbnail" />
        <h3 className="title">{this.state.title}</h3>
        <p className="url">{this.state.url}</p>
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
