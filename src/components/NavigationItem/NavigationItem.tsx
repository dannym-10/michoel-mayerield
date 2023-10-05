import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationItem.scss';

interface NavigationItemProps {
    name: string;
    link: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ name, link }) => {

    return (
        <Link to={link} className='navigation-item-wrapper'>
            {name}
        </Link>
    );
};

