import styled, {css} from "styled-components/native";
import {
  ColorValue,
  Animated,
  View,
  TextInput as RNTextInput,
  TouchableWithoutFeedback,
} from "react-native";
import {None, Option} from "monapt";
import {TextInputMask} from "react-native-masked-text";
import {getFontFamily} from "src/helpers/get-font-family/get-font-family";
import {FontFamilyOptions} from "src/helpers/get-font-family/types";
import {getLineHeight} from "src/helpers/get-line-height/get-line-height";
import {
  StyledTextFieldProps,
  StyledLabelProps,
  StyledContainerProps,
} from "src/components/text-field/types";
import {CalculatePixels} from "src/helpers/calculate-pixels/calculate-pixels";
import {removePixels} from "src/helpers/remove-pixels/remove-pixels";
import {Theme} from "src/theme/theme";
import {Icon} from "src/components/iconography/icon.native";
import {IconographyNames} from "src/enums/iconography-names";
import {Props as IconProps} from "src/iconography/iconography-types";

interface AnimationValues {
  top: number;
  fontSize: number;
  lineHeight: number;
  left: number;
}

interface GetUnfocusedAnimationValuesParams {
  theme: Theme;
  showLeadingIcon: boolean;
  prefixWidth: number;
  showPrefix: boolean;
  isEmphasis: boolean;
}

const initialTopPosition = 16;
const finalTopPosition = -10;
const emphasisInitialPosition = 14;

/**
 * To use the Multiline behavior of growing vertically when it's content grows
 * it shouldn't be set a fixed height. So these paddings works to set the desired
 * height to keep the same behaviors of inputs that are not multiline
 */
const multilinePaddingTop = "17px";
const multilinePaddingBottom = "18px";

const getHeight = ({
  theme,
  multiline,
  isValueEmpty,
}: {
  theme: Theme;
  multiline: boolean;
  isValueEmpty: boolean;
}): string | undefined => {
  if (multiline && !isValueEmpty) {
    return undefined;
  }

  return `
    height: ${theme.dimensions.sizes.xl};
  `;
};

const getTextFieldLineHeight = ({
  theme,
  multiline,
}: {
  theme: Theme;
  multiline: boolean;
}): string | undefined => {
  if (multiline) {
    return `line-height: ${getLineHeight(
      theme.typography.lineHeight.loose,
      theme.typography.fontSize.m,
    )};`;
  }

  return undefined;
};

const containerStyle = css<StyledContainerProps>`
  width: 100%;
  ${getHeight}
  justify-content: center;
  padding-top: ${({multiline}) => {
    if (multiline) {
      return multilinePaddingTop;
    }

    return "0";
  }};
  padding-bottom: ${({theme, multiline, isEmphasis}) => {
    if (multiline) {
      return multilinePaddingBottom;
    }

    if (isEmphasis) {
      return theme.spacing.spacingVertical.xxxxxs;
    }

    return "0";
  }};
  padding-right: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
  padding-left: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
  border-radius: ${({theme}) => theme.shape.borderRadius.xs};
  border-width: ${({theme, isFocused, hasError}) => {
    if (isFocused || hasError) {
      return theme.shape.borderWidth.s;
    }

    return theme.shape.borderWidth.xs;
  }};
  border-color: ${({theme, isFocused, isDisabled, hasError}) => {
    if (hasError) {
      return theme.palette.error.medium;
    }

    if (isDisabled) {
      return theme.palette.neutral.medium;
    }

    if (isFocused) {
      return theme.palette.primary.regular;
    }

    return theme.palette.neutral.darker;
  }};
`;

const fontStyle = css<StyledTextFieldProps>`
  font-family: ${({theme}) =>
    getFontFamily(theme, {
      fontFamily: FontFamilyOptions.primary,
      fontStyle: None,
      fontWeight: Option(theme.typography.fontWeight.regular),
    })};
  font-size: ${({theme, isEmphasis}) => {
    if (isEmphasis) {
      return theme.typography.fontSize.xl;
    }

    return theme.typography.fontSize.m;
  }};
  color: ${({theme}) => theme.palette.neutral.darkest};
  padding: 0;
  ${getTextFieldLineHeight}
`;

export const TouchableContainer = styled(TouchableWithoutFeedback)``;

export const ContentContainer = styled(View)<StyledContainerProps>`
  ${containerStyle}
  flex-direction: row;
  flex-shrink: 1;
`;

export const LeadingContentContainer = styled(View)<{multiline: boolean}>`
  flex-direction: row;
  align-items: ${({multiline}) => (multiline ? "flex-start" : "center")};
  padding-bottom: 5px;
  padding-top: 5px;
`;

export const TrailingContentContainer = styled(View)<{multiline: boolean}>`
  flex-direction: row;
  align-items: ${({multiline}) => (multiline ? "flex-start" : "center")};
  padding-bottom: 5px;
  padding-top: 5px;
`;

export const TextFieldContainer = styled(View)`
  flex: 1;
  justify-content: center;
`;

export const TopContainer = styled(View)`
  padding-top: ${({theme}) => theme.spacing.spacingVertical.xxxxs};
`;

export const TextInput = styled(RNTextInput).attrs<StyledTextFieldProps>(
  ({theme, isFocused}) => {
    if (isFocused) {
      return {
        selectionColor: theme.palette.primary.regular,
      };
    }

    return {
      selectionColor: theme.palette.neutral.darkest as ColorValue,
    };
  },
)<StyledTextFieldProps>`
  ${fontStyle}
`;

