import styled, {css} from "styled-components/native";
import {None, Option} from "monapt";
import {Text} from "react-native";
import {
  TypographyVariants,
  TypographyStyledProps,
} from "src/components/typography/types";
import {Theme} from "src/theme/theme";
import {getLineHeight} from "src/helpers/get-line-height/get-line-height";
import {getFontFamily} from "src/helpers/get-font-family/get-font-family";
import {FontFamilyOptions} from "src/helpers/get-font-family/types";

const emphasisBaseStyle = css<TypographyStyledProps>`
  color: ${({theme, isInverse}) => {
    if (isInverse) {
      return theme.palette.neutral.light;
    }

    return theme.palette.neutral.darker;
  }};
  font-family: ${({theme}) =>
    getFontFamily(theme, {
      fontFamily: FontFamilyOptions.primary,
      fontStyle: None,
      fontWeight: Option(theme.typography.fontWeight.regular),
    })};
`;

const getEmphasisFontSizeStyle = ({
  theme,
  variant,
}: {
  theme: Theme;
  variant: TypographyVariants;
}) => {
  if (variant === TypographyVariants.EMPHASIS_L) {
    return css`
      font-size: ${theme.typography.fontSize.xl};
      line-height: ${getLineHeight(
        theme.typography.lineHeight.loose,
        theme.typography.fontSize.xl,
      )};
    `;
  }

  return css`
    font-size: ${theme.typography.fontSize.m};
    line-height: ${getLineHeight(
      theme.typography.lineHeight.loose,
      theme.typography.fontSize.m,
    )};
  `;
};

export const Emphasis = styled(Text)<TypographyStyledProps>`
  ${emphasisBaseStyle};
  ${getEmphasisFontSizeStyle};
`;
