import { useState } from 'react';

import styles from './Burger.module.scss';

const Burger = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const burgerHandler = () => {
    setIsExpanded((prevState: boolean) => !prevState);
  };

  return (
    <button
      onClick={burgerHandler}
      aria-expanded={isExpanded}
      className={styles['menu-btn']}
    >
      <div className={styles['menu-btn__burger']}></div>
    </button>
  );
};

export default Burger;
