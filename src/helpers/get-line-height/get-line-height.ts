/**
 *
 * @param lineHeight value represented as percentage, e.g. 120%
 * @param fontSize value represented with pixels, e.g. 14px
 * @returns calculated line-height represented with pixels, e.g. 16.8px
 */
export const getLineHeight = (lineHeight: string, fontSize: string): string => {
  const numberLineHeight = Number(lineHeight.slice(0, -1));
  const numberFontSize = Number(fontSize.slice(0, -2));

  return `${numberFontSize * (numberLineHeight / 100)}px`;
};
