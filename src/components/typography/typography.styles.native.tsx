import React from "react";
import {TypographyVariants, Props} from "src/components/typography/types";
import {Heading} from "src/components/typography/variant-styles/heading.styles";
import {Paragraph} from "src/components/typography/variant-styles/paragraph.styles";
import {Subtitle} from "src/components/typography/variant-styles/subtitle.styles";
import {Caption} from "src/components/typography/variant-styles/caption.styles";
import {Dialog} from "src/components/typography/variant-styles/dialog.styles";
import {Emphasis} from "src/components/typography/variant-styles/emphasis.styles";

export const TypographyStyles: Record<
  TypographyVariants,
  React.ComponentType<Props>
> = {
  [TypographyVariants.HEADING_XXXL]: Heading,
  [TypographyVariants.HEADING_XXL]: Heading,
  [TypographyVariants.HEADING_XL]: Heading,
  [TypographyVariants.HEADING_L]: Heading,
  [TypographyVariants.HEADING_M]: Heading,
  [TypographyVariants.PARAGRAPH_S]: Paragraph,
  [TypographyVariants.PARAGRAPH_XS]: Paragraph,
  [TypographyVariants.SUBTITLE]: Subtitle,
  [TypographyVariants.CAPTION]: Caption,
  [TypographyVariants.DIALOG]: Dialog,
  [TypographyVariants.EMPHASIS_L]: Emphasis,
  [TypographyVariants.EMPHASIS_M]: Emphasis,
};
