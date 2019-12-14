import { CREATE_MESSAGE, CREATE_MESSAGE_ERROR } from '../../constants'

export const createMessage = (message) => {
  return (dispatch, getState, { getFirestore }) =>{
    const firestore = getFirestore();
    firestore.collection('messages').add({
      ...message,
      authorFirstName: 'Josh',
      authorLastName: 'Dennis',
      authorID: 123,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: CREATE_MESSAGE, message })
    }).catch((err) => {
      dispatch({ type: CREATE_MESSAGE_ERROR, err })
    })
  }
};
