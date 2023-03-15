import {FC} from 'react';
import {Col} from 'reactstrap';
// @ts-ignore
import AnchorLink from 'react-anchor-link-smooth-scroll';
import classNames from 'classnames';

type NavCardProperties = {
  href: string;
  title: string;
  type: string;
  hover?: string;
};

const NavCard: FC<NavCardProperties> = ({href, title, type, hover}) => {
  return (
    <AnchorLink
      href={href}
      className={classNames('sections__box main-card', type)}
    >
      {/* <Col > */}
      <p className='sections__box-p'>{title}</p>
      {/* </Col> */}
    </AnchorLink>
  );
};

export default NavCard;
