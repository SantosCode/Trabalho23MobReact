import {defaultIcons} from "src/components/iconography/default-icons";
import {defaultFonts} from "src/fonts/default-fonts";
import {defaultTokens} from "src/tokens/default-tokens";
import {generateThemeFromTokens} from "src/helpers/generate-theme-from-tokens/generate-theme-from-tokens";

export const defaultContextValues = {
  theme: generateThemeFromTokens({
    tokens: defaultTokens,
    fonts: defaultFonts,
  }),
  icons: defaultIcons,
};
