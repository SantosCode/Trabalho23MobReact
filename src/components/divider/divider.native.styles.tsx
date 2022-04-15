import styled from "styled-components/native";
import {None, Option} from "monapt";
import {getFontFamily} from "src/helpers/get-font-family/get-font-family";
import {FontFamilyOptions} from "src/helpers/get-font-family/types";
import {getLineHeight} from "src/helpers/get-line-height/get-line-height";

const BaseDivider = styled.View`
  height: ${({theme}) => theme.shape.borderWidth.xs};
  width: 100%;
`;

export const Container = styled.View``;

export const DividerContent = styled.View`
  background-color: ${({theme}) => theme.palette.neutral.light};
  height: 100%;
  width: 100%;
`;

export const FullBleed = styled(BaseDivider)``;

export const Middle = styled(BaseDivider)`
  padding-left: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
  padding-right: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
`;

export const Inset = styled(BaseDivider)`
  padding-right: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
`;

export const SubHeader = styled.Text<{hasMarginLeft: boolean}>`
  color: ${({theme}) => theme.palette.neutral.darker};
  font-family: ${({theme}) =>
    getFontFamily(theme, {
      fontFamily: FontFamilyOptions.primary,
      fontStyle: None,
      fontWeight: Option(theme.typography.fontWeight.regular),
    })};
  line-height: ${({theme}) =>
    getLineHeight(
      theme.typography.lineHeight.loose,
      theme.typography.fontSize.xs,
    )};

  margin-left: ${({theme, hasMarginLeft}) =>
    hasMarginLeft ? theme.spacing.spacingHorizontal.xxxs : 0};
  margin-right: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
  margin-top: ${({theme}) => theme.spacing.spacingVertical.xxxs};
`;
