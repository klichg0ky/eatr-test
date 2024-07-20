import {create} from 'zustand';
import {SessionByUsernameStore} from './types';

export const useSessionByUsernameStore = create<SessionByUsernameStore>(
  set => ({
    map: {},
    addUser(session) {
      set(state => {
        return {
          map: {
            ...state.map,
            [session.username]: {
              ...(state.map[session.username] || {}),
              ...session,
            },
          },
        };
      });
    },
  }),
);
