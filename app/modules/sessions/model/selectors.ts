import {SessionsStore} from './types';

export const selectCurrentSessionUsername = (state: SessionsStore) =>
  state.currentUser?.username;
