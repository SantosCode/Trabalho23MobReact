import assert from "assert";

import React, {ReactElement} from "react";
import {useTheme} from "styled-components/native";
import {
  TextFieldStyle,
  getIconColor,
} from "src/components/text-field/text-field.native.styles";
import {Icon} from "src/components/iconography/icon.native";

interface Props {
  isDisabled: boolean;
  trailingIconName?: string;
}

export const TextFieldTrailingIcon = ({
  isDisabled,
  trailingIconName,
}: Props): ReactElement => {
  const theme = useTheme();

  assert(
    trailingIconName !== undefined,
    "trailingIconName is required when showTrailingIcon is true",
  );

  return (
    <TextFieldStyle.TrailingIconContainer>
      <Icon
        color={getIconColor({theme, isDisabled})}
        iconName={trailingIconName}
      />
    </TextFieldStyle.TrailingIconContainer>
  );
};
