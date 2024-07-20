/* =========================================================================
 * REACT
 * ========================================================================= */
import React from 'react';
/* =========================================================================
 * REACT NATIVE
 * ========================================================================= */
import {Image, Text, View} from 'react-native';

/* =========================================================================
 * STYLES
 * ========================================================================= */
import styles from './styles';

interface Props {
  username: string;
}
export const UserInfo: React.FC<Props> = props => {
  const {username} = props;

  const randomAvatarUrl = `https://robohash.org/${username}`;
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{
          uri: randomAvatarUrl,
        }}
      />
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};
