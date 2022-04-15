import React, {ReactElement} from "react";
import {Props} from "src/components/tag/types";
import {TagVariantsStyles} from "src/components/tag/tag.native.styles";
import {LeadingIcon} from "src/components/tag/icons/leading-icon.native";
import {If} from "src/helpers/if/if";

export const Tag = ({
  size,
  type,
  variant,
  label,
  hasLeadingIcon = false,
  leadingIconName,
  style,
}: Props): ReactElement => {
  const TagStyles = TagVariantsStyles[variant];

  return (
    <TagStyles.Wrapper style={style}>
      <TagStyles.Container
        hasLeadingIcon={hasLeadingIcon}
        size={size}
        type={type}>
        <If condition={hasLeadingIcon}>
          <LeadingIcon
            variant={variant}
            type={type}
            leadingIconName={leadingIconName}
          />
        </If>
        <TagStyles.Label type={type}>{label}</TagStyles.Label>
      </TagStyles.Container>
    </TagStyles.Wrapper>
  );
};
