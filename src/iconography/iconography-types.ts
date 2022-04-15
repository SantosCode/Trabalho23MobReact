import type {SvgProps} from "react-native-svg";

type BaseProps = SvgProps;

interface CommonProps {
  className?: string;
  iconName: string;
  backgroundColor?: string;
}

export type Props = CommonProps & BaseProps;

export type SvgComponent = React.ComponentType<Props>;

export interface Iconography {
  [key: string]: SvgComponent;
}
