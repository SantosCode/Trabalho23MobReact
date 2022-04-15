import {Option} from "monapt";

export enum FontFamilyOptions {
  primary = "primary",
}

export enum FontStyleOptions {
  normal = "normal",
  italic = "italic",
}

export interface FontProperties {
  fontFamily: FontFamilyOptions;
  fontStyle: Option<FontStyleOptions>;
  fontWeight: Option<number>;
}

export interface GetNormalFontFamilyParams {
  fontFamily: FontFamilyOptions;
  fontStyle: FontStyleOptions.normal;
  fontWeight: Option<number>;
}

export interface GetItalicFontFamilyParams {
  fontFamily: FontFamilyOptions;
  fontStyle: FontStyleOptions.italic;
  fontWeight: Option<number>;
}

export interface GetFontWeightParams {
  fontFamily: FontFamilyOptions;
  fontStyle: FontStyleOptions;
  fontWeight: number;
}
