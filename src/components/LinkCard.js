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
      thumbnail: fork,
      editable: false
    }

    this.handleEdit = this.handleEdit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleURLChange = this.handleURLChange.bind(this)
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      title: nextProps.linkData.title,
      url: nextProps.linkData.url,
      thumbnail: nextProps.linkData.thumbnail
    })
  }

  handleEdit() {
    this.setState({editable: true})
  }

  handleSubmit() {
    this.setState({editable: false})
    // this.props.editLink() // Dispatch an action to update the link data in the database
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value})
  }

  handleURLChange(e) {
    this.setState({url: e.target.value})
  }

  render() {
    if (!this.state.editable){
      return (
        <div className="link" alt="link">
          <div className="thumbnailWrap">
            <img src={this.state.thumbnail || fork} className="thumbnail" />
          </div>
          <h3 className="title">{this.state.title}</h3>
          <p className="url">{this.state.url}</p>
          <p className="edit" onClick={this.handleEdit}>Edit</p>
        </div>
      )
    } else {
      return (
        <div className="link" alt="link">
          <div className="thumbnailWrap">
            <img src={this.state.thumbnail || fork} className="thumbnail" />
          </div>
          <form>
            <input ref="title" value={this.state.title} onChange={this.handleTitleChange} />
            <input ref="url" value={this.state.url} onChange={this.handleURLChange} />
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      )
    }
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
