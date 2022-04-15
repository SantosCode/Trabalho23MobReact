import React, {
  ReactElement,
  useState,
  useEffect,
  useRef,
  RefObject,
} from "react";
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  ViewProps,
  TouchableWithoutFeedbackProps,
  TextProps,
  TouchableOpacityProps,
} from "react-native";
import {
  TextInputMaskTypeProp,
  TextInputMaskOptionProp,
} from "react-native-masked-text";
import {useTheme} from "styled-components/native";
import isEmpty from "lodash/isEmpty";
import noop from "lodash/noop";
import {
  BottomContainer,
  TextFieldStyle,
  AssistiveText,
  CountText,
  Container,
  ErrorText,
} from "src/components/text-field/text-field.native.styles";
import {Props, InputMaskType} from "src/components/text-field/types";
import {If} from "src/helpers/if/if";
import {TextFieldLeadingIcon} from "src/components/text-field/icons/leading-icon";
import {TextFieldTrailingIcon} from "src/components/text-field/icons/trailing-icon";
import {Prefix} from "src/components/text-field/prefix/prefix.native";

type StateHandler<T> = (state: T) => void;

interface State {
  isFocused: boolean;
  setFocused: StateHandler<boolean>;
  hideText: boolean;
  setHideText: StateHandler<boolean>;
  animatedLineHeight: Animated.Value;
  animatedTopPosition: Animated.Value;
  animatedLeftPosition: Animated.Value;
  animatedFontSize: Animated.Value;
  prefixWidth: number;
  setPrefixWidth: StateHandler<number>;
}

interface Refs {
  textInputRef: RefObject<TextInput>;
  maskedInputRef: RefObject<InputMaskType>;
}

