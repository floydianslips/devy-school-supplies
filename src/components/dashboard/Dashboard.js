import React, { Component } from 'react';
import Notifications from './Notifications'
import MyTeam from '../players/MyTeam'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
    // console.log(this.props)
    const { players } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <MyTeam players={players}/>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.myTeam.players
  }
}

export default connect(mapStateToProps)(Dashboard)
