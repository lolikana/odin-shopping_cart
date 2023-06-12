import { useState } from 'react';

import { Burger } from '@/components/ui';

import NavMenu from './NavMenu';

const Navbar = () => {
  const [isHidden, setisHidden] = useState<boolean>(true);

  const toogleNavMenu = () => {
    setisHidden(prevState => !prevState);
  };

  return (
    <>
      <Burger setNavMenu={toogleNavMenu} />
      <NavMenu isHidden={isHidden} />
    </>
  );
};

export default Navbar;
