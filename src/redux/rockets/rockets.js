import fetchRockets from './rockets-api';

const GET_ROCKETS = 'spaceTravel/rockets/GET_ROCKETS';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const REMOVE_ROCKET = 'REMOVE_ROCKET';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload.map((rocket) => ({
        ...rocket,
        reserve: false,
      }));
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload.id) {
          return { ...rocket, reserve: true };
        }
        return rocket;
      });
    case REMOVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id === action.payload.id) {
          return { ...rocket, reserve: false };
        }
        return rocket;
      });
    default:
      return state;
  }
}

export const getRockets = () => async (dispatch) => {
  const rockets = await fetchRockets();
  dispatch({ type: GET_ROCKETS, payload: rockets });
};

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  payload: { id },
});

export const removeRocket = (id) => ({
  type: REMOVE_ROCKET,
  payload: { id },
});
