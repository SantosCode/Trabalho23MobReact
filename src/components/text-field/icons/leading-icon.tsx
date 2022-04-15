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
  leadingIconName?: string;
}

export const TextFieldLeadingIcon = ({
  isDisabled,
  leadingIconName,
}: Props): ReactElement => {
  const theme = useTheme();

  assert(
    leadingIconName !== undefined,
    "leadingIconName is required when showLeadingIcon is true",
  );

  return (
    <TextFieldStyle.LeadingIconContainer>
      <Icon
        color={getIconColor({theme, isDisabled})}
        iconName={leadingIconName}
      />
    </TextFieldStyle.LeadingIconContainer>
  );
};
