import React from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'semantic-ui-react';

const Gnb = () => {
  const router = useRouter();
  let activeItem;
  
  if (router.pathname === '/') {
    activeItem = 'home';
  } else if (router.pathname === '/about') {
    activeItem = 'about';
  }

  const onClick = (e, data) => {
    if (data.name === 'home') {
      router.push('/');
    } else if (data.name === 'about') {
      router.push('/about');
    }
  };

  return (
    <Menu inverted>
      <Menu.Item 
        name="home"
        active={activeItem === "home"}
        onClick={onClick}
      />
      <Menu.Item 
        name="about"
        active={activeItem === "about"}
        onClick={onClick}
      />
    </Menu>
  );
};

export default Gnb;