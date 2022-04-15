import styled from "styled-components/native";
import {
  ScrollView,
  KeyboardAvoidingView as RNKeyboardAvoidingView,
} from "react-native";
import {
  getDimensions,
  getSpacing,
  getPalette,
} from "src/helpers/styled-components/theme-helpers";
import {TextField} from "src/components/text-field/text-field.native";
import {Button} from "src/components/button/button.native";
import {Typography} from "src/components/typography/typography.native";
import {TypographyVariants} from "src/components/typography/types";

export const Container = styled(ScrollView).attrs({
  contentContainerStyle: {
    alignItems: "center",
  },
})``;

export const KeyboardAvoidindView = styled(RNKeyboardAvoidingView)`
  flex: 1;
`;

export const FormContainer = styled.View`
  margin-top: ${getSpacing(spacing => spacing.spacingVertical.m)};
  align-items: center;
  width: 100%;
`;

export const Input = styled(TextField)`
  margin-top: ${getSpacing(spacing => spacing.spacingVertical.xxxs)};
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  margin-top: ${getSpacing(spacing => spacing.spacingVertical.xxxs)};
  margin-bottom: 50px;
`;

export const Logo = styled.Image`
  height: ${getDimensions(dimensions => dimensions.sizes.xl)};
  width: ${getDimensions(dimensions => dimensions.sizes.xl)};
`;

export const ErrorMessage = styled(Typography).attrs({
  variant: TypographyVariants.CAPTION,
})`
  color: ${getPalette(palette => palette.error.medium)};
`;
