/* =========================================================================
 * REACT
 * ========================================================================= */
import React from 'react';

/* =========================================================================
 * REACT NATIVE
 * ========================================================================= */
import {Button, TextInput, View} from 'react-native';

/* =========================================================================
 * STYLES
 * ========================================================================= */
import styles from './styles';
import {
  saveComment,
  selectCommentById,
  selectSelectedCommentId,
  useCommentsByIdStore,
  useSelectedCommentStore,
} from '@Comments/model';
import {useSessionStore, selectCurrentSessionUsername} from '@Sessions/model';

export const AddComment: React.FC = () => {
  const [message, setMessage] = React.useState('');

  const username = useSessionStore(selectCurrentSessionUsername) as string;

  const selectedComment = useSelectedCommentStore(selectSelectedCommentId);
  const comment = useCommentsByIdStore(selectCommentById(selectedComment));
  const addComment = () => {
    setMessage('');
    useSelectedCommentStore.getState().setSelectedComment(0);
    saveComment({
      parentId: selectedComment,
      message,
      username,
    });
  };

  const additionalText = comment?.username ? ` (${comment.username})` : '';
  return (
    <View style={styles.container}>
      <TextInput
        value={message}
        onChangeText={setMessage}
        style={styles.input}
        placeholder="Message"
      />
      <Button onPress={addComment} title={`Leave a comment${additionalText}`} />
    </View>
  );
};
