/** @format */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { LoginScreen } from "../components/Login/Login";
import { RegisterScreen } from "../components/Register/Register";
import { WelcomeScreen } from "../components/Welcome/Welcome";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
