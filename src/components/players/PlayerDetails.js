import React from 'react'

const PlayerDetails = (props) => {
  console.log(props)
  const id = props.match.params.id;
  return (
    <div className="container section player-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Player - {id} </span>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio pariatur nemo explicabo sequi amet, voluptates quam doloremque consectetur aut tenetur voluptas dignissimos quisquam natus quaerat ratione libero nobis nulla recusandae.</p>
        </div>
        <div className="card-action text-black">
          <p>Hola</p>
        </div>
      </div>
    </div>
  )
}

export default PlayerDetails
