/* =========================================================================
 * REACT
 * ========================================================================= */
import React from 'react';

/* =========================================================================
 * REACT-NATIVE
 * ========================================================================= */
import {Text, TouchableOpacity, View} from 'react-native';

/* =========================================================================
 * MODEL
 * ========================================================================= */
import {
  CommentId,
  useCommentsByIdStore,
  selectCommentById,
  selectCommentIdsByParentId,
  useCommentsIdsByParentIdStore,
  useSelectedCommentStore,
  selectIsCommentSelected,
  Comment,
} from '../model';

/* =========================================================================
 * STYLES
 * ========================================================================= */
import styles from './styles';

interface Props {
  commentId: CommentId;
  renderHeader: (comment: Comment) => React.ReactNode;
}

export const CommentItem: React.FC<Props> = props => {
  const {commentId, renderHeader} = props;

  const comment = useCommentsByIdStore(selectCommentById(commentId));
  const commentChildrenIds = useCommentsIdsByParentIdStore(
    selectCommentIdsByParentId(comment.id),
  );
  const hasChildren = commentChildrenIds?.length > 0;
  const isMainComment = comment.parentId === 0;

  const isSelectedComment = useSelectedCommentStore(
    selectIsCommentSelected(commentId),
  );

  const selectCommentForReply = () => {
    useSelectedCommentStore.getState().setSelectedComment(commentId);
  };

  return (
    <View
      style={[
        styles.container,
        isMainComment ? styles.mainComment : null,
        isSelectedComment ? styles.containerSelected : null,
      ]}>
      <View style={styles.header}>{renderHeader?.(comment)}</View>
      <Text>{comment.message}</Text>
      <TouchableOpacity onPress={selectCommentForReply}>
        <Text style={styles.reply}>
          {isSelectedComment ? 'Cancel' : 'Reply'}
        </Text>
      </TouchableOpacity>
      {hasChildren
        ? commentChildrenIds.map(id => (
            <CommentItem renderHeader={renderHeader} key={id} commentId={id} />
          ))
        : null}
    </View>
  );
};
