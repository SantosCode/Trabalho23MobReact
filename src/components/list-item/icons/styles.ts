import styled from "styled-components/native";
import {Icon} from "src/components/iconography/icon.native";
import {
  StyledTrailingIconProps,
  StyledLeadingIconProps,
} from "src/components/list-item/types";
import {getDimensions} from "src/helpers/styled-components/theme-helpers";

export const TrailingIconContainer = styled.View`
  height: ${getDimensions(dimensions => dimensions.sizes.xxs)};
  width: ${getDimensions(dimensions => dimensions.sizes.xxs)};
`;

export const TrailingIcon = styled(Icon).attrs<StyledTrailingIconProps>(
  ({iconColor, theme}) => ({
    color: iconColor ?? theme.palette.primary.light,
  }),
)<StyledTrailingIconProps>``;

export const LeadingIconContainer = styled.View`
  height: ${getDimensions(dimensions => dimensions.sizes.xs)};
  width: ${getDimensions(dimensions => dimensions.sizes.xs)};
`;

export const SmallLeadingIconContainer = styled.View`
  height: ${getDimensions(dimensions => dimensions.sizes.xxs)};
  width: ${getDimensions(dimensions => dimensions.sizes.xxs)};
`;

export const LeadingIcon = styled(Icon).attrs<StyledLeadingIconProps>(
  ({iconColor, theme}) => ({
    color: iconColor ?? theme.palette.primary.light,
  }),
)<StyledTrailingIconProps>``;
