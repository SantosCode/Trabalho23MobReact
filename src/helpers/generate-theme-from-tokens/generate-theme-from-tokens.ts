import {Fonts} from "src/fonts/fonts";
import {Theme} from "src/theme/theme";
import {Tokens} from "src/tokens/tokens";

interface Params {
  tokens: Tokens;
  fonts: Fonts;
}

export const generateThemeFromTokens = ({tokens, fonts}: Params): Theme => ({
  palette: {
    primary: {
      darkest: tokens.palette.primary["$color-brand-primary-darkest"],
      dark: tokens.palette.primary["$color-brand-primary-dark"],
      regular: tokens.palette.primary["$color-brand-primary-regular"],
      light: tokens.palette.primary["$color-brand-primary-light"],
      lightest: tokens.palette.primary["$color-brand-primary-lightest"],
    },
    secondary: {
      darkest: tokens.palette.secondary["$color-brand-secondary-darkest"],
      dark: tokens.palette.secondary["$color-brand-secondary-dark"],
      regular: tokens.palette.secondary["$color-brand-secondary-regular"],
      light: tokens.palette.secondary["$color-brand-secondary-light"],
      lightest: tokens.palette.secondary["$color-brand-secondary-lightest"],
    },
    neutral: {
      darkest: tokens.palette.neutral["$color-neutral-darkest"],
      darker: tokens.palette.neutral["$color-neutral-darker"],
      dark: tokens.palette.neutral["$color-neutral-dark"],
      medium: tokens.palette.neutral["$color-neutral-medium"],
      light: tokens.palette.neutral["$color-neutral-light"],
      lighter: tokens.palette.neutral["$color-neutral-lighter"],
      lightest: tokens.palette.neutral["$color-neutral-lightest"],
    },
    error: {
      darkest: tokens.palette.error["$color-feedback-error-darkest"],
      dark: tokens.palette.error["$color-feedback-error-dark"],
      medium: tokens.palette.error["$color-feedback-error-medium"],
      light: tokens.palette.error["$color-feedback-error-light"],
      lightest: tokens.palette.error["$color-feedback-error-lightest"],
    },
    success: {
      darkest: tokens.palette.success["$color-feedback-success-darkest"],
      dark: tokens.palette.success["$color-feedback-success-dark"],
      medium: tokens.palette.success["$color-feedback-success-medium"],
      light: tokens.palette.success["$color-feedback-success-light"],
      lightest: tokens.palette.success["$color-feedback-success-lightest"],
    },
    warning: {
      darkest: tokens.palette.warning["$color-feedback-attention-darkest"],
      dark: tokens.palette.warning["$color-feedback-attention-dark"],
      medium: tokens.palette.warning["$color-feedback-attention-medium"],
      light: tokens.palette.warning["$color-feedback-attention-light"],
      lightest: tokens.palette.warning["$color-feedback-attention-lightest"],
    },
    info: {
      darkest: tokens.palette.info["$color-feedback-info-darkest"],
      dark: tokens.palette.info["$color-feedback-info-dark"],
      medium: tokens.palette.info["$color-feedback-info-medium"],
      light: tokens.palette.info["$color-feedback-info-light"],
      lightest: tokens.palette.info["$color-feedback-info-lightest"],
    },
  },
  typography: {
    lineHeight: {
      tight: tokens.lineHeight["$line-height-tight"],
      medium: tokens.lineHeight["$line-height-medium"],
      loose: tokens.lineHeight["$line-height-loose"],
      xLoose: tokens.lineHeight["$line-height-veryloose"],
    },
    fontSize: {
      xxs: tokens.fontSize["$font-size-xxs"],
      xs: tokens.fontSize["$font-size-xs"],
      s: tokens.fontSize["$font-size-s"],
      m: tokens.fontSize["$font-size-m"],
      l: tokens.fontSize["$font-size-l"],
      xl: tokens.fontSize["$font-size-xl"],
      xxl: tokens.fontSize["$font-size-xxl"],
      xxxl: tokens.fontSize["$font-size-xxxl"],
    },
    fontStyle: {
      italic: tokens.fontStyle["$font-style-italic"],
    },
    textDecoration: {
      underline: tokens.textDecoration["$text-decoration-underline"],
    },
    fontWeight: {
      regular: tokens.fontWeight["$font-weight-regular"],
      bold: tokens.fontWeight["$font-weight-bold"],
      light: tokens.fontWeight["$font-weight-light"],
      medium: tokens.fontWeight["$font-weight-medium"],
    },
    fonts,
  },
  shape: {
    borderRadius: {
      none: tokens.borderRadius["$border-radius-none"],
      xs: tokens.borderRadius["$border-radius-xs"],
      s: tokens.borderRadius["$border-radius-s"],
      m: tokens.borderRadius["$border-radius-m"],
      l: tokens.borderRadius["$border-radius-l"],
      pill: tokens.borderRadius["$border-radius-pill"],
      circular: tokens.borderRadius["$border-radius-circular"],
    },
    borderWidth: {
      none: tokens.borderWidth["$border-width-none"],
      xs: tokens.borderWidth["$border-width-hairline"],
      s: tokens.borderWidth["$border-width-thin"],
      m: tokens.borderWidth["$border-width-thick"],
      l: tokens.borderWidth["$border-width-heavy"],
    },
    boxShadow: {
      level1: tokens.boxShadow["$shadow-level-1"],
      level2: tokens.boxShadow["$shadow-level-2"],
      level3: tokens.boxShadow["$shadow-level-3"],
      level4: tokens.boxShadow["$shadow-level-4"],
    },
  },
  spacing: {
    spacingHorizontal: {
      xxxxxs: tokens.spacingHorizontal["$spacing-horizontal-quark"],
      xxxxs: tokens.spacingHorizontal["$spacing-horizontal-nano"],
      xxxs: tokens.spacingHorizontal["$spacing-horizontal-xxxs"],
      xxs: tokens.spacingHorizontal["$spacing-horizontal-xxs"],
      xs: tokens.spacingHorizontal["$spacing-horizontal-xs"],
      xl: tokens.spacingHorizontal["$spacing-horizontal-xl"],
      s: tokens.spacingHorizontal["$spacing-horizontal-s"],
      l: tokens.spacingHorizontal["$spacing-horizontal-l"],
      m: tokens.spacingHorizontal["$spacing-horizontal-m"],
    },
    spacingVertical: {
      xxxxxs: tokens.spacingVertical["$spacing-vertical-quark"],
      xxxxs: tokens.spacingVertical["$spacing-vertical-nano"],
      xxxs: tokens.spacingVertical["$spacing-vertical-xxxs"],
      xxs: tokens.spacingVertical["$spacing-vertical-xxs"],
      xs: tokens.spacingVertical["$spacing-vertical-xs"],
      s: tokens.spacingVertical["$spacing-vertical-s"],
      m: tokens.spacingVertical["$spacing-vertical-m"],
      l: tokens.spacingVertical["$spacing-vertical-l"],
      xl: tokens.spacingVertical["$spacing-vertical-xl"],
      xxl: tokens.spacingVertical["$spacing-vertical-xxl"],
      xxxl: tokens.spacingVertical["$spacing-vertical-xxxl"],
      xxxxl: tokens.spacingVertical["$spacing-vertical-huge"],
      xxxxxl: tokens.spacingVertical["$spacing-vertical-giant"],
    },
    spacingInset: {
      xxxs: tokens.spacingInset["$spacing-inset-quark"],
      xxs: tokens.spacingInset["$spacing-inset-nano"],
      xs: tokens.spacingInset["$spacing-inset-xs"],
      s: tokens.spacingInset["$spacing-inset-s"],
      m: tokens.spacingInset["$spacing-inset-m"],
      l: tokens.spacingInset["$spacing-inset-l"],
    },
    spacingSquish: {
      xxxs: tokens.spacingSquish["$spacing-squish-quark"],
      xxs: tokens.spacingSquish["$spacing-squish-nano"],
      xs: tokens.spacingSquish["$spacing-squish-xs"],
      s: tokens.spacingSquish["$spacing-squish-s"],
    },
  },
  opacity: {
    levels: {
      semiOpaque: tokens.opacity["$opacity-level-semiopaque"],
      medium: tokens.opacity["$opacity-level-medium"],
      light: tokens.opacity["$opacity-level-light"],
      lighter: tokens.opacity["$opacity-level-lighter"],
      semiTransparent: tokens.opacity["$opacity-level-semitransparent"],
      transparent: tokens.opacity["$opacity-level-transparent"],
    },
  },
  dimensions: {
    sizes: {
      xxxxxs: tokens.sizes["$size-quark"],
      xxxxs: tokens.sizes["$size-nano"],
      xxxs: tokens.sizes["$size-xxxs"],
      xxs: tokens.sizes["$size-xxs"],
      xs: tokens.sizes["$size-xs"],
      s: tokens.sizes["$size-s"],
      m: tokens.sizes["$size-m"],
      l: tokens.sizes["$size-l"],
      xl: tokens.sizes["$size-xl"],
      xxl: tokens.sizes["$size-xxl"],
      xxxl: tokens.sizes["$size-xxxl"],
      xxxxl: tokens.sizes["$size-huge"],
      xxxxxl: tokens.sizes["$size-giant"],
    },
  },
});
