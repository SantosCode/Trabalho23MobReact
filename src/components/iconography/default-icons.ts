import * as SVGIcons from "src/assets/icons";
import {IconographyNames} from "src/enums/iconography-names";
import {Iconography} from "src/iconography/iconography-types";

export const defaultIcons: Iconography = {
  clearInput: SVGIcons.ClearInput,
  eye: SVGIcons.Eye,
  eyeSlash: SVGIcons.EyeSlash,
  progressIndicator: SVGIcons.ProgressIndicator,
  [IconographyNames.addCircle]: SVGIcons.AddCircle,
  [IconographyNames.chevronRight]: SVGIcons.ChevronRight,
  [IconographyNames.exclamationCircle]: SVGIcons.ExclamationCircle,
  [IconographyNames.minusCircle]: SVGIcons.MinusCircle,
};
