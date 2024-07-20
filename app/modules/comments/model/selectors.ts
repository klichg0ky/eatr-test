import {
  CommentId,
  CommentsByIdStore,
  CommentsIdsByParentIdStore,
  SelectedCommentStore,
} from './types';

export const selectCommentById =
  (commentId: CommentId) => (state: CommentsByIdStore) =>
    state.map[commentId];

export const selectCommentIdsByParentId =
  (parentId: CommentId) => (state: CommentsIdsByParentIdStore) =>
    state.map[parentId];

export const selectIsCommentSelected =
  (commentId: CommentId) => (state: SelectedCommentStore) =>
    state.selectedCommentId === commentId;

// need to think about naming
export const selectSelectedCommentId = (state: SelectedCommentStore) =>
  state.selectedCommentId;
