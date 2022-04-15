import React, {ReactElement} from "react";
import {
  FullBleed,
  Middle,
  Inset,
  SubHeader,
  Container,
  DividerContent,
} from "src/components/divider/divider.native.styles";
import {DividerTypes, Props} from "src/components/divider/types";

const DividerMapping: Record<DividerTypes, React.ComponentType> = {
  [DividerTypes.fullBleed]: FullBleed,
  [DividerTypes.middle]: Middle,
  [DividerTypes.inset]: Inset,
};

export const Divider = ({
  subHeader,
  dividerType = DividerTypes.fullBleed,
  containerProps,
  style,
}: Props): ReactElement => {
  const Component = DividerMapping[dividerType];
  const isInset = dividerType === DividerTypes.inset;
  const hasSubHeader = subHeader !== undefined;

  return (
    <Container style={style}>
      <Component {...containerProps}>
        <DividerContent />
      </Component>

      {hasSubHeader && (
        <SubHeader hasMarginLeft={!isInset}>{subHeader}</SubHeader>
      )}
    </Container>
  );
};
