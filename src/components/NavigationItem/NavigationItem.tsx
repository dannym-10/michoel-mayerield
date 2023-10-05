import React from 'react';
import { Link } from 'react-router-dom';
// import './Navigation.scss';

interface NavigationItemProps {
    name: string;
    link: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ name, link }) => {

    return (
        <Link to={link} style={{ background: 'red' }}>
            This is the name {name}
        </Link>
    );
};
