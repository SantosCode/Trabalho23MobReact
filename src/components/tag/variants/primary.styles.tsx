import styled from "styled-components/native";
import {None, Option} from "monapt";
import {getFontFamily} from "src/helpers/get-font-family/get-font-family";
import {FontFamilyOptions} from "src/helpers/get-font-family/types";
import {getLineHeight} from "src/helpers/get-line-height/get-line-height";
import {
  StyledContainerProps,
  TagSizes,
  VariantsStyles,
  StyledLabelProps,
  StyledLeadingIconProps,
} from "src/components/tag/types";
import {
  getColorValue,
  mediumContainerHeight,
  smallContainerHeight,
  getPaddingHorizontal,
} from "src/components/tag/variants/base.styles";
import {Icon} from "src/components/iconography/icon.native";

const Wrapper = styled.View`
  flex-wrap: wrap;
`;

const Container = styled.View<StyledContainerProps>`
  height: ${({size}) => {
    if (size === TagSizes.medium) {
      return mediumContainerHeight;
    }

    return smallContainerHeight;
  }}px;
  border-radius: ${({theme}) => theme.shape.borderRadius.pill};
  background-color: ${getColorValue};
  padding-left: ${getPaddingHorizontal};
  padding-right: ${getPaddingHorizontal};
  align-items: center;
  flex-direction: row;
`;

const Label = styled.Text<StyledLabelProps>`
  font-family: ${({theme}) =>
    getFontFamily(theme, {
      fontFamily: FontFamilyOptions.primary,
      fontStyle: None,
      fontWeight: Option(theme.typography.fontWeight.regular),
    })};
  font-size: ${({theme}) => theme.typography.fontSize.xxs};
  line-height: ${({theme}) =>
    getLineHeight(
      theme.typography.lineHeight.medium,
      theme.typography.fontSize.xxs,
    )};
  color: ${({theme}) => theme.palette.neutral.lightest};
`;

const InfoLeadingIcon = styled(Icon).attrs<StyledLeadingIconProps>(
  ({theme, iconName}) => ({
    color: theme.palette.neutral.lightest,
    iconName,
  }),
)<StyledLeadingIconProps>``;

const ErrorLeadingIcon = styled(Icon).attrs<StyledLeadingIconProps>(
  ({theme, iconName}) => ({
    color: theme.palette.neutral.lightest,
    iconName,
  }),
)<StyledLeadingIconProps>``;

const SuccessLeadingIcon = styled(Icon).attrs<StyledLeadingIconProps>(
  ({theme, iconName}) => ({
    color: theme.palette.neutral.lightest,
    iconName,
  }),
)<StyledLeadingIconProps>``;

const WarningLeadingIcon = styled(Icon).attrs<StyledLeadingIconProps>(
  ({theme, iconName}) => ({
    color: theme.palette.neutral.lightest,
    iconName,
  }),
)<StyledLeadingIconProps>``;

const NeutralLeadingIcon = styled(Icon).attrs<StyledLeadingIconProps>(
  ({theme, iconName}) => ({
    color: theme.palette.neutral.lightest,
    iconName,
  }),
)<StyledLeadingIconProps>``;

export const PrimaryStyles: VariantsStyles = {
  Wrapper,
  Container,
  Label,
  InfoLeadingIcon,
  ErrorLeadingIcon,
  SuccessLeadingIcon,
  WarningLeadingIcon,
  NeutralLeadingIcon,
};
