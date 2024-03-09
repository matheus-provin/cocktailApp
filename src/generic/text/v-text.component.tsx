import React from "react";
import { Text } from "react-native";
import { ITextProps } from "./ITextProps.interface";

export const PText = ({
  textStyle,
  light,
  medium,
  bold,
  black,
  numberOfLines,
  ...props
}: ITextProps) => {
  return (
    <Text
      ellipsizeMode="tail"
      numberOfLines={numberOfLines}
      {...props}
      style={[textStyle]}
    >
      {props.children}
    </Text>
  );
};
