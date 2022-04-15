export const regular = 500;
export const medium = 600;
export const bold = 700;
export const light = 400;

export interface FontWeight {
  [key: number]: string;
  [regular]: string;
  [medium]: string;
  [bold]: string;
  [light]: string;
}

export interface FontStyle {
  italic: FontWeight;
  normal: FontWeight;
}

export interface Fonts {
  primary: FontStyle;
}
