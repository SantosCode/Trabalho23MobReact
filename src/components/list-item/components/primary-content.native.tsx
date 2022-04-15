import React, {FC} from "react";
import {Tag} from "src/components/tag/tag.native";
import {
  PrimaryText,
  PrimaryTextAndTagContainer,
} from "src/components/list-item/list-item.native.styles";
import {TextAndTagContent} from "src/components/list-item/types";

export const PrimaryContent: FC<TextAndTagContent> = ({
  text,
  textProps,
  tagProps,
}) => {
  if (text === undefined) {
    return null;
  }
  const children = [
    <PrimaryText {...textProps} withMargin={tagProps !== undefined} key="text">
      {text}
    </PrimaryText>,
  ];

  if (tagProps !== undefined) {
    children.push(<Tag {...tagProps} key="tag" />);
  }

  return <PrimaryTextAndTagContainer>{children}</PrimaryTextAndTagContainer>;
};
