import {PrimaryStyles} from "src/components/button/variants/primary.styles";
import {SecondaryStyles} from "src/components/button/variants/secondary.styles";
import {TertiaryStyles} from "src/components/button/variants/tertiary.styles";
import {ButtonTypes, ButtonVariantStyles} from "src/components/button/types";

export const ButtonStyles: Record<ButtonTypes, ButtonVariantStyles> = {
  [ButtonTypes.primary]: PrimaryStyles,
  [ButtonTypes.secondary]: SecondaryStyles,
  [ButtonTypes.tertiary]: TertiaryStyles,
};
