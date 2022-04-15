import styled from "styled-components/native";
import {ColorValue, Animated} from "react-native";
import {None, Option} from "monapt";
import {getFontFamily} from "src/helpers/get-font-family/get-font-family";
import {FontFamilyOptions} from "src/helpers/get-font-family/types";
import {getLineHeight} from "src/helpers/get-line-height/get-line-height";
import {
  StyledContainerProps,
  StyledLabelProps,
  StyledIconProps,
  StyledProgressIndicatorProps,
  ButtonVariantStyles,
  ProgressIndicatorIconProps,
  StyledContentContainerProps,
  StyledLeadingIconContainerProps,
  StyledTrailingIconContainerProps,
} from "src/components/button/types";
import {Theme} from "src/theme/theme";
import {Icon} from "src/components/iconography/icon.native";
import {IconographyNames} from "src/enums/iconography-names";
import {Props as IconProps} from "src/iconography/iconography-types";

interface ProgressIndicatorColors {
  backgroundColor: string;
  color: string;
}

const getInverseColor = ({
  theme,
  isPressed,
}: {
  theme: Theme;
  isPressed: boolean;
}): string => {
  if (isPressed) {
    return theme.palette.primary.lightest;
  }

  return theme.palette.neutral.lightest;
};

const getIconAndLabelColor = ({
  theme,
  isPressed,
  isDisabled,
  isInverse,
}: {
  theme: Theme;
  isPressed: boolean;
  isDisabled: boolean;
  isInverse: boolean;
}) => {
  if (isDisabled) {
    return theme.palette.neutral.medium;
  }

  if (isInverse) {
    return getInverseColor({theme, isPressed});
  }

  if (isPressed) {
    return theme.palette.neutral.darkest;
  }

  return theme.palette.primary.regular;
};

const getProgressIndicatorColors = ({
  isInverse,
  theme,
}: {
  isInverse: boolean;
  theme: Theme;
}): ProgressIndicatorColors => {
  const normalColors: ProgressIndicatorColors = {
    color: theme.palette.primary.regular,
    backgroundColor: theme.palette.neutral.light,
  };

  const inverseColors: ProgressIndicatorColors = {
    color: theme.palette.primary.lightest,
    backgroundColor: theme.palette.neutral.lighter,
  };

  if (isInverse) {
    return inverseColors;
  }

  return normalColors;
};

export const Container = styled.TouchableHighlight.attrs<StyledContainerProps>({
  underlayColor: "transparent" as ColorValue,
})<StyledContainerProps>`
  height: ${({theme}) => theme.dimensions.sizes.s};
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ContentContainer = styled.View<StyledContentContainerProps>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
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
      theme.typography.fontSize.s,
    )};
  color: ${getIconAndLabelColor};
  padding-top: 2px;
  font-size: ${({theme}) => theme.typography.fontSize.s};
`;

export const LeadingIcon = styled(Icon).attrs<StyledIconProps>(
  ({theme, isPressed, isDisabled, iconName, isInverse}) => ({
    color: getIconAndLabelColor({theme, isPressed, isDisabled, isInverse}),
    iconName,
  }),
)<StyledIconProps>``;

export const TrailingIcon = styled(Icon).attrs<StyledIconProps>(
  ({theme, isPressed, isDisabled, iconName, isInverse}) => ({
    color: getIconAndLabelColor({theme, isPressed, isDisabled, isInverse}),
    iconName,
  }),
)<StyledIconProps>``;

export const LeadingIconContainer = styled.View<StyledLeadingIconContainerProps>`
  height: ${({theme}) => theme.dimensions.sizes.xxxs};
  width: ${({theme}) => theme.dimensions.sizes.xxxs};
  align-items: center;
  justify-content: center;
  margin-right: ${({theme}) => theme.spacing.spacingHorizontal.xxxxxs};
`;

export const TrailingIconContainer = styled.View<StyledTrailingIconContainerProps>`
  height: ${({theme}) => theme.dimensions.sizes.xxxs};
  width: ${({theme}) => theme.dimensions.sizes.xxxs};
  justify-content: center;
  margin-left: ${({theme}) => theme.spacing.spacingHorizontal.xxxxxs};
`;

export const ProgressIndicator = styled(
  Animated.View,
)<StyledProgressIndicatorProps>`
  width: ${({theme}) => theme.dimensions.sizes.xxxs};
  height: ${({theme}) => theme.dimensions.sizes.xxxs};
`;

export const ProgressIndicatorIcon = styled(
  Icon,
).attrs<ProgressIndicatorIconProps>(
  ({theme, isInverse}): IconProps => ({
    ...getProgressIndicatorColors({isInverse, theme}),
    iconName: IconographyNames.progressIndicator,
  }),
)<ProgressIndicatorIconProps>``;

export const TertiaryStyles: ButtonVariantStyles = {
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
