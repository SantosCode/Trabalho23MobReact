import {FontStyle, regular} from "src/fonts/fonts";
import {Theme} from "src/theme/theme";
import {
  FontProperties,
  GetFontWeightParams,
  GetItalicFontFamilyParams,
  GetNormalFontFamilyParams,
  FontStyleOptions,
} from "src/helpers/get-font-family/types";

const getItalicFontFamily = (
  fontStyle: FontStyle,
  params: GetItalicFontFamilyParams,
): string => {
  if (params.fontWeight.isEmpty) {
    return fontStyle.italic[regular];
  }

  return getFontWeight(fontStyle, {
    fontFamily: params.fontFamily,
    fontStyle: params.fontStyle,
    fontWeight: params.fontWeight.get(),
  });
};

const getNormalFontFamily = (
  fontStyle: FontStyle,
  params: GetNormalFontFamilyParams,
): string => {
  if (params.fontWeight.isEmpty) {
    return fontStyle.normal[regular];
  }

  return getFontWeight(fontStyle, {
    fontFamily: params.fontFamily,
    fontStyle: params.fontStyle,
    fontWeight: params.fontWeight.get(),
  });
};

const getFontWeight = (
  fontStyle: FontStyle,
  params: GetFontWeightParams,
): string => {
  const weights = Object.keys(fontStyle[params.fontStyle]);

  const hasWeight = weights.some(
    weight => Number(weight) === params.fontWeight,
  );

  if (!hasWeight) {
    console.warn(
      `Font: ${params.fontFamily} ${params.fontStyle} ${params.fontWeight} not provided`,
    );

    return fontStyle[params.fontStyle][regular];
  }

  return fontStyle[params.fontStyle][params.fontWeight];
};

/**
 * For non-default fonts on Android system it's needed to specify the font name
 * when it's needed to apply style to the font, such as font-weight: bold;
 * For this use this helper to select the correct font according to the ones provided.
 * Not using this method will result on Android using the default font of the system
 * with the style provided.
 * @param theme Current context theme
 * @param fontProperties Properties of the function to be selected
 * @returns A font name
 */
export const getFontFamily = (
  theme: Theme,
  fontProperties: FontProperties,
): string => {
  const fontStyle = theme.typography.fonts[fontProperties.fontFamily];

  if (
    fontProperties.fontStyle.isEmpty ||
    fontProperties.fontStyle.get() !== "italic"
  ) {
    return getNormalFontFamily(fontStyle, {
      fontFamily: fontProperties.fontFamily,
      fontStyle: FontStyleOptions.normal,
      fontWeight: fontProperties.fontWeight,
    });
  }

  return getItalicFontFamily(fontStyle, {
    fontFamily: fontProperties.fontFamily,
    fontStyle: FontStyleOptions.italic,
    fontWeight: fontProperties.fontWeight,
  });
};
