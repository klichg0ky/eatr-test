import {create} from 'zustand';
import {SelectedCommentStore} from './types';

export const useSelectedCommentStore = create<SelectedCommentStore>(set => ({
  selectedCommentId: 0,
  setSelectedComment(id) {
    set(state => ({
      selectedCommentId: id !== state.selectedCommentId ? id : 0,
    }));
  },
}));
