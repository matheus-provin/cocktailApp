/** @format */

import React from "react";
import { StyleSheet } from "react-native";
import { useAuthentication } from "./src/hooks/useFirebase";
import AuthStack from "./src/navigation/AuthStack";
import UserStack from "./src/navigation/UserStack";

export default function App() {
  const { user } = useAuthentication();

  return user ? <UserStack /> : <AuthStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
function initializeApp(firebaseConfig: any) {
  throw new Error("Function not implemented.");
}
