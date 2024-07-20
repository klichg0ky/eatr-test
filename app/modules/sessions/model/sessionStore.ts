import {create} from 'zustand';
import {SessionsStore} from './types';

export const useSessionStore = create<SessionsStore>(set => ({
  currentUser: null,
  setUser(user) {
    set({
      currentUser: user,
    });
  },
}));
