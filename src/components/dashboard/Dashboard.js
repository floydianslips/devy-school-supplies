import React, { Component } from 'react';
import Notifications from './Notifications'
import MyTeam from '../players/MyTeam'
import { connect } from 'react-redux'
import MessageList from '../messages/MessageList'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class Dashboard extends Component {
  render() {
    console.log(this.props)
    const { players, messages } = this.props;
    console.log(messages)
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <MyTeam players={players}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <MessageList messages={ messages }/>
            {/* <Notifications /> */}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.firestore.ordered.messages)
  return {
    players: state.myTeam.players,
    messages: state.firestore.ordered.messages
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'messages' }
  ])
)(Dashboard)
