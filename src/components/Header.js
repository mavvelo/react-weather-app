import React from 'react';
import Place from './Place';
import Search from './Search';
import Settings from './Settings';
import '../styles/components/Header.scss';

const Header = () => {
  return (
    <header className='Header'>
      <Place />
      <Search />
      <Settings />
    </header>
  );
};

export default Header;
