import assert from "assert";

import React, {ReactElement} from "react";
import {
  LeadingIcon as StyledLeadingIcon,
  LeadingIconContainer,
  SmallLeadingIconContainer,
} from "src/components/list-item/icons/styles";
import {ListItemLeadingTypes} from "src/components/list-item/types";

interface Props {
  type: ListItemLeadingTypes;
  leadingIconName?: string;
  iconColor?: string;
}

export const LeadingIcon = ({
  type,
  leadingIconName,
  iconColor,
}: Props): ReactElement => {
  assert(
    leadingIconName !== undefined,
    "leadingIconName is required when leadingType is icon or smallIcon",
  );

  if (type === ListItemLeadingTypes.smallIcon) {
    return (
      <SmallLeadingIconContainer>
        <StyledLeadingIcon iconColor={iconColor} iconName={leadingIconName} />
      </SmallLeadingIconContainer>
    );
  }

  return (
    <LeadingIconContainer>
      <StyledLeadingIcon iconColor={iconColor} iconName={leadingIconName} />
    </LeadingIconContainer>
  );
};
