import {
  StyleProp,
  ViewStyle,
  ViewProps,
  TouchableOpacityProps,
  TextProps,
} from "react-native";
import {Props as TagProps} from "src/components/tag/types";
import {Props as IconProps} from "src/iconography/iconography-types";

export enum ListItemTrailingTypes {
  icon = "icon",
  text = "text",
  textAndIcon = "textAndIcon",
}

export enum ListItemLeadingTypes {
  icon = "icon",
  smallIcon = "smallIcon",
}

export interface TextAndTagContent {
  text?: string;
  tagProps?: TagProps;
  textProps?: TextProps;
}

export interface StyledContainerProps {
  hasLeading: boolean;
}

export interface StyledPrimaryTextProps {
  withMargin: boolean;
}

export type StyledLeadingIconProps = IconProps & {
  iconColor?: string;
};

export type StyledTrailingIconProps = IconProps & {
  iconColor?: string;
};

export interface Props {
  /** Primary text of the item, uses a darker color */
  primaryText?: string;
  /** Optional custom props for the primary text */
  primaryTextProps?: TextProps;
  /** Secondary text of the item, uses a lighter color */
  secondaryText?: string;
  /** Optional custom props for the secondary text */
  secondaryTextProps?: TextProps;
  /** Tertiary text of the item, uses a lighter color, same as secondary text */
  tertiaryText?: string;
  /** Optional custom props for the tertiary text */
  tertiaryTextProps?: TextProps;
  /** Callback to handle list item press, if this is present, the item will also have feedback on touch */
  onPress?: () => void;
  /** Defines whether or not the divider will be present, defaults to false */
  hasDivider?: boolean;
  /** Defines the type of the trailing slot, see TrailingTypes for options */
  trailingType?: ListItemTrailingTypes;
  /** Defines the trailing text, used when trailingType is TrailingTypes.text */
  trailingText?: string;
  /** Defines the secondary trailing text, used when trailingType is TrailingTypes.text */
  secondaryTrailingText?: string;
  /** Defines the type of the leading slot, see LeadingTypes for options */
  leadingType?: ListItemLeadingTypes;
  /** Name of the icon to be used as leading icon. Required when leadingType is icon or smallIcon */
  leadingIconName?: string;
  /** Name of the icon to be used as trailing icon. Required when trailingType is icon */
  trailingIconName?: string;
  /** Color to be used on the leading icon */
  leadingIconColor?: string;
  /** Color to be used on the trailing icon */
  trailingIconColor?: string;
  /** Use this to show a tag on the list item with three lines */
  tertiaryContentTagProps?: TagProps;
  /** Use this to show a tag on the list item with one line */
  trailingTagProps?: TagProps;
  /** Optional custom props for the trailing text */
  trailingTextProps?: TextProps;
  /** Optional custom props for the secondary trailing text */
  secondaryTrailingTextProps?: TextProps;
  /** Used only to allow wrapping the component with styled-components */
  style?: StyleProp<ViewStyle>;
  /** Container Props: ViewProps when not pressable and TouchableOpacityProps when pressable */
  containerProps?: ViewProps | TouchableOpacityProps;
  /** Text Container Props: ViewProps */
  textContainerProps?: ViewProps;
  /** Trailing Container Props: ViewProps */
  trailingContainerProps?: ViewProps;
  /** Leading Container Props: ViewProps */
  leadingContainerProps?: ViewProps;
}

export interface StyledIconProps {
  iconColor?: string;
}

export type ContainerType = React.ComponentType<
  ViewProps | (TouchableOpacityProps & StyledContainerProps)
>;
