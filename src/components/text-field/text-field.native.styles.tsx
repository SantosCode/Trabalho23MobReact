import styled from "styled-components/native";
import {View} from "react-native";
import {Option, None} from "monapt";
import * as OutlinedTextFieldStyles from "src/components/text-field/variants/outlined-text-field.native.styles";
import {StyledAssistiveTextProps} from "src/components/text-field/types";
import {getLineHeight} from "src/helpers/get-line-height/get-line-height";
import {getFontFamily} from "src/helpers/get-font-family/get-font-family";
import {FontFamilyOptions} from "src/helpers/get-font-family/types";
import {Theme} from "src/theme/theme";

export const TextFieldStyle = OutlinedTextFieldStyles;

export const Container = styled(View)`
  width: 100%;
`;

export const BottomContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
  padding-right: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
  padding-top: ${({theme}) => theme.spacing.spacingVertical.xxxxxs};
  padding-bottom: ${({theme}) => theme.spacing.spacingVertical.xxxxxs};
`;

export const AssistiveText = styled.Text<StyledAssistiveTextProps>`
  font-family: ${({theme}) =>
    getFontFamily(theme, {
      fontFamily: FontFamilyOptions.primary,
      fontStyle: None,
      fontWeight: Option(theme.typography.fontWeight.regular),
    })};
  line-height: ${({theme}) =>
    getLineHeight(
      theme.typography.lineHeight.medium,
      theme.typography.fontSize.xs,
    )};
  color: ${({theme, isDisabled}) => {
    if (isDisabled) {
      return theme.palette.neutral.medium;
    }

    return theme.palette.neutral.darker;
  }};
  flex-shrink: 1;
  flex-grow: 1;
`;

export const ErrorText = styled(AssistiveText)`
  color: ${({theme}) => theme.palette.error.medium};
`;

export const CountText = styled(AssistiveText)`
  text-align: right;
  flex-shrink: 0;
  margin-left: ${({theme}) => theme.spacing.spacingHorizontal.xxxs};
`;

export const getIconColor = ({
  isDisabled,
  theme,
}: {
  isDisabled: boolean;
  theme: Theme;
}): string =>
  isDisabled ? theme.palette.neutral.medium : theme.palette.neutral.darker;
