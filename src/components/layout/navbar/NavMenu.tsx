import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './NavMenu.module.scss';

type Props = {
  isHidden: boolean;
};

const NavMenu: FC<Props> = props => {
  const { isHidden } = props;

  return (
    <ul data-testid="navmenu" aria-hidden={isHidden} className={styles.menu}>
      <li className={styles.menu__item}>
        <Link to="/">Home</Link>
      </li>
      <li className={styles.menu__item}>
        <Link to="/shop">Shop</Link>
      </li>
    </ul>
  );
};

export default NavMenu;
