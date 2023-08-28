import React from 'react';
// import './Navigation.scss';

interface NavigationItemProps {
    name: string;
    link: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({ name, link }) => {

    return (
        <div>
            This is the name {name}{link}
        </div>
    );
};
