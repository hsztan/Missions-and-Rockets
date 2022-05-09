import { fetchMissions } from './missions-api';
const GET_MISSIONS = 'GET_MISSIONS';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
}

export const getMissions = () => {
  return async (dispatch) => {
    const missions = await fetchMissions();
    dispatch({ type: GET_MISSIONS, payload: missions });
  };
};
