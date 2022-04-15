import styled from "styled-components/native";
import {ScrollView} from "react-native";
import {getSpacing} from "src/helpers/styled-components/theme-helpers";

export const Container = styled(ScrollView).attrs({
  contentContainerStyle: {
    alignItems: "center",
  },
})``;

export const HeaderContainer = styled.View`
  align-items: flex-start;
`;

export const MapContainer = styled.View`
  flex: 1;
  height: 300px;
  width: 100%;
  margin-top: ${getSpacing(spacing => spacing.spacingVertical.xxs)};
`;
