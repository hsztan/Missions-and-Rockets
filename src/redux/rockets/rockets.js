import { fetchRockets } from './rockets-api';
const GET_ROCKETS = 'spaceTravel/rockets/GET_ROCKETS';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
}

export const getRockets = () => {
  return async (dispatch) => {
    const rockets = await fetchRockets();
    dispatch({ type: GET_ROCKETS, payload: rockets });
  };
};
