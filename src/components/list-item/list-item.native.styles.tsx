import {getLineHeight} from "src/helpers/get-line-height/get-line-height";
import {Text, View} from "react-native";
import styled, {css} from "styled-components/native";
import {FontFamilyOptions} from "src/helpers/get-font-family/types";
import {getFontFamily} from "src/helpers/get-font-family/get-font-family";
import {None, Option} from "monapt";
import {Theme} from "src/theme/theme";
import {
  getDimensions,
  getPalette,
  getSpacing,
} from "src/helpers/styled-components/theme-helpers";
import {
  StyledContainerProps,
  StyledPrimaryTextProps,
} from "src/components/list-item/types";

const looseLineHeight = (theme: Theme, fontSize: string): string =>
  getLineHeight(theme.typography.lineHeight.loose, fontSize);

const BaseText = styled(Text)`
  font-family: ${({theme}) =>
    getFontFamily(theme, {
      fontFamily: FontFamilyOptions.primary,
      fontStyle: None,
      fontWeight: Option(theme.typography.fontWeight.regular),
    })};
`;

const containerStyle = css<StyledContainerProps>`
  flex-direction: row;
  align-items: center;
  padding-left: ${({theme, hasLeading}) =>
    hasLeading ? 0 : theme.spacing.spacingHorizontal.xxxs};
  padding-right: ${getSpacing(spacing => spacing.spacingHorizontal.xxxs)};
  padding-top: ${getSpacing(spacing => spacing.spacingVertical.xxxs)};
  padding-bottom: ${getSpacing(spacing => spacing.spacingVertical.xxxs)};
`;

export const PrimaryText = styled(BaseText)<StyledPrimaryTextProps>`
  line-height: ${({theme}) =>
    looseLineHeight(theme, theme.typography.fontSize.s)};
  color: ${getPalette(palette => palette.neutral.darkest)};
  margin-right: ${({withMargin, theme}) => {
    if (withMargin) {
      return theme.spacing.spacingHorizontal.xxxxs;
    }

    return "0";
  }};
`;

export const SecondaryText = styled(BaseText)`
  line-height: ${({theme}) =>
    looseLineHeight(theme, theme.typography.fontSize.xs)};
  color: ${getPalette(palette => palette.neutral.darker)};
`;

export const TertiaryText = styled(SecondaryText)``;

export const TextContainer = styled(View)`
  flex: 1;
  flex-grow: 1;
`;

export const BasicContainer = styled(View)`
  ${containerStyle}
`;

export const TouchableContainer = styled.TouchableOpacity`
  ${containerStyle}
`;

export const TrailingContainer = styled(View)`
  flex-shrink: 1;
  justify-content: center;
  align-items: flex-end;
  max-width: 40%;
  margin-left: ${getSpacing(spacing => spacing.spacingHorizontal.xxxs)};
`;

export const TrailingTextContainer = styled(View)<{withMargin?: boolean}>`
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  margin-right: ${({withMargin, theme}) =>
    withMargin === true ? theme.spacing.spacingHorizontal.xxxxxs : "0"};
`;

export const PrimaryTrailingText = styled(BaseText)`
  color: ${getPalette(palette => palette.neutral.darkest)};
  font-size: ${({theme}) => theme.typography.fontSize.xs};
  line-height: ${({theme}) =>
    looseLineHeight(theme, theme.typography.fontSize.xs)};
`;

export const SecondaryTrailingText = styled(BaseText)`
  color: ${getPalette(palette => palette.neutral.darker)};
  font-size: ${({theme}) => theme.typography.fontSize.xxs};
  line-height: ${({theme}) =>
    looseLineHeight(theme, theme.typography.fontSize.xxs)};
`;

export const LeadingContainer = styled(View)`
  justify-content: center;
  align-items: center;
  width: ${getDimensions(dimensions => dimensions.sizes.l)};
`;

export const TertiaryContentTagContainer = styled(View)`
  margin-top: ${getSpacing(spacing => spacing.spacingVertical.xxxxxs)};
`;

export const TrailingIconAndTextContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const PrimaryTextAndTagContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;
