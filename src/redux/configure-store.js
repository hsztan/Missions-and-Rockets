import { configureStore } from '@reduxjs/toolkit';
import { missionsReducer } from './missions';
import { rocketsReducer } from './rockets';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';

export default configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
  middleware: [thunk, logger],
});
