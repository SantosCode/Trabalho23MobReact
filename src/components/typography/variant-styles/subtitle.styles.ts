import styled, {css} from "styled-components/native";
import {None, Option} from "monapt";
import {Text} from "react-native";
import {TypographyStyledProps} from "src/components/typography/types";
import {getLineHeight} from "src/helpers/get-line-height/get-line-height";
import {getFontFamily} from "src/helpers/get-font-family/get-font-family";
import {FontFamilyOptions} from "src/helpers/get-font-family/types";

const subtitleStyle = css<TypographyStyledProps>`
  line-height: ${({theme}) =>
    getLineHeight(
      theme.typography.lineHeight.medium,
      theme.typography.fontSize.s,
    )};
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
  font-size: ${({theme}) => theme.typography.fontSize.s};
`;

export const Subtitle = styled(Text)<TypographyStyledProps>`
  ${subtitleStyle};
`;
