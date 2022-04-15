import {StyleProp, ViewStyle, ViewProps} from "react-native";
import {IconographyNames} from "src/enums/iconography-names";

export enum TagVariants {
  primary = "primary",
  secondary = "secondary",
}

export enum TagSizes {
  small = "small",
  medium = "medium",
}

export enum TagTypes {
  info = "info",
  negative = "negative",
  success = "success",
  warning = "warning",
  neutral = "neutral",
}

export interface Props {
  /** Define Tag Variant */
  variant: TagVariants;
  /** Define Tag Sizes */
  size: TagSizes;
  /** Define Tag Type */
  type: TagTypes;
  /** Tag's label */
  label: string;
  /** Define if Tag will have leading icon. Default: false */
  hasLeadingIcon?: boolean;
  /** Name of the icon to be used as leading icon. Required when hasLeadingIcon is true */
  leadingIconName?: IconographyNames;
  /** Only for styled-components composing */
  style?: StyleProp<ViewStyle>;
}

export interface StyledLabelProps {
  type: TagTypes;
}

export interface StyledContainerProps {
  size: TagSizes;
  type: TagTypes;
  hasLeadingIcon: boolean;
}

export interface StyledLeadingIconProps {
  type: TagTypes;
  iconName: IconographyNames;
}

export interface VariantsStyles {
  Wrapper: React.ComponentType<ViewProps>;
  Container: React.ComponentType<StyledContainerProps>;
  Label: React.ComponentType<StyledLabelProps>;
  InfoLeadingIcon: React.ComponentType<StyledLeadingIconProps>;
  ErrorLeadingIcon: React.ComponentType<StyledLeadingIconProps>;
  SuccessLeadingIcon: React.ComponentType<StyledLeadingIconProps>;
  WarningLeadingIcon: React.ComponentType<StyledLeadingIconProps>;
  NeutralLeadingIcon: React.ComponentType<StyledLeadingIconProps>;
}
