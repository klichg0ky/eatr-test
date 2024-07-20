import {create} from 'zustand';
import {SessionsStore} from './types';
import {useSessionByUsernameStore} from './sessionByUsernameStore';

export const useSessionStore = create<SessionsStore>(set => ({
  currentUser: null,
  setUser(user) {
    set({
      currentUser: user,
    });
    useSessionByUsernameStore.getState().addUser(user);
  },
}));
