/** @format */

import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { ConfigTheme } from "./src/config";
import RootNavigation from "./src/navigation";
export function App() {
  EStyleSheet.build(ConfigTheme);

  return <RootNavigation />;
}
