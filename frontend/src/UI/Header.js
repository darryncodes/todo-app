import React from 'react';
import './Header.module.scss';

const Header = (props) => {
    return (
        <header>
            <div className='container'>{props.children}</div>
        </header>
    );
};

export default Header;
