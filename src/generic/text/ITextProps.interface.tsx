import { TextProps } from "react-native";

export interface ITextProps extends TextProps{
  textStyle?: any;
  light?: boolean;
  medium?: boolean;
  bold?: boolean;
  black?: boolean;
  children?: any;
  numberOfLines?: number;
}