interface Properties {
  isValueEmpty: boolean;
  hasError: boolean;
  placeholderText?: string;
  value: string;
  onChange: (text: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  textInputProps?: TextInputProps;
  placeholder?: string;
  label: string;
  maxLength?: number;
  showCount: boolean;
  assistiveText?: string;
  showLeadingIcon: boolean;
  leadingIconName?: string;
  showClearIcon: boolean;
  onClearTextField?: () => void;
  showTrailingIcon: boolean;
  trailingIconName?: string;
  isDisabled: boolean;
  error?: string;
  multiline: boolean;
  isPassword: boolean;
  isMasked: boolean;
  maskType?: TextInputMaskTypeProp;
  maskOptions?: TextInputMaskOptionProp;
  showPrefix: boolean;
  isEmphasis: boolean;
  containerProps?: ViewProps;
  touchableContainerProps?: TouchableWithoutFeedbackProps;
  topContainerProps?: ViewProps;
  contentContainerProps?: ViewProps;
  leadingContentContainerProps?: ViewProps;
  textFieldContainerProps?: ViewProps;
  trailingContentContainerProps?: ViewProps;
  labelProps?: TextProps;
  bottomContainerProps?: ViewProps;
  errorIconContainerProps?: ViewProps;
  leadingIconContainerProps?: ViewProps;
  trailingIconContainerProps?: ViewProps;
  actionIconContainerProps?: TouchableOpacityProps;
  prefixContainerProps?: ViewProps;
  prefixLabelProps?: TextProps;
}

interface TextFieldMethods {
  renderTextField: () => ReactElement;
  renderBottom: () => ReactElement | null;
  renderClearIcon: () => ReactElement | null;
  renderLeadingIcon: () => ReactElement | null;
  renderTrailingIcon: () => ReactElement | null;
  renderErrorIcon: () => ReactElement | null;
  renderPasswordIcon: () => ReactElement | null;
  renderPrefix: () => ReactElement | null;
  handleFocusInput: () => void | undefined;
  handleFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  handleClearTextField: () => void;
  handlePrefixLayout: (e: LayoutChangeEvent) => void;
  renderCount: () => ReactElement;
}

export interface TextFieldElements {
  state: State;
  refs: Refs;
  properties: Properties;
}

export const useTextFieldElements = ({
  textInputProps,
  onBlur = noop,
  maxLength,
  assistiveText,
  showCount = false,
  onChange,
  value,
  label,
  placeholder,
  showLeadingIcon = false,
  leadingIconName,
  trailingIconName,
  showClearIcon = true,
  onClearTextField,
  showTrailingIcon = false,
  isDisabled = false,
  isPassword = false,
  error,
  onFocus = noop,
  multiline = false,
  maskType,
  isMasked = false,
  maskOptions,
  showPrefix = true,
  isEmphasis = false,
  bottomContainerProps,
  containerProps,
  contentContainerProps,
  labelProps,
  leadingContentContainerProps,
  textFieldContainerProps,
  topContainerProps,
  touchableContainerProps,
  trailingContentContainerProps,
}: Props): TextFieldElements => {
  const theme = useTheme();
  const isValueEmpty = isEmpty(value);
  const hasError = !isEmpty(error);
  const ANIMATION_DURATION = 150;

  const [prefixWidth, setPrefixWidth] = useState<number>(0);

  const unfocusedAnimationValues = TextFieldStyle.getUnfocusedAnimationValues({
    theme,
    showLeadingIcon,
    prefixWidth,
    showPrefix: showPrefix && isMasked && maskType === "money",
    isEmphasis,
  });
  const focusedAnimationValues =
    TextFieldStyle.getFocusedAnimationValues(theme);
  let initialAnimatedFontSize = focusedAnimationValues.fontSize;
  let initialAnimatedLineHeight = focusedAnimationValues.lineHeight;
  let initialAnimatedTopPosition = focusedAnimationValues.top;
  let initialAnimatedLeftPosition = focusedAnimationValues.left;

  if (isValueEmpty) {
    initialAnimatedFontSize = unfocusedAnimationValues.fontSize;
    initialAnimatedLineHeight = unfocusedAnimationValues.lineHeight;
    initialAnimatedTopPosition = unfocusedAnimationValues.top;
    initialAnimatedLeftPosition = unfocusedAnimationValues.left;
  }

  const textInputRef = useRef<TextInput>(null);
  const maskedInputRef = useRef<InputMaskType>(null);
  const [isFocused, setFocused] = useState(false);
  const [hideText, setHideText] = useState(isPassword);
  const [animatedFontSize] = useState(
    new Animated.Value(initialAnimatedFontSize),
  );
  const [animatedLineHeight] = useState(
    new Animated.Value(initialAnimatedLineHeight),
  );
  const [animatedTopPosition] = useState(
    new Animated.Value(initialAnimatedTopPosition),
  );
  const [animatedLeftPosition] = useState(
    new Animated.Value(initialAnimatedLeftPosition),
  );

  const placeholderText = isFocused ? placeholder : undefined;

  const fromUnfocusedAnimation = Animated.parallel([
    Animated.timing(animatedFontSize, {
      toValue: unfocusedAnimationValues.fontSize,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
      easing: Easing.linear,
    }),
    Animated.timing(animatedLineHeight, {
      toValue: unfocusedAnimationValues.lineHeight,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
      easing: Easing.linear,
    }),
    Animated.timing(animatedTopPosition, {
      toValue: unfocusedAnimationValues.top,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
      easing: Easing.linear,
    }),
    Animated.timing(animatedLeftPosition, {
      toValue: unfocusedAnimationValues.left,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
      easing: Easing.linear,
    }),
  ]);

  const fromFocusedAnimation = Animated.parallel([
    Animated.timing(animatedFontSize, {
      toValue: focusedAnimationValues.fontSize,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
      easing: Easing.linear,
    }),
    Animated.timing(animatedLineHeight, {
      toValue: focusedAnimationValues.lineHeight,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
      easing: Easing.linear,
    }),
    Animated.timing(animatedTopPosition, {
      toValue: focusedAnimationValues.top,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
      easing: Easing.linear,
    }),
    Animated.timing(animatedLeftPosition, {
      toValue: focusedAnimationValues.left,
      duration: ANIMATION_DURATION,
      useNativeDriver: false,
      easing: Easing.linear,
    }),
  ]);

  useEffect(() => {
    if (!isValueEmpty) {
      return;
    }

    if (isFocused) {
      fromFocusedAnimation.start();

      return;
    }

    fromUnfocusedAnimation.start();
  });

  return {
    refs: {
      maskedInputRef,
      textInputRef,
    },
    state: {
      isFocused,
      setFocused,
      hideText,
      setHideText,
      animatedFontSize,
      animatedLeftPosition,
      animatedLineHeight,
      animatedTopPosition,
      prefixWidth,
      setPrefixWidth,
    },
    properties: {
      hasError,
      isValueEmpty,
      placeholderText,
      textInputProps,
      onBlur,
      maxLength,
      assistiveText,
      showCount,
      onChange,
      value,
      label,
      placeholder,
      showLeadingIcon,
      leadingIconName,
      trailingIconName,
      showClearIcon,
      onClearTextField,
      showTrailingIcon,
      isDisabled,
      isPassword,
      error,
      onFocus,
      multiline,
      maskType,
      isMasked,
      maskOptions,
      showPrefix,
      isEmphasis,
      bottomContainerProps,
      containerProps,
      contentContainerProps,
      labelProps,
      leadingContentContainerProps,
      textFieldContainerProps,
      topContainerProps,
      touchableContainerProps,
      trailingContentContainerProps,
    },
  };
};

export const useTextFieldBehaviors = ({
  properties,
  refs,
  state,
}: TextFieldElements): TextFieldMethods => {
  const handleFocus = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ): void => {
    state.setFocused(true);

    properties.onFocus(e);
  };

