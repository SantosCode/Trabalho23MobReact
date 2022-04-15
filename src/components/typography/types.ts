import {ReactNode} from "react";
import {TextProps} from "react-native";

export enum TypographyVariants {
  HEADING_XXXL = "HEADING_XXXL",
  HEADING_XXL = "HEADING_XXL",
  HEADING_XL = "HEADING_XL",
  HEADING_L = "HEADING_L",
  HEADING_M = "HEADING_M",
  PARAGRAPH_S = "PARAGRAPH_S",
  PARAGRAPH_XS = "PARAGRAPH_XS",
  SUBTITLE = "SUBTITLE",
  CAPTION = "CAPTION",
  DIALOG = "DIALOG",
  EMPHASIS_L = "EMPHASIS_L",
  EMPHASIS_M = "EMPHASIS_M",
}

export interface Props extends TextProps {
  /**
   * Variants enum
   */
  variant: TypographyVariants;
  /**
   * Children
   */
  children: ReactNode;
  /**
   * Use this to change typography color when inside a container with a dark background
   */
  isInverse?: boolean;
}

export interface TypographyStyledProps {
  variant: TypographyVariants;
  isInverse: boolean;
}
