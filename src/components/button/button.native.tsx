import React, {ReactElement, useState, useEffect} from "react";
import {
  Animated,
  Easing,
  ViewProps,
  TextProps,
  StyleProp,
  ViewStyle,
} from "react-native";
import noop from "lodash/noop";
import {ButtonStyles} from "src/components/button/button.native.styles";
import {
  Props,
  ButtonVariantStyles,
  ButtonSizes,
  ButtonTypes,
} from "src/components/button/types";
import {LeadingIcon} from "src/components/button/icons/leading-icon.native";
import {TrailingIcon} from "src/components/button/icons/trailing-icon.native";

interface ButtonMethods {
  handleUnderlayChange: (value: boolean) => () => void;
  renderContent: () => ReactElement;
  renderLeadingIcon: () => ReactElement | null;
  renderTrailingIcon: () => ReactElement | null;
}

export interface ButtonElements {
  isPressed: boolean;
  setPressed: (value: boolean) => void;
  spin: Animated.AnimatedInterpolation;
  ButtonVariantStyle: ButtonVariantStyles;
  isLoading: boolean;
  onPress: () => void;
  buttonSize: ButtonSizes;
  buttonType: ButtonTypes;
  containerProps?: ViewProps;
  isDisabled: boolean;
  label: string;
  labelProps?: TextProps;
  withTrailingIcon: boolean;
  withLeadingIcon: boolean;
  leadingIconName?: string;
  trailingIconName?: string;
  isInverse: boolean;
  style?: StyleProp<ViewStyle>;
}

export const useButtonElements = ({
  buttonType,
  withTrailingIcon = false,
  withLeadingIcon = false,
  isLoading = false,
  isInverse = false,
  isDisabled = false,
  ...rest
}: Props): ButtonElements => {
  const ButtonVariantStyle = ButtonStyles[buttonType];
  const [isPressed, setPressed] = useState(false);
  const [spinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "720deg"],
  });

  return {
    isPressed,
    setPressed,
    spin,
    ButtonVariantStyle,
    withTrailingIcon,
    withLeadingIcon,
    isLoading,
    isInverse,
    isDisabled,
    buttonType,
    ...rest,
  };
};

export const useButtonMethods = ({
  setPressed,
  ButtonVariantStyle,
  isLoading,
  isInverse,
  isDisabled,
  buttonSize,
  buttonType,
  spin,
  withLeadingIcon,
  withTrailingIcon,
  isPressed,
  leadingIconName,
  labelProps,
  label,
  trailingIconName,
}: ButtonElements): ButtonMethods => {
  const handleUnderlayChange = (value: boolean) => (): void => {
    setPressed(value);
  };

  const renderLeadingIcon = (): ReactElement | null => {
    if (!withLeadingIcon) {
      return null;
    }

    return (
      <ButtonVariantStyle.LeadingIconContainer>
        <LeadingIcon
          isDisabled={isDisabled}
          isPressed={isPressed}
          leadingIconName={leadingIconName}
          buttonType={buttonType}
          isInverse={isInverse}
        />
      </ButtonVariantStyle.LeadingIconContainer>
    );
  };

  const renderTrailingIcon = (): ReactElement | null => {
    if (!withTrailingIcon) {
      return null;
    }

    return (
      <ButtonVariantStyle.TrailingIconContainer>
        <TrailingIcon
          isDisabled={isDisabled}
          isPressed={isPressed}
          buttonType={buttonType}
          trailingIconName={trailingIconName}
          isInverse={isInverse}
        />
      </ButtonVariantStyle.TrailingIconContainer>
    );
  };

  const renderContent = (): ReactElement => {
    if (isLoading) {
      return (
        <ButtonVariantStyle.ProgressIndicator
          buttonSize={buttonSize}
          style={{transform: [{rotate: spin}]}}
          isInverse={isInverse}>
          <ButtonVariantStyle.ProgressIndicatorIcon isInverse={isInverse} />
        </ButtonVariantStyle.ProgressIndicator>
      );
    }

    return (
      <ButtonVariantStyle.ContentContainer>
        {renderLeadingIcon()}
        <ButtonVariantStyle.Label
          buttonType={buttonType}
          buttonSize={buttonSize}
          isPressed={isPressed}
          isDisabled={isDisabled}
          isInverse={isInverse}
          {...labelProps}>
          {label}
        </ButtonVariantStyle.Label>
        {renderTrailingIcon()}
      </ButtonVariantStyle.ContentContainer>
    );
  };

  return {
    handleUnderlayChange,
    renderContent,
    renderTrailingIcon,
    renderLeadingIcon,
  };
};

export const Button = (props: Props): ReactElement => {
  const buttonElements = useButtonElements(props);

  const {handleUnderlayChange, renderContent} =
    useButtonMethods(buttonElements);

  const {
    ButtonVariantStyle,
    isPressed,
    buttonType,
    buttonSize,
    isDisabled,
    isLoading,
    isInverse,
    style,
    containerProps,
    onPress,
  } = buttonElements;

  return (
    <ButtonVariantStyle.Container
      buttonType={buttonType}
      buttonSize={buttonSize}
      isDisabled={isDisabled}
      onPress={isLoading ? noop : onPress}
      onShowUnderlay={handleUnderlayChange(true)}
      onHideUnderlay={handleUnderlayChange(false)}
      disabled={isDisabled}
      isInverse={isInverse}
      isPressed={isPressed}
      style={style}
      {...containerProps}>
      {renderContent()}
    </ButtonVariantStyle.Container>
  );
};
