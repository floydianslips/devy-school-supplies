import React from 'react'
import PlayerSummary from './PlayerSummary'

const MyTeam = ({players}) => {
    return (
     <div className="player-summary section">
      { players && players.map(player => {
        return (
           <PlayerSummary player={player} key={player.id} />
        )
      })}
    </div>
    )
  }
export default MyTeam
