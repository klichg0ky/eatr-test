/* =========================================================================
 * REACT
 * ========================================================================= */
import React from 'react';

/* =========================================================================
 * REACT NATIVE
 * ========================================================================= */
import {Button, Text, View} from 'react-native';

/* =========================================================================
 * LIBS
 * ========================================================================= */
import {Controller, useForm} from 'react-hook-form';

/* =========================================================================
 * UI
 * ========================================================================= */
import {FieldInput} from '@ui/FieldInput';

/* =========================================================================
 * CONSTANTS
 * ========================================================================= */
import {EMAIL_REGEX, LATIN_AND_NUMBERS_REGEX} from '@constants/regex';

/* =========================================================================
 * STYLES
 * ========================================================================= */
import styles from './styles';
import {useSessionStore, Session} from '@Sessions/model';

type FormValues = {
  email: string;
  username: string;
};

export const RegisterScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      username: '',
    },
  });

  const saveSession = (data: Session) => {
    useSessionStore.getState().setUser(data);
  };

  const onSubmit = (data: FormValues) => {
    saveSession(data);
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'This field is required',
          },
          pattern: {
            value: EMAIL_REGEX,
            message: 'Invalid email address',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <FieldInput
            fieldName="Email"
            keyboardType="email-address"
            placeholder="Email"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'This field is required',
          },
          pattern: {
            value: LATIN_AND_NUMBERS_REGEX,
            message: 'You must use A-Z and 0-9 symbols',
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <FieldInput
            fieldName="Username"
            placeholder="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />

      {errors.username && (
        <Text style={styles.error}>{errors.username.message}</Text>
      )}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
