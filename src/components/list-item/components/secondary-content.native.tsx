import React, {FC} from "react";
import {SecondaryText} from "src/components/list-item/list-item.native.styles";
import {TextAndTagContent} from "src/components/list-item/types";

export const SecondaryContent: FC<TextAndTagContent> = ({text, textProps}) => {
  if (text === undefined) {
    return null;
  }

  return <SecondaryText {...textProps}>{text}</SecondaryText>;
};
