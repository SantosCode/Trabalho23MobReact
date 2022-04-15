import assert from "assert";

import React, {ReactElement} from "react";
import {BaseLeadingAndTrailingIconProps} from "src/components/button/types";
import {ButtonStyles} from "src/components/button/button.native.styles";

interface Props extends BaseLeadingAndTrailingIconProps {
  leadingIconName?: string;
}

export const LeadingIcon = ({
  buttonType,
  isDisabled,
  isPressed,
  leadingIconName,
  isInverse,
}: Props): ReactElement => {
  const ButtonStyle = ButtonStyles[buttonType];

  assert(
    leadingIconName !== undefined,
    "leadingIconName is required when withLeadingIcon is true",
  );

  return (
    <ButtonStyle.LeadingIconContainer>
      <ButtonStyle.LeadingIcon
        isPressed={isPressed}
        isDisabled={isDisabled}
        iconName={leadingIconName}
        isInverse={isInverse}
      />
    </ButtonStyle.LeadingIconContainer>
  );
};
