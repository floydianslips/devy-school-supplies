import authReducer from './authReducer'
import myTeamReducer from './myTeamReducer'
import messageReducer from './messageReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  message: messageReducer,
  auth: authReducer,
  myTeam: myTeamReducer,
  firestore: firestoreReducer
})

export default rootReducer
