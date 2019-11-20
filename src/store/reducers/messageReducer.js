import { CREATE_MESSAGE } from '../../constants'
const initState = {
  messages: [
    {id: '1', title: 'trade with me', content: 'why not?'},
    {id: '2', title: 'good day', content: 'message 2'},
    {id: '3', title: 'happy days', content: 'message 3?'}
  ]
}

const messageReducer = (state = initState, action) => {
  switch(action.type) {
    case CREATE_MESSAGE:
      console.log('created message', action.message)
  }
  return state
}

export default messageReducer
