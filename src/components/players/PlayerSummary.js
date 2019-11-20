import React from 'react'

const PlayerSummary = ({player}) => {
  return (
      <div className="card z-depth-0 player-summary">
        <div className="card-content black-text text darken">
          <span className="card-title">{player.name}</span>
          <ul>{player.team}</ul>
          <ul>{player.position}</ul>
        </div>
      </div>
  )
}

export default PlayerSummary
