import styled from "styled-components/native";
import {Typography} from "src/components/typography/typography.native";
import {TypographyVariants} from "src/components/typography/types";
import {getSpacing} from "src/helpers/styled-components/theme-helpers";

export const HeaderContainer = styled.View`
  padding: ${getSpacing(spacing => spacing.spacingInset.xs)};
`;

export const NameLabel = styled(Typography).attrs({
  variant: TypographyVariants.HEADING_L,
})``;
