import {create} from 'zustand';
import {CommentsIdsByParentIdStore} from './types';

export const useCommentsIdsByParentIdStore = create<CommentsIdsByParentIdStore>(
  set => ({
    currentIndex: 0,
    map: {
      // main threads
      0: [],
    },
    addMessage(data) {
      set(state => ({
        map: {
          ...state.map,
          [data.parentId]: [...(state.map[data.parentId] || []), data.id],
        },
      }));
    },
  }),
);
