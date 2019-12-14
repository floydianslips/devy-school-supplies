import React from 'react'

const MessageSummary = ({message}) => {
  // console.log("summary", (message.createdAt.seconds)/60 )
  return (
    <div className="card z-depth-0 message-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{message.title}</span>
        <p>{ message.content }</p>
        <ul>{ message.authorFirstName } { message.authorLastName }</ul>
        {/* <p className="grey-text">{ message.createdAt.seconds }</p> */}
      </div>
    </div>
  )
}

export default MessageSummary
