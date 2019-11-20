export const getPlayers = (player) => {
  return (dispatch, getState) => {
    dispatch({type: 'GET_PLAYERS', player})
  }
}
