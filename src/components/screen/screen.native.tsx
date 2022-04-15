import React, {ReactElement, ReactNode} from "react";
import {SafeArea} from "src/components/screen/screen.native.styles";

interface Props {
  children: ReactNode;
}

export const Screen = ({children}: Props): ReactElement => (
  <SafeArea>{children}</SafeArea>
);
