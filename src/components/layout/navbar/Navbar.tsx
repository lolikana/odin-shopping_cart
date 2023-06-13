import { Burger } from '@components/ui';
import { useState } from 'react';

import NavMenu from './NavMenu';

const Navbar = () => {
  const [isHidden, setisHidden] = useState<boolean>(true);

  const toogleNavMenu = () => {
    setisHidden(prevState => !prevState);
  };

  let resizeTimer: ReturnType<typeof setTimeout>;
  window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      document.body.classList.remove('resize-animation-stopper');
    }, 400);
  });

  return (
    <>
      <Burger setNavMenu={toogleNavMenu} />
      <NavMenu isHidden={isHidden} />
    </>
  );
};

export default Navbar;
