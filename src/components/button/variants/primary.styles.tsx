import styled from "styled-components/native";
import {ColorValue, Animated} from "react-native";
import {None, Option} from "monapt";
import {getFontFamily} from "src/helpers/get-font-family/get-font-family";
import {FontFamilyOptions} from "src/helpers/get-font-family/types";
import {getLineHeight} from "src/helpers/get-line-height/get-line-height";
import {
  StyledContainerProps,
  StyledLabelProps,
  ButtonSizes,
  StyledIconProps,
  StyledProgressIndicatorProps,
  ButtonVariantStyles,
  ProgressIndicatorIconProps,
  StyledContentContainerProps,
  StyledLeadingIconContainerProps,
  StyledTrailingIconContainerProps,
} from "src/components/button/types";
import {Icon} from "src/components/iconography/icon.native";
import {IconographyNames} from "src/enums/iconography-names";
import {Props as IconProps} from "src/iconography/iconography-types";
import {Theme} from "src/theme/theme";

const getProgressIndicatorSize = ({
  theme,
  buttonSize,
}: {
  theme: Theme;
  buttonSize: ButtonSizes;
}): string => {
  if (buttonSize === ButtonSizes.small) {
    return `
      width: ${theme.dimensions.sizes.xxxs}
      height: ${theme.dimensions.sizes.xxxs}
    `;
  }

  return `
      width: ${theme.dimensions.sizes.xxs}
      height: ${theme.dimensions.sizes.xxs}
    `;
};

const getInverseLabelColor = ({
  isDisabled,
  theme,
  isPressed,
}: {
  theme: Theme;
  isDisabled: boolean;
  isPressed: boolean;
}): string => {
  if (isDisabled || isPressed) {
    return theme.palette.neutral.lightest;
  }

  return theme.palette.primary.regular;
};

const getLabelAndIconColor = ({
  isDisabled,
  isInverse,
  theme,
  isPressed,
}: {
  theme: Theme;
  isInverse: boolean;
  isDisabled: boolean;
  isPressed: boolean;
}): string => {
  if (!isInverse) {
    return theme.palette.neutral.lightest;
  }

  return getInverseLabelColor({
    isDisabled,
    isPressed,
    theme,
  });
};

const getBackgroundColor = ({
  isDisabled,
  isInverse,
  theme,
}: {
  theme: Theme;
  isInverse: boolean;
  isDisabled: boolean;
}): string => {
  if (isDisabled) {
    return theme.palette.neutral.medium;
  }

  if (isInverse) {
    return theme.palette.neutral.lightest;
  }

  return theme.palette.primary.regular;
};

const getUnderlayColor = ({
  theme,
  isInverse,
}: {
  theme: Theme;
  isInverse: boolean;
}): ColorValue => {
  if (isInverse) {
    return theme.palette.primary.lightest;
  }

  return theme.palette.primary.darkest;
};

export const Container = styled.TouchableHighlight.attrs<StyledContainerProps>(
  ({theme, isInverse}) => ({
    underlayColor: getUnderlayColor({theme, isInverse}),
  }),
)<StyledContainerProps>`
  width: 100%;
  height: ${({buttonSize, theme}) => {
    switch (buttonSize) {
      case ButtonSizes.large:
        return theme.dimensions.sizes.l;
      case ButtonSizes.medium:
        return theme.dimensions.sizes.m;
      default:
        return theme.dimensions.sizes.s;
    }
  }};
  border-radius: ${({theme}) => theme.shape.borderRadius.pill};
  background-color: ${getBackgroundColor};
  border-width: ${({theme}) => theme.shape.borderWidth.none};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ContentContainer = styled.View<StyledContentContainerProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const Label = styled.Text<StyledLabelProps>`
  font-family: ${({theme}) =>
    getFontFamily(theme, {
      fontFamily: FontFamilyOptions.primary,
      fontStyle: None,
      fontWeight: Option(theme.typography.fontWeight.medium),
    })};
  line-height: ${({theme}) =>
    getLineHeight(
      theme.typography.lineHeight.tight,
      theme.typography.fontSize.m,
    )};
  color: ${getLabelAndIconColor};
  font-size: ${({theme}) => theme.typography.fontSize.m};
  padding-top: 2px;
`;

export const LeadingIconContainer = styled.View<StyledLeadingIconContainerProps>`
  height: ${({theme}) => theme.dimensions.sizes.xxxs};
  width: ${({theme}) => theme.dimensions.sizes.xxxs};
  align-items: center;
  justify-content: center;
  margin-right: ${({theme}) => theme.spacing.spacingHorizontal.xxxxxs};
`;

export const LeadingIcon = styled(Icon).attrs<StyledIconProps>(
  ({theme, iconName, isInverse, isDisabled, isPressed}) => ({
    color: getLabelAndIconColor({theme, isDisabled, isInverse, isPressed}),
    iconName,
  }),
)<StyledIconProps>``;

export const TrailingIcon = styled(Icon).attrs<StyledIconProps>(
  ({theme, iconName, isInverse, isDisabled, isPressed}) => ({
    color: getLabelAndIconColor({theme, isDisabled, isInverse, isPressed}),
    iconName,
  }),
)<StyledIconProps>``;

export const TrailingIconContainer = styled.View<StyledTrailingIconContainerProps>`
  height: ${({theme}) => theme.dimensions.sizes.xxxs};
  width: ${({theme}) => theme.dimensions.sizes.xxxs};
  position: absolute;
  justify-content: center;
  right: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
`;

export const ProgressIndicator = styled(
  Animated.View,
)<StyledProgressIndicatorProps>`
  ${getProgressIndicatorSize}
`;

export const ProgressIndicatorIcon = styled(
  Icon,
).attrs<ProgressIndicatorIconProps>(
  ({theme}): IconProps => ({
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.neutral.lighter,
    iconName: IconographyNames.progressIndicator,
  }),
)<ProgressIndicatorIconProps>``;

export const PrimaryStyles: ButtonVariantStyles = {
  Container,
  Label,
  LeadingIconContainer,
  TrailingIconContainer,
  LeadingIcon,
  TrailingIcon,
  ProgressIndicator,
  ProgressIndicatorIcon,
  ContentContainer,
};
