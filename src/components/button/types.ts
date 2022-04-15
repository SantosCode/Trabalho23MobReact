import {
  TouchableHighlightProps,
  TextProps,
  StyleProp,
  ViewStyle,
} from "react-native";

export enum ButtonSizes {
  small = "small",
  medium = "medium",
  large = "large",
}

export enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

export interface StyledContainerProps {
  buttonType: ButtonTypes;
  buttonSize: ButtonSizes;
  isDisabled: boolean;
  isInverse: boolean;
  isPressed: boolean;
}

export interface StyledLabelProps {
  buttonType: ButtonTypes;
  buttonSize: ButtonSizes;
  isPressed: boolean;
  isDisabled: boolean;
  isInverse: boolean;
}

export type StyledContentContainerProps = Record<string, string | number>;

export type StyledLeadingIconContainerProps = Record<string, string | number>;

export type StyledTrailingIconContainerProps = Record<string, string | number>;

export interface StyledIconProps {
  isPressed: boolean;
  isDisabled: boolean;
  iconName: string;
  isInverse: boolean;
}

export interface StyledProgressIndicatorProps {
  buttonSize: ButtonSizes;
  style: unknown;
  isInverse: boolean;
}

export interface ProgressIndicatorIconProps {
  isInverse: boolean;
}

export interface BaseLeadingAndTrailingIconProps {
  isPressed: boolean;
  isDisabled: boolean;
  isInverse: boolean;
  buttonType: ButtonTypes;
}

type LargeButtonVariant = {
  buttonSize: ButtonSizes.large;
  buttonType: ButtonTypes.primary | ButtonTypes.secondary;
};

type MediumButtonVariant = {
  buttonSize: ButtonSizes.medium;
  buttonType: ButtonTypes.primary | ButtonTypes.secondary;
};

type SmallButtonVariant = {
  buttonSize: ButtonSizes.small;
  buttonType: ButtonTypes;
};

type ButtonVariants =
  | LargeButtonVariant
  | MediumButtonVariant
  | SmallButtonVariant;

interface CommonProps {
  /**
   * Button text
   */
  label: string;
  /**
   * Native Touchable Opacity Props
   */
  containerProps?: TouchableHighlightProps;
  /**
   * Native Text
   */
  labelProps?: TextProps;
  /**
   * Button press action
   */
  onPress: () => void;
  /**
   * Show Trailing Icon. Default: false
   */
  withTrailingIcon?: boolean;
  /**
   * Show Leading Icon. Default: false
   */
  withLeadingIcon?: boolean;
  /**
   * Show Progress Indicator Animating
   */
  isLoading?: boolean;
  /** Name of the icon to be used as leading icon. Required when withLeadingIcon is true */
  leadingIconName?: string;
  /** Name of the icon to be used as trailing icon. Required when withTrailingIcon is true */
  trailingIconName?: string;
  /** Defines if button is disabled. Default: false */
  isDisabled?: boolean;
  /** Defines if button should use colors from inverse mode. Default: false */
  isInverse?: boolean;
  /** Used only to allow wrapping the component with styled-components */
  style?: StyleProp<ViewStyle>;
}

export interface ButtonVariantStyles {
  Container: React.ComponentType<
    StyledContainerProps & TouchableHighlightProps
  >;
  Label: React.ComponentType<StyledLabelProps>;
  LeadingIconContainer: React.ComponentType;
  TrailingIconContainer: React.ComponentType;
  LeadingIcon: React.ComponentType<StyledIconProps>;
  TrailingIcon: React.ComponentType<StyledIconProps>;
  ProgressIndicator: React.ComponentType<StyledProgressIndicatorProps>;
  ProgressIndicatorIcon: React.ComponentType<ProgressIndicatorIconProps>;
  ContentContainer: React.ComponentType;
}

export type Props = CommonProps & ButtonVariants;
