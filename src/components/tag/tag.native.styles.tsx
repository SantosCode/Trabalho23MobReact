import styled from "styled-components/native";
import {PrimaryStyles} from "src/components/tag/variants/primary.styles";
import {SecondaryStyles} from "src/components/tag/variants/secondary.styles";
import {TagVariants, VariantsStyles} from "src/components/tag/types";

export const TagVariantsStyles: Record<TagVariants, VariantsStyles> = {
  [TagVariants.primary]: PrimaryStyles,
  [TagVariants.secondary]: SecondaryStyles,
};

export const LeadingIconContainer = styled.View`
  height: ${({theme}) => theme.dimensions.sizes.xxxs};
  width: ${({theme}) => theme.dimensions.sizes.xxxs};
  margin-right: ${({theme}) => theme.spacing.spacingHorizontal.xxxxxs};
`;
