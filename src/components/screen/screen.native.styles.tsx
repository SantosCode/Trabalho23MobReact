import {SafeAreaView} from "react-native-safe-area-context";
import {
  getPalette,
  getSpacing,
} from "src/helpers/styled-components/theme-helpers";
import styled from "styled-components/native";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  padding-left: ${getSpacing(spacing => spacing.spacingInset.s)};
  padding-right: ${getSpacing(spacing => spacing.spacingInset.s)};
  background-color: ${getPalette(palette => palette.neutral.lightest)};
`;
