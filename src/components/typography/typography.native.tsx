import React, {ReactElement} from "react";
import get from "lodash/get";
import {TypographyStyles} from "src/components/typography/typography.styles.native";
import {Props} from "src/components/typography/types";

const isDesignSystemLink = (child: unknown): child is ReactElement => {
  const elementType = get(child, "type.displayName") as string;

  return elementType === "DesignSystemLink";
};

export const Typography = ({
  children,
  variant,
  isInverse = false,
  ...textProps
}: Props): ReactElement => {
  const StyledTypography = TypographyStyles[variant];

  const newChildren = React.Children.toArray(children).map(child => {
    if (!isDesignSystemLink(child)) {
      return child;
    }

    return React.cloneElement(child, {
      variant,
      isInverse,
      ...textProps,
      ...child.props,
    });
  });

  return (
    <StyledTypography variant={variant} isInverse={isInverse} {...textProps}>
      {newChildren}
    </StyledTypography>
  );
};
