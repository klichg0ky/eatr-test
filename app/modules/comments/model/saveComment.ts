/* =========================================================================
 * STORE
 * ========================================================================= */
import {useCommentsByIdStore} from './commentsByIdStore';
import {useCommentsIdsByParentIdStore} from './commentsByParentIdStore';

/* =========================================================================
 * TYPES
 * ========================================================================= */
import {Comment} from './types';

let index = 1;
export const saveComment = (data: Omit<Comment, 'id'>) => {
  const comment: Comment = {
    ...data,
    id: index,
  };
  index++;
  useCommentsByIdStore.getState().addMessage(comment);
  useCommentsIdsByParentIdStore.getState().addMessage(comment);

  return comment;
};
