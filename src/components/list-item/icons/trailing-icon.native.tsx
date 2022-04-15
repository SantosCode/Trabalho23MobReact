import assert from "assert";

import React, {ReactElement} from "react";
import {
  TrailingIcon as StyledTrailingIcon,
  TrailingIconContainer,
} from "src/components/list-item/icons/styles";

interface Props {
  trailingIconName?: string;
  iconColor?: string;
}

export const TrailingIcon = ({
  trailingIconName,
  iconColor,
}: Props): ReactElement => {
  assert(
    trailingIconName !== undefined,
    "trailingIconName is required when trailingType is icon",
  );

  return (
    <TrailingIconContainer>
      <StyledTrailingIcon iconColor={iconColor} iconName={trailingIconName} />
    </TrailingIconContainer>
  );
};
