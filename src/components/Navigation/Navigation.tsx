import React from 'react';
import { navigationData } from '../../constants/Navigation';
import { NavigationItem } from '../NavigationItem/NavigationItem';
import './Navigation.scss';


interface NavigationProps { }

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <>
      {navigationData.map(item => <NavigationItem name={item.name} link={item.link} key={item.link} />)}
    </>
  );
};

export default Navigation;
