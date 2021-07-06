/* eslint-disable no-else-return */
export default function(state, action) {
  if (state === undefined) {
    return [];
  }
  if (action.type === 'SET_CITIES') {
    return action.payload;
  } else {
    return state;
  }
}
