import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';
import userReducer from './user/user';

export default configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
    user: userReducer,
  },
  middleware: [thunk, logger],
});
