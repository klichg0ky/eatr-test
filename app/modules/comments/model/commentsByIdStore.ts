import {create} from 'zustand';
import {CommentsByIdStore} from './types';

export const useCommentsByIdStore = create<CommentsByIdStore>(set => ({
  map: {},
  addMessage(data) {
    set(state => ({
      map: {
        ...state.map,
        [data.id]: data,
      },
    }));
  },
}));
