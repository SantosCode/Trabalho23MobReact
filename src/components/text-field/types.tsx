import {
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  ViewProps,
  TouchableWithoutFeedbackProps,
  TextProps,
  TouchableOpacityProps,
  TextInput,
  StyleProp,
  ViewStyle,
} from "react-native";
import {
  TextInputMaskTypeProp,
  TextInputMaskOptionProp,
  TextInputMaskProps,
  TextInputMask,
  TextInputMaskMethods,
} from "react-native-masked-text";
import {Theme} from "src/theme/theme";

export interface Props {
  /** Text Field text value */
  value: string;
  /** Callback to handle changes events */
  onChange: (text: string) => void;
  /** Callback to handle blur events */
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  /** Callback to handle focus events */
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  /** TextInput props */
  textInputProps?: TextInputProps;
  /** Text Field placeholder */
  placeholder?: string;
  /** Text Field's text label */
  label: string;
  /** Defines Text Field's max length */
  maxLength?: number;
  /** Use this to show or hide the character count indicator */
  showCount?: boolean;
  /** Text to be used as help text */
  assistiveText?: string;
  /** Use this to show or hide the Leading Icon. Default: false */
  showLeadingIcon?: boolean;
  /** Name of the icon to be used as leading icon. Required when showLeadingIcon is true */
  leadingIconName?: string;
  /** Use this to show or hide the Clear Text Field Icon. Default: true */
  showClearIcon?: boolean;
  /** Callback to clear the value manually */
  onClearTextField?: () => void;
  /** Use this to show or hide the Trailing Icon. Default: false */
  showTrailingIcon?: boolean;
  /** Name of the icon to be used as leading icon. Required when showLeadingIcon is true */
  trailingIconName?: string;
  /** Use this to disable the input. Default: false */
  isDisabled?: boolean;
  /** Error message */
  error?: string;
  /** Set the input as multiline. Default: false */
  multiline?: boolean;
  /** Use this to make the input a password input. Default: false */
  isPassword?: boolean;
  /** Defines if Text Field has mask */
  isMasked?: boolean;
  /** React Native TextInputMaskTypeProp */
  maskType?: TextInputMaskTypeProp;
  /** React Native TextInputMaskOptionProp */
  maskOptions?: TextInputMaskOptionProp;
  /** For Money Text Field. Use this to show or hide prefix */
  showPrefix?: boolean;
  /** Use this to define Emphasis style for Text Input */
  isEmphasis?: boolean;
  /** Container Props: ViewProps */
  containerProps?: ViewProps;
  /** TouchableContainer Props: TouchableWithoutFeedbackProps */
  touchableContainerProps?: TouchableWithoutFeedbackProps;
  /** Top Container Props: ViewProps */
  topContainerProps?: ViewProps;
  /** Content Container Props: ViewProps */
  contentContainerProps?: ViewProps;
  /** Leading Content Container Props: ViewProps */
  leadingContentContainerProps?: ViewProps;
  /** TextField Container Props: ViewProps */
  textFieldContainerProps?: ViewProps;
  /** Trailing Content Container Props: ViewProps */
  trailingContentContainerProps?: ViewProps;
  /** Label Props: TextProps */
  labelProps?: TextProps;
  /** Bottom Container Props: ViewProps */
  bottomContainerProps?: ViewProps;
  /** Error Icon Container Props: ViewProps */
  errorIconContainerProps?: ViewProps;
  /** Leading Icon Container Props: ViewProps */
  leadingIconContainerProps?: ViewProps;
  /** Trailing Icon Container Props: ViewProps */
  trailingIconContainerProps?: ViewProps;
  /** Action Icon Container Props: TouchableOpacityProps */
  actionIconContainerProps?: TouchableOpacityProps;
  /** Prefix Container Props: ViewProps */
  prefixContainerProps?: ViewProps;
  /** Prefix Label Props: TextProps */
  prefixLabelProps?: TextProps;
  /** Only for styled-components composing */
  style?: StyleProp<ViewStyle>;
}

export interface StyledTextFieldProps {
  isFocused: boolean;
  isEmphasis: boolean;
  multiline: boolean;
}

export interface StyledContainerProps {
  isFocused: boolean;
  isDisabled: boolean;
  hasError: boolean;
  multiline: boolean;
  isEmphasis: boolean;
  isValueEmpty: boolean;
}

export interface StyledLabelProps {
  isFocused: boolean;
  isDisabled: boolean;
  hasError: boolean;
}

export interface StyledAssistiveTextProps {
  isDisabled: boolean;
}

export interface GetUnfocusedAnimationValuesParams {
  theme: Theme;
  showLeadingIcon: boolean;
  prefixWidth: number;
  showPrefix: boolean;
  isEmphasis: boolean;
}

export interface AnimationValues {
  top: number;
  fontSize: number;
  lineHeight: number;
  left: number;
}

export interface TextFielVariantsStyles {
  ContentContainer: React.ComponentType<StyledContainerProps>;
  LeadingContentContainer: React.ComponentType<{multiline: boolean}>;
  TrailingContentContainer: React.ComponentType<{multiline: boolean}>;
  TouchableContainer: React.ComponentType;
  TextFieldContainer: React.ComponentType;
  TopContainer: React.ComponentType;
  TextInput: React.ComponentType<
    TextInputProps & {ref: React.RefObject<TextInput>}
  >;
  MaskedTextInput: React.ComponentType<
    TextInputMaskProps & {ref: React.RefObject<TextInputMask>}
  >;
  Label: React.ComponentType<StyledLabelProps>;
  getUnfocusedAnimationValues: (
    values: GetUnfocusedAnimationValuesParams,
  ) => AnimationValues;
  getFocusedAnimationValues: (theme: Theme) => AnimationValues;
  ErrorIconContainer: React.ComponentType;
  TextFieldErrorIcon: React.ComponentType;
  TextFieldClearIcon: React.ComponentType;
  LeadingIconContainer: React.ComponentType;
  TrailingIconContainer: React.ComponentType;
  TextFieldEyeIcon: React.ComponentType;
  TextFieldCrossedEyeIcon: React.ComponentType;
  ActionIconContainer: React.ComponentType<TouchableOpacityProps>;
  PrefixContainer: React.ComponentType<ViewProps>;
  PrefixLabel: React.ComponentType<{isEmphasis: boolean}>;
}

export type InputMaskType = TextInputMask &
  TextInputMaskMethods &
  TextInputMaskProps;
