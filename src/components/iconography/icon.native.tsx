import assert from "assert";

import React, {ReactElement} from "react";
import {Props} from "src/iconography/iconography-types";
import {useThemeProvider} from "src/contexts/theme-provider/theme-provider";

export const Icon = ({iconName, ...iconProps}: Props): ReactElement => {
  const {icons} = useThemeProvider();

  const IconComponent = icons[iconName];

  assert(
    Icon !== undefined,
    `Icon of name: "${iconName}" was not provided or not mapped`,
  );

  return <IconComponent iconName={iconName} {...iconProps} />;
};
