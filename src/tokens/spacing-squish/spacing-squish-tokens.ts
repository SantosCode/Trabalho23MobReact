export interface SpacingSquish {
  horizontal: string;
  vertical: string;
}

export interface SpacingSquishTokens {
  spacingSquish: {
    "$spacing-squish-quark": SpacingSquish;
    "$spacing-squish-nano": SpacingSquish;
    "$spacing-squish-xs": SpacingSquish;
    "$spacing-squish-s": SpacingSquish;
  };
}
