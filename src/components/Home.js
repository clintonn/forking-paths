import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../css/App.css';
import '../css/animista.css';
import '../css/home.css';
import { Link } from 'react-router-dom'
import LinkCard from './LinkCard'
import { fetchUsername, logOut, fetchLinkData } from '../actions'

class Home extends Component {

  componentWillMount() {
    this.props.fetchUsername()
    this.props.fetchLinkData()
  }


  showDate() {
    var today = new Date()
    var day = today.getDay();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    switch (mm) {
      case 1:
        mm = "January"
        break
      case 2:
        mm = "February"
        break
      case 3:
        mm = "March"
        break
      case 4:
        mm = "April"
        break
      case 5:
        mm = "May"
        break
      case 6:
        mm = "June"
        break
      case 7:
        mm = "July"
        break
      case 8:
        mm = "August"
        break
      case 9:
        mm = "September"
        break
      case 10:
        mm = "October"
        break
      case 11:
        mm = "November"
        break
      case 12:
        mm = "December"
        break
    }

    switch (new Date().getDay()) {
      case 0:
          day = "Sunday";
          break;
      case 1:
          day = "Monday";
          break;
      case 2:
          day = "Tuesday";
          break;
      case 3:
          day = "Wednesday";
          break;
      case 4:
          day = "Thursday";
          break;
      case 5:
          day = "Friday";
          break;
      case 6:
          day = "Saturday";
    }

    today = day+', '+mm+' '+dd
    return today;
  }

  render() {
    return (
      <div className="Home">
        <h2 id="date">{this.showDate()}</h2>
        <h4>{this.props.username}</h4>
        <div className="link-wrapper">
          {/* {
            this.props.linkCards.map( (link, index) => {
              <LinkCard id={index} title={link.title} />
            })
          } */}
          <LinkCard id="1" linkData={this.props.linkCards[0]} />
          <LinkCard id="2" linkData={this.props.linkCards[1]} />
          <LinkCard id="3" linkData={this.props.linkCards[2]} />
          <LinkCard id="4" linkData={this.props.linkCards[3]} />
          <LinkCard id="5" linkData={this.props.linkCards[4]} />
        </div>
        <br/>
        <Link to="/Login">Log Out</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    linkCards: state.linkCards
    // linkCards: {
    //   link1: state.linkCard.link1,
    //   link2: state.linkCard.link2,
    //   link3: state.linkCard.link3,
    //   link4: state.linkCard.link4,
    //   link5: state.linkCard.link5
    // }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchUsername, logOut, fetchLinkData}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)
