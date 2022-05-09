import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from '../redux/missions/missions';
import rocketsReducer from '../redux/rockets/rockets';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

export default configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
  middleware: [thunk, logger],
});
