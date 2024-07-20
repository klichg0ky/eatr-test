/* =========================================================================
 * REACT
 * ========================================================================= */
import React from 'react';

/* =========================================================================
 * REACT NATIVE
 * ========================================================================= */
import {FlatList} from 'react-native';

/* =========================================================================
 * LIBS
 * ========================================================================= */
import {SafeAreaView} from 'react-native-safe-area-context';

/* =========================================================================
 * MODEL
 * ========================================================================= */
import {
  Comment,
  selectCommentIdsByParentId,
  useCommentsIdsByParentIdStore,
} from '@Comments/model';

/* =========================================================================
 * COMPONENTS
 * ========================================================================= */
import {CommentItem} from '@Comments/ui';
import {UserInfo} from '@Sessions/ui/UserInfo';
import {AddComment} from './addComment';

/* =========================================================================
 * STYLES
 * ========================================================================= */
import styles from './styles';

export const CommentsScreen: React.FC = () => {
  const mainComments = useCommentsIdsByParentIdStore(
    selectCommentIdsByParentId(0),
  );

  const renderCommentHeader = (comment: Comment) => {
    return <UserInfo username={comment.username} />;
  };
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.listContent}
        keyExtractor={id => id.toString()}
        renderItem={({item}) => (
          <CommentItem renderHeader={renderCommentHeader} commentId={item} />
        )}
        data={mainComments}
      />
      <AddComment />
    </SafeAreaView>
  );
};
