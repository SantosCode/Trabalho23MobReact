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

const headingBaseStyle = css<TypographyStyledProps>`
  color: ${({theme, isInverse}) => {
    if (isInverse) {
      return theme.palette.neutral.lightest;
    }

    return theme.palette.neutral.darkest;
  }};
  font-family: ${({theme}) =>
    getFontFamily(theme, {
      fontFamily: FontFamilyOptions.primary,
      fontStyle: None,
      fontWeight: Option(theme.typography.fontWeight.bold),
    })};
`;

const getHeadingFontSizeStyle = ({
  theme,
  variant,
}: {
  theme: Theme;
  variant: TypographyVariants;
}) => {
  switch (variant) {
    case TypographyVariants.HEADING_XXXL:
      return css`
        font-size: ${theme.typography.fontSize.xxxl};
        line-height: ${getLineHeight(
          theme.typography.lineHeight.medium,
          theme.typography.fontSize.xxxl,
        )};
      `;
    case TypographyVariants.HEADING_XXL:
      return css`
        font-size: ${theme.typography.fontSize.xxl};
        line-height: ${getLineHeight(
          theme.typography.lineHeight.medium,
          theme.typography.fontSize.xxl,
        )};
      `;
    case TypographyVariants.HEADING_XL:
      return css`
        font-size: ${theme.typography.fontSize.xl};
        line-height: ${getLineHeight(
          theme.typography.lineHeight.medium,
          theme.typography.fontSize.xl,
        )};
      `;
    case TypographyVariants.HEADING_L:
      return css`
        font-size: ${theme.typography.fontSize.l};
        line-height: ${getLineHeight(
          theme.typography.lineHeight.medium,
          theme.typography.fontSize.l,
        )};
      `;
    default:
      return css`
        font-size: ${theme.typography.fontSize.m};
        line-height: ${getLineHeight(
          theme.typography.lineHeight.medium,
          theme.typography.fontSize.m,
        )};
      `;
  }
};

export const Heading = styled(Text)<TypographyStyledProps>`
  ${headingBaseStyle};
  ${getHeadingFontSizeStyle};
`;
