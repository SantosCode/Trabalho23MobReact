import {getSpacing} from "src/helpers/styled-components/theme-helpers";
import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: ${getSpacing(spacing => spacing.spacingVertical.m)};
`;

export const LoadingContainer = styled.View``;
