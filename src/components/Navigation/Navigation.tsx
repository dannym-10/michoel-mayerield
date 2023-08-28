import React from 'react';
import { navigationData } from '../../constants/Navigation';
import './Navigation.scss';
import { NavigationItem } from '../NavigationItem/NavigationItem';


interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {

  console.log(navigationData);
  
  return (
    <>
      {navigationData.map(item => <NavigationItem name={item.name} link={item.link} />)}
    </>
  );
};

export default Navigation;
