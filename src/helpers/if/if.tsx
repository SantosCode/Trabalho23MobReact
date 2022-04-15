import {ReactElement} from "react";

interface Props {
  condition: boolean;
  children: ReactElement;
}

export const If = ({children, condition}: Props): ReactElement | null => {
  if (condition) {
    return children;
  }

  return null;
};
