import { SVGAttributes } from 'react';
import { ReactComponent as Isologotype } from 'assets/brand/isologotype.svg';
import { ReactComponent as Isotype } from 'assets/brand/isotype.svg';

type Props = SVGAttributes<SVGSVGElement> & {
  variant?: 'isologotype' | 'isotype';
};

const Logo = ({ variant, ...props }: Props) => {
  switch (variant) {
    case 'isologotype':
      return <Isologotype {...props} />;
    case 'isotype':
    default:
      return <Isotype {...props} />;
  }
};

export default Logo;

export type LogoProps = Props;
