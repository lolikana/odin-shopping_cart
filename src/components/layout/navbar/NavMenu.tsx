import { FC } from 'react';

import styles from './NavMenu.module.scss';

type Props = {
  isHidden: boolean;
};

const NavMenu: FC<Props> = props => {
  const { isHidden } = props;

  return (
    <ul data-testid="navmenu" aria-hidden={isHidden} className={styles.menu}>
      <li className={styles.menu__item}>Home</li>
      <li className={styles.menu__item}>Shop</li>
    </ul>
  );
};

export default NavMenu;
