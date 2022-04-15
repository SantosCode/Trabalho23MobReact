import {Tokens} from "src/tokens/tokens";
import {defaultColorTokens} from "src/tokens/color/default-color-tokens";
import {defaultLineHeightTokens} from "src/tokens/line-height/default-line-height-tokens";
import {defaultFontSizeTokens} from "src/tokens/font-size/default-font-size-tokens";
import {defaultFontStyleTokens} from "src/tokens/font-style/default-font-style-tokens";
import {defaultFontWeightTokens} from "src/tokens/font-weight/default-font-weight-tokens";
import {defaultBorderRadiusTokens} from "src/tokens/border-radius/default-border-radius-tokens";
import {defaultBorderWidthTokens} from "src/tokens/border-width/default-border-width-tokens";
import {defaultSpacingHorizontalTokens} from "src/tokens/spacing-horizontal/default-spacing-horizontal-tokens";
import {defaulTextDecorationTokens} from "src/tokens/text-decoration/default-text-decoration-tokens";
import {defaultOpacityTokens} from "src/tokens/opacity/default-opacity-tokens";
import {defaultSpacingVerticalTokens} from "src/tokens/spacing-vertical/default-spacing-vertical-tokens";
import {defaultSpacingSquishTokens} from "src/tokens/spacing-squish/default-spacing-squish";
import {defaultSpacingInsetTokens} from "src/tokens/spacing-inset/default-spacing-inset-tokens";
import {defaultSizeTokens} from "src/tokens/sizes/default-size-tokens";
import {defaultBoxShadowTokens} from "src/tokens/box-shadow/default-box-shadow-tokens";

export const defaultTokens: Tokens = {
  ...defaultLineHeightTokens,
  ...defaultColorTokens,
  ...defaultFontSizeTokens,
  ...defaultFontStyleTokens,
  ...defaultFontWeightTokens,
  ...defaultBorderRadiusTokens,
  ...defaultBorderWidthTokens,
  ...defaultSpacingHorizontalTokens,
  ...defaulTextDecorationTokens,
  ...defaultOpacityTokens,
  ...defaultSpacingVerticalTokens,
  ...defaultSpacingSquishTokens,
  ...defaultSpacingInsetTokens,
  ...defaultSizeTokens,
  ...defaultBoxShadowTokens,
};
