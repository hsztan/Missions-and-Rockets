import { fetchMissions } from './missions-api';

const GET_MISSIONS = 'GET_MISSIONS';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload.map((mission) => ({
        ...mission,
        join: false,
      }));
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.id) {
          return { ...mission, join: true };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload.id) {
          return { ...mission, join: false };
        }
        return mission;
      });
    default:
      return state;
  }
}

export const getMissions = () => async (dispatch) => {
  const missions = await fetchMissions();
  dispatch({ type: GET_MISSIONS, payload: missions });
};

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: { id },
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: { id },
});