  const handleBlur = (
    e: NativeSyntheticEvent<TextInputFocusEventData>,
  ): void => {
    state.setFocused(false);

    properties.onBlur(e);
  };

  const handleFocusInput = (): void | undefined => {
    refs.textInputRef.current?.focus();
    refs.maskedInputRef.current?.getElement().focus();
  };

  const handleClearTextField = (): void => {
    if (properties.onClearTextField !== undefined) {
      properties.onClearTextField();
      return;
    }
    refs.maskedInputRef.current?.getElement().clear();
    refs.textInputRef.current?.clear();
  };

  const handlePrefixLayout = (event: LayoutChangeEvent) => {
    state.setPrefixWidth(event.nativeEvent.layout.width);
  };

  const renderTextField = (): ReactElement => {
    const textInputBaseProps = {
      onChangeText: properties.onChange,
      onBlur: handleBlur,
      value: properties.value,
      onFocus: handleFocus,
      placeholder: properties.placeholderText,
      isFocused: state.isFocused,
      maxLength: properties.maxLength,
      showLeadingIcon: properties.showLeadingIcon,
      showClearIcon: properties.showClearIcon,
      showTrailingIcon: properties.showTrailingIcon,
      isDisabled: properties.isDisabled,
      editable: !properties.isDisabled,
      hasError: properties.hasError,
      multiline: properties.multiline,
      prefixWidth: state.prefixWidth,
      isEmphasis: properties.isEmphasis,
      secureTextEntry: state.hideText,
    };

    if (properties.isMasked && properties.maskType !== undefined) {
      return (
        <TextFieldStyle.MaskedTextInput
          type={properties.maskType}
          options={properties.maskOptions}
          ref={refs.maskedInputRef}
          textAlignVertical="top"
          {...textInputBaseProps}
          {...properties.textInputProps}
        />
      );
    }

    return (
      <TextFieldStyle.TextInput
        ref={refs.textInputRef}
        textAlignVertical="top"
        {...textInputBaseProps}
        {...properties.textInputProps}
      />
    );
  };

  const renderCount = (): ReactElement => {
    const maxText =
      properties.maxLength === undefined ? "" : ` / ${properties.maxLength}`;
    return (
      <CountText
        isDisabled={
          properties.isDisabled
        }>{`${properties.value.length}${maxText}`}</CountText>
    );
  };

  const renderBottom = (): ReactElement | null => {
    if (
      properties.assistiveText === undefined &&
      !properties.showCount &&
      !properties.hasError
    ) {
      return null;
    }

    return (
      <BottomContainer {...properties.bottomContainerProps}>
        <If
          condition={
            properties.assistiveText !== undefined && !properties.hasError
          }>
          <AssistiveText isDisabled={properties.isDisabled}>
            {properties.assistiveText}
          </AssistiveText>
        </If>
        <If condition={properties.hasError}>
          <ErrorText isDisabled={properties.isDisabled}>
            {properties.error}
          </ErrorText>
        </If>
        {properties.showCount && renderCount()}
      </BottomContainer>
    );
  };

  const renderLeadingIcon = (): ReactElement | null => {
    if (!properties.showLeadingIcon) {
      return null;
    }

    return (
      <TextFieldLeadingIcon
        leadingIconName={properties.leadingIconName}
        isDisabled={properties.isDisabled}
      />
    );
  };

  const renderClearIcon = (): ReactElement | null => {
    if (
      !properties.showClearIcon ||
      properties.isValueEmpty ||
      properties.isPassword
    ) {
      return null;
    }

    return (
      <TextFieldStyle.ActionIconContainer onPress={handleClearTextField}>
        <TextFieldStyle.TextFieldClearIcon />
      </TextFieldStyle.ActionIconContainer>
    );
  };

