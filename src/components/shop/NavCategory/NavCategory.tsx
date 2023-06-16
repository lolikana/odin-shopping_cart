import classes from '@components/layout/navbar/NavMenu.module.scss';
import { useEffect, useRef, useState } from 'react';
import { IProductCat } from 'utils/types';

import ReturnIcon from '@/assets/icons/keyboard_return_FILL0_wght400_GRAD0_opsz48.svg';

import styles from './NavCategory.module.scss';

const NavCategory = ({ categories }: { categories: IProductCat[] }) => {
  const [isHidden, setIsHidden] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  const navHandler = () => {
    setIsHidden(prev => !prev);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    console.log(event.target);

    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setIsHidden(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <nav data-testid="nav-categories" ref={navRef}>
      <p>
        <button className={styles['category-btn']} onClick={navHandler}>
          Show Categories
        </button>
      </p>
      <ul aria-hidden={isHidden} className={classes.menu}>
        <li>
          <div aria-hidden={isHidden} className={styles.menu__title}>
            <h3>Categories</h3>
            <button
              data-testid="hide-cat-btn"
              className={styles['back-btn']}
              onClick={navHandler}
              aria-hidden={!isHidden}
              aria-disabled={isHidden ? 'true' : 'false'}
            >
              <img src={ReturnIcon} alt="Return icon" />
            </button>
          </div>
        </li>
        {categories.map(cat => (
          <li key={cat.id} className={classes.menu__item}>
            <button data-testid="navigation-category">{cat.type}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavCategory;
