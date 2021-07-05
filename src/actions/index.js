// TODO: add and export your own actions
import cities from '../cities';

export function setCities() {
  console.log(cities);
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export function setActive(activeCity) {
  return {
    type: 'SET_ACTIVE',
    payload: activeCity
  };
}
