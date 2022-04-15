import {ViewProps, ViewStyle, StyleProp} from "react-native";

export enum DividerTypes {
  fullBleed = "fullBleed",
  middle = "middle",
  inset = "inset",
}

export interface Props {
  /** Label to be shown on divider bottom */
  subHeader?: string;
  /** Divider Type */
  dividerType?: DividerTypes;
  /** Divider Container Props: ViewProps */
  containerProps?: ViewProps;
  /** Only for styled-components composing */
  style?: StyleProp<ViewStyle>;
}
