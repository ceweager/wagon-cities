/* eslint-disable no-else-return */
export default function(state, action) {
  if (state === undefined) {
    return { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' };
  }
  if (action.type === 'SET_ACTIVE') {
    return action.payload;
  } else {
    return state;
  }
}
