import assert from "assert";

import React, {ReactElement} from "react";
import {BaseLeadingAndTrailingIconProps} from "src/components/button/types";
import {ButtonStyles} from "src/components/button/button.native.styles";

interface Props extends BaseLeadingAndTrailingIconProps {
  trailingIconName?: string;
}

export const TrailingIcon = ({
  buttonType,
  isDisabled,
  isPressed,
  trailingIconName,
  isInverse,
}: Props): ReactElement => {
  const ButtonStyle = ButtonStyles[buttonType];

  assert(
    trailingIconName !== undefined,
    "trailingIconName is required when showTrailingIcon is true",
  );

  return (
    <ButtonStyle.TrailingIconContainer>
      <ButtonStyle.TrailingIcon
        isPressed={isPressed}
        isDisabled={isDisabled}
        iconName={trailingIconName}
        isInverse={isInverse}
      />
    </ButtonStyle.TrailingIconContainer>
  );
};
