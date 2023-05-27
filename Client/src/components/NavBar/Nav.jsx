import React from 'react';
import styled from './NavBar.module.css'


export const Nav = ({ list }) => {
    return (
        <li>
            <a href='#'>
                {list}
            </a>
        </li>

    );
};
