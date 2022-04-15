import assert from "assert";

import React, {ReactElement} from "react";
import {
  LeadingIconContainer,
  TagVariantsStyles,
} from "src/components/tag/tag.native.styles";
import {TagTypes, TagVariants} from "src/components/tag/types";
import {IconographyNames} from "src/enums/iconography-names";

interface Props {
  type: TagTypes;
  variant: TagVariants;
  leadingIconName?: IconographyNames;
}

export const LeadingIcon = ({
  type,
  variant,
  leadingIconName,
}: Props): ReactElement => {
  const TagStyles = TagVariantsStyles[variant];

  assert(
    leadingIconName !== undefined,
    "leadingIconName is required when hasLeadingIcon is true",
  );

  const getIcon = (): ReactElement => {
    switch (type) {
      case TagTypes.info:
        return (
          <TagStyles.InfoLeadingIcon type={type} iconName={leadingIconName} />
        );
      case TagTypes.negative:
        return (
          <TagStyles.ErrorLeadingIcon type={type} iconName={leadingIconName} />
        );
      case TagTypes.neutral:
        return (
          <TagStyles.NeutralLeadingIcon
            type={type}
            iconName={leadingIconName}
          />
        );
      case TagTypes.success:
        return (
          <TagStyles.SuccessLeadingIcon
            type={type}
            iconName={leadingIconName}
          />
        );
      case TagTypes.warning:
        return (
          <TagStyles.WarningLeadingIcon
            type={type}
            iconName={leadingIconName}
          />
        );
    }
  };

  return <LeadingIconContainer>{getIcon()}</LeadingIconContainer>;
};