export const MaskedTextInput = styled(
  TextInputMask,
).attrs<StyledTextFieldProps>(({theme, isFocused}) => {
  if (isFocused) {
    return {
      selectionColor: theme.palette.primary.regular,
    };
  }

  return {
    selectionColor: theme.palette.neutral.darkest as ColorValue,
  };
})<StyledTextFieldProps>`
  ${fontStyle}
`;

export const Label = styled(Animated.Text)<StyledLabelProps>`
  font-family: ${({theme}) =>
    getFontFamily(theme, {
      fontFamily: FontFamilyOptions.primary,
      fontStyle: None,
      fontWeight: Option(theme.typography.fontWeight.regular),
    })};
  font-size: ${({theme}) => theme.typography.fontSize.m};
  color: ${({theme, isFocused, isDisabled, hasError}) => {
    if (hasError) {
      return theme.palette.error.medium;
    }

    if (isDisabled) {
      return theme.palette.neutral.medium;
    }

    if (isFocused) {
      return theme.palette.primary.regular;
    }

    return theme.palette.neutral.darker;
  }};
  position: absolute;
  background-color: ${({theme}) => theme.palette.neutral.lightest};
`;

export const getUnfocusedAnimationValues = ({
  isEmphasis,
  prefixWidth,
  theme,
  showLeadingIcon,
  showPrefix,
}: GetUnfocusedAnimationValuesParams): AnimationValues => ({
  fontSize: removePixels(theme.typography.fontSize.m),
  lineHeight: removePixels(
    getLineHeight(
      theme.typography.lineHeight.loose,
      theme.typography.fontSize.m,
    ),
  ),
  top: isEmphasis ? emphasisInitialPosition : initialTopPosition,
  left: (() => {
    let calculation = new CalculatePixels(theme.spacing.spacingHorizontal.xxxs);

    if (showLeadingIcon) {
      calculation = calculation
        .sum(theme.dimensions.sizes.xxxs)
        .sum(theme.spacing.spacingHorizontal.xxxxxs);
    }

    if (showPrefix) {
      calculation = calculation
        .sumNumber(prefixWidth)
        .sum(theme.spacing.spacingHorizontal.xxxxxs);
    }

    return calculation.result().toNumber();
  })(),
});

export const getFocusedAnimationValues = (theme: Theme): AnimationValues => ({
  fontSize: removePixels(theme.typography.fontSize.xs),
  lineHeight: removePixels(
    getLineHeight(
      theme.typography.lineHeight.tight,
      theme.typography.fontSize.xs,
    ),
  ),
  top: finalTopPosition,
  left: removePixels(theme.spacing.spacingHorizontal.xxxs),
});

export const ErrorIconContainer = styled(View)`
  height: ${({theme}) => theme.dimensions.sizes.xxxs};
  width: ${({theme}) => theme.dimensions.sizes.xxxs};
  margin-left: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
`;

export const TextFieldErrorIcon = styled(Icon).attrs(
  ({theme}): IconProps => ({
    color: theme.palette.error.medium,
    iconName: IconographyNames.exclamationCircle,
  }),
)``;

export const TextFieldClearIcon = styled(Icon).attrs(
  ({theme}): IconProps => ({
    color: theme.palette.neutral.medium,
    iconName: IconographyNames.clearInput,
  }),
)``;

export const LeadingIconContainer = styled(View)`
  height: ${({theme}) => theme.dimensions.sizes.xxxs};
  width: ${({theme}) => theme.dimensions.sizes.xxxs};
  margin-right: ${({theme}) => theme.spacing.spacingVertical.xxxxxs};
`;

export const TrailingIconContainer = styled(View)`
  height: ${({theme}) => theme.dimensions.sizes.xxxs};
  width: ${({theme}) => theme.dimensions.sizes.xxxs};
  margin-left: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
`;

export const TextFieldEyeIcon = styled(Icon).attrs(
  ({theme}): IconProps => ({
    color: theme.palette.neutral.darker,
    iconName: IconographyNames.eye,
  }),
)``;

export const TextFieldCrossedEyeIcon = styled(Icon).attrs(
  ({theme}): IconProps => ({
    color: theme.palette.neutral.darker,
    iconName: IconographyNames.eyeSlash,
  }),
)``;

export const ActionIconContainer = styled.TouchableOpacity`
  height: ${({theme}) => theme.dimensions.sizes.xxs};
  width: ${({theme}) => theme.dimensions.sizes.xxs};
  margin-left: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
`;

export const PrefixContainer = styled(View)`
  margin-right: ${({theme}) => theme.spacing.spacingHorizontal.xxxxxs};
`;

export const PrefixLabel = styled.Text<{isEmphasis: boolean}>`
  font-family: ${({theme}) =>
    getFontFamily(theme, {
      fontFamily: FontFamilyOptions.primary,
      fontStyle: None,
      fontWeight: Option(theme.typography.fontWeight.regular),
    })};
  line-height: ${({theme, isEmphasis}) => {
    if (isEmphasis) {
      return getLineHeight(
        theme.typography.lineHeight.loose,
        theme.typography.fontSize.s,
      );
    }

    return getLineHeight(
      theme.typography.lineHeight.loose,
      theme.typography.fontSize.m,
    );
  }};
  color: ${({theme}) => theme.palette.neutral.darker};
  font-size: ${({theme, isEmphasis}) => {
    if (isEmphasis) {
      return theme.typography.fontSize.s;
    }

    return theme.typography.fontSize.m;
  }};
`;
