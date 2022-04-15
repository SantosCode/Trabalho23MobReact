import React, {FC} from "react";
import {TextAndTagContent} from "src/components/list-item/types";
import {Tag} from "src/components/tag/tag.native";
import {
  TertiaryText,
  TertiaryContentTagContainer,
} from "src/components/list-item/list-item.native.styles";

export const TertiaryContent: FC<TextAndTagContent> = ({
  text,
  textProps,
  tagProps,
}) => {
  if (text !== undefined) {
    return <TertiaryText {...textProps}>{text}</TertiaryText>;
  }

  if (tagProps !== undefined) {
    return (
      <TertiaryContentTagContainer>
        <Tag {...tagProps} />
      </TertiaryContentTagContainer>
    );
  }

  return null;
};
