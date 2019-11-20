import authReducer from './authReducer'
import myTeamReducer from './myTeamReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  myTeam: myTeamReducer
})

export default rootReducer
