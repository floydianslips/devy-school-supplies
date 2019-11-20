import { CREATE_MESSAGE } from '../../constants'

export const createMessage = (message) => {
  return (dispatch, getState) =>{
    dispatch({ type: CREATE_MESSAGE, message })
    console.log("message created", message)
  }
};
