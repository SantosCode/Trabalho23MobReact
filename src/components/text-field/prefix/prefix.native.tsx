import React, {ReactElement} from "react";
import {LayoutChangeEvent} from "react-native";
import {TextFieldStyle} from "src/components/text-field/text-field.native.styles";

interface Props {
  onLayout: (event: LayoutChangeEvent) => void;
  isEmphasis: boolean;
}

// TODO: The prefix returned by this component will be dynamic. Chosen among a list of prefixes;
export const Prefix = ({onLayout, isEmphasis}: Props): ReactElement => {
  return (
    <TextFieldStyle.PrefixContainer onLayout={onLayout}>
      <TextFieldStyle.PrefixLabel isEmphasis={isEmphasis}>
        R$
      </TextFieldStyle.PrefixLabel>
    </TextFieldStyle.PrefixContainer>
  );
};
