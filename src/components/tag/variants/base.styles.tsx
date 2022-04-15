import {TagTypes, TagSizes} from "src/components/tag/types";
import {Theme} from "src/theme/theme";

export const smallContainerHeight = 16;
export const mediumContainerHeight = 20;

export const getColorValue = ({
  theme,
  type,
}: {
  theme: Theme;
  type: TagTypes;
}): string => {
  switch (type) {
    case TagTypes.info:
      return theme.palette.info.dark;
    case TagTypes.negative:
      return theme.palette.error.dark;
    case TagTypes.neutral:
      return theme.palette.neutral.darker;
    case TagTypes.success:
      return theme.palette.success.darkest;
    case TagTypes.warning:
      return theme.palette.warning.darkest;
  }
};

export const getPaddingHorizontal = ({
  theme,
  size,
}: {
  theme: Theme;
  size: TagSizes;
}): string => {
  if (size === TagSizes.medium) {
    return theme.spacing.spacingHorizontal.xxxs;
  }

  return theme.spacing.spacingHorizontal.xxxxs;
};
