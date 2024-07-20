/* =========================================================================
 * REACT
 * ========================================================================= */
import React from 'react';

/* =========================================================================
 * REACT NATIVE
 * ========================================================================= */
import {View, TextInput, TextInputProps, Text} from 'react-native';

/* =========================================================================
* STYLES
* ========================================================================= */
import styles from './styles';

type Props = {
  fieldName?: string;
} & TextInputProps;

export const FieldInput = (props: Props) => {
  const {fieldName, ...other} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.field}>{fieldName}</Text>
      <TextInput style={styles.input} {...other} />
    </View>
  );
};