  const renderTrailingIcon = (): ReactElement | null => {
    if (!properties.showTrailingIcon) {
      return null;
    }

    return (
      <TextFieldTrailingIcon
        isDisabled={properties.isDisabled}
        trailingIconName={properties.trailingIconName}
      />
    );
  };

  const renderErrorIcon = (): ReactElement | null => {
    if (!properties.hasError) {
      return null;
    }

    return (
      <TextFieldStyle.ErrorIconContainer>
        <TextFieldStyle.TextFieldErrorIcon />
      </TextFieldStyle.ErrorIconContainer>
    );
  };

  const renderPasswordIcon = (): ReactElement | null => {
    if (!properties.isPassword) {
      return null;
    }

    return (
      <TextFieldStyle.ActionIconContainer
        onPress={() => state.setHideText(!state.hideText)}>
        {state.hideText ? (
          <TextFieldStyle.TextFieldCrossedEyeIcon />
        ) : (
          <TextFieldStyle.TextFieldEyeIcon />
        )}
      </TextFieldStyle.ActionIconContainer>
    );
  };

  const renderPrefix = (): ReactElement | null => {
    if (
      properties.isMasked &&
      properties.maskType === "money" &&
      properties.showPrefix
    ) {
      return (
        <Prefix
          onLayout={handlePrefixLayout}
          isEmphasis={properties.isEmphasis}
        />
      );
    }

    return null;
  };

  return {
    renderTextField,
    renderPrefix,
    renderPasswordIcon,
    renderTrailingIcon,
    renderErrorIcon,
    renderLeadingIcon,
    renderClearIcon,
    renderBottom,
    handleFocusInput,
    handleFocus,
    handleBlur,
    handleClearTextField,
    handlePrefixLayout,
    renderCount,
  };
};

export const TextField = (props: Props): ReactElement => {
  const {properties, refs, state} = useTextFieldElements(props);
  const {
    renderTextField,
    renderPrefix,
    renderPasswordIcon,
    renderTrailingIcon,
    renderErrorIcon,
    renderLeadingIcon,
    renderClearIcon,
    renderBottom,
    handleFocusInput,
  } = useTextFieldBehaviors({
    properties,
    refs,
    state,
  });

  return (
    <Container style={props.style} {...properties.containerProps}>
      <TextFieldStyle.TouchableContainer
        onPress={handleFocusInput}
        {...properties.touchableContainerProps}>
        <TextFieldStyle.TopContainer {...properties.topContainerProps}>
          <TextFieldStyle.ContentContainer
            isFocused={state.isFocused}
            multiline={properties.multiline}
            isEmphasis={properties.isEmphasis}
            isValueEmpty={properties.isValueEmpty}
            hasError={properties.hasError}
            isDisabled={properties.isDisabled}
            {...properties.contentContainerProps}>
            <TextFieldStyle.LeadingContentContainer
              multiline={properties.multiline}
              {...properties.leadingContentContainerProps}>
              {renderLeadingIcon()}
              {renderPrefix()}
            </TextFieldStyle.LeadingContentContainer>
            <TextFieldStyle.TextFieldContainer
              {...properties.textFieldContainerProps}>
              {renderTextField()}
            </TextFieldStyle.TextFieldContainer>
            <TextFieldStyle.TrailingContentContainer
              {...properties.trailingContentContainerProps}
              multiline={properties.multiline}>
              {renderClearIcon()}
              {renderPasswordIcon()}
              {renderTrailingIcon()}
              {renderErrorIcon()}
            </TextFieldStyle.TrailingContentContainer>
            <TextFieldStyle.Label
              style={{
                top: state.animatedTopPosition,
                lineHeight: state.animatedLineHeight,
                fontSize: state.animatedFontSize,
                left: state.animatedLeftPosition,
              }}
              onPress={handleFocusInput}
              isFocused={state.isFocused}
              isDisabled={properties.isDisabled}
              hasError={properties.hasError}
              {...properties.labelProps}>
              {properties.label}
            </TextFieldStyle.Label>
          </TextFieldStyle.ContentContainer>
        </TextFieldStyle.TopContainer>
      </TextFieldStyle.TouchableContainer>
      {renderBottom()}
    </Container>
  );
};
