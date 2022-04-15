import {ColorTokens} from "src/tokens/color/color-tokens";
import {LineHeightTokens} from "src/tokens/line-height/line-height-tokens";
import {FontSizeTokens} from "src/tokens/font-size/font-size-tokens";
import {FontStyleTokens} from "src/tokens/font-style/font-style-tokens";
import {FontWeightTokens} from "src/tokens/font-weight/font-weight-tokens";
import {BorderRadiusTokens} from "src/tokens/border-radius/border-radius-tokens";
import {BorderWidthTokens} from "src/tokens/border-width/border-width-tokens";
import {SpacingHorizontalTokens} from "src/tokens/spacing-horizontal/spacing-horizontal-tokens";
import {TextDecorationTokens} from "src/tokens/text-decoration/text-decoration-tokens";
import {OpacityTokens} from "src/tokens/opacity/opacity-tokens";
import {SpacingVerticalTokens} from "src/tokens/spacing-vertical/spacing-vertical-tokens";
import {SpacingSquishTokens} from "src/tokens/spacing-squish/spacing-squish-tokens";
import {SpacingInsetTokens} from "src/tokens/spacing-inset/spacing-inset-tokens";
import {Sizetokens} from "src/tokens/sizes/size-tokens";
import {BoxShadowTokens} from "src/tokens/box-shadow/box-shadow-tokens";

export interface Tokens
  extends ColorTokens,
    LineHeightTokens,
    FontSizeTokens,
    FontStyleTokens,
    FontWeightTokens,
    BorderRadiusTokens,
    BorderWidthTokens,
    SpacingHorizontalTokens,
    TextDecorationTokens,
    OpacityTokens,
    SpacingVerticalTokens,
    SpacingSquishTokens,
    SpacingInsetTokens,
    Sizetokens,
    BoxShadowTokens {}
