import SearchIcon from '@/assets/icons/search_FILL0_wght400_GRAD0_opsz48.png';
import CartIcon from '@/assets/icons/shopping_bag_FILL0_wght400_GRAD0_opsz48.png';
import SalomonLogo from '@/assets/logo/logo-salomon-2022-black.svg';
import IconBtn from '@/components/ui/IconBtn';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header data-testid="header-component" className={styles.header}>
      <div className={styles.logo}>
        <img src={SalomonLogo} alt="Salomon logo" />
      </div>
      <ul className={styles.icons}>
        <li className={styles.icons__item}>
          <IconBtn onClick={() => console.log('Search')} src={SearchIcon} alt="Search" />
        </li>
        <li className={styles.icons__item}>
          <IconBtn onClick={() => console.log('Cart')} src={CartIcon} alt="Cart" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
