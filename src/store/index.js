import { configureStore } from '@reduxjs/toolkit';
// reducer
import users from './slices/users';
//saga
import createSagaMiddleware from 'redux-saga';
import userSaga from './slices/users/userSagaFile';

const saga= createSagaMiddleware();

export default configureStore({
  reducer: {
    users
  },
  middleware: [saga]
});
saga.run(userSaga)