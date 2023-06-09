import SearchIcon from '@/assets/icons/search_FILL0_wght400_GRAD0_opsz48.png';
import CartIcon from '@/assets/icons/shopping_bag_FILL0_wght400_GRAD0_opsz48.png';
import SalomonLogo from '@/assets/logo/logo-salomon-2022-black.svg';
import { IconHeaderBtn } from '@/components/ui';

import Navbar from '../navbar/Navbar';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header data-testid="header-component" className={styles.header}>
      <div className={styles.logo}>
        <img src={SalomonLogo} alt="Salomon logo" />
      </div>
      <div className={styles.buttons}>
        <ul className={styles.icons}>
          <li className={styles.icons__item}>
            <IconHeaderBtn
              onClick={() => console.log('Search')}
              src={SearchIcon}
              alt="Search"
            />
          </li>
          <li className={styles.icons__item}>
            <IconHeaderBtn
              onClick={() => console.log('Cart')}
              src={CartIcon}
              alt="Cart"
            />
          </li>
        </ul>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
