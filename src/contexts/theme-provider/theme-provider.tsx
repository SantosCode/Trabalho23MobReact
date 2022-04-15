import {createContext, useContext} from "react";
import {Theme} from "src/theme/theme";
import {Iconography} from "src/iconography/iconography-types";
import {defaultContextValues} from "src/contexts/theme-provider/default-context-values.native";

export interface ThemeContextType {
  theme: Theme;
  icons: Iconography;
}

export const ThemeContext =
  createContext<ThemeContextType>(defaultContextValues);

export const useThemeProvider = (): ThemeContextType =>
  useContext(ThemeContext);

export {defaultContextValues};
