/** @format */

import { StackScreenProps } from "@react-navigation/stack";
import React, { FC, useState } from "react";
import { View, Text, TextInputComponent, TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Button } from "../../generic/button/button.component";
export const RegisterScreen: FC<StackScreenProps<any>> = ({navigation}) => {

  const [value, setValue] = useState({
    email: '',
    password: '',
    error: ''
  })

  function signUp() {
    if (value.email === '' || value.password === '') {
      setValue({
        ...value,
        error: 'Email e senha são obrigatórios.'
      })
      return;
    }

    setValue({
      ...value,
      error: ''
    })
  }

  return (
    <View style={styles.container}>
      <Text>Signup screen!</Text>

      {!!value.error && <View style={styles.error}><Text>{value.error}</Text></View>}

      <View style={styles.controls}>
        <TextInput
          placeholder='Email'
          style={styles.control}
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
        />

        <TextInput
          placeholder='Password'
          style={styles.control}
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry={true}
         
        />

        <Button title="Sign up" styles={styles.control} onPress={signUp} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  controls: {
    flex: 1,
  },

  control: {
    marginTop: 10
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: '#fff',
    backgroundColor: '#D54826FF',
  }
});
