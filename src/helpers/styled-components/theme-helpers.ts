import {Theme} from "src/theme/theme";

export const getSpacing =
  (callback: (spacing: Theme["spacing"]) => string) =>
  ({theme}: {theme: Theme}): string =>
    callback(theme.spacing);

export const getTypography =
  (callback: (spacing: Theme["typography"]) => string) =>
  ({theme}: {theme: Theme}): string =>
    callback(theme.typography);

export const getDimensions =
  (callback: (dimensions: Theme["dimensions"]) => string) =>
  ({theme}: {theme: Theme}): string =>
    callback(theme.dimensions);

export const getShape =
  (callback: (shape: Theme["shape"]) => string) =>
  ({theme}: {theme: Theme}): string =>
    callback(theme.shape);

export const getPalette =
  (callback: (palette: Theme["palette"]) => string) =>
  ({theme}: {theme: Theme}): string =>
    callback(theme.palette);

export const getOpacity =
  (callback: (opacity: Theme["opacity"]) => string) =>
  ({theme}: {theme: Theme}): string =>
    callback(theme.opacity);
