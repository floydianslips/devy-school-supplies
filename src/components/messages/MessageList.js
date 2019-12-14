import React from 'react'
import MessageSummary from './MessageSummary'

const MessageList = ({messages}) => {
  console.log("messages", messages)
  return (
    <div className="message-list section">
      { messages && messages.map(message => {
        console.log("map", message)
        return (
          <MessageSummary message={message} key={message.id} />
        )
      })}
    </div>
  )
}

export default MessageList
