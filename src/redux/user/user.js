const RESERVE_ROCKET = 'spaceTravel/user/RESERVE_ROCKET';
const REMOVE_ROCKET = 'spaceTravel/user/REMOVE_ROCKET';
const JOIN_MISSION = 'spaceTravel/user/JOIN_MISSION';
const LEAVE_MISSION = 'spaceTravel/user/LEAVE_MISSION';

const initialState = { rockets: [], missions: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RESERVE_ROCKET:
      return { ...state, rockets: [...state.rockets, action.payload] };
    case REMOVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.filter((rocketId) => rocketId !== action.payload),
      };
    case JOIN_MISSION:
      return { ...state, missions: [...state.missions, action.payload] };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.filter(
          (missionId) => missionId !== action.payload,
        ),
      };
    default:
      return state;
  }
}

export const reserveRocket = (rocket) => ({
  type: RESERVE_ROCKET,
  payload: rocket,
});

export const removeRocket = (id) => ({
  type: REMOVE_ROCKET,
  payload: id,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});
