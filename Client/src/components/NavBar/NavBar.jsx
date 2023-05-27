import React from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { Nav } from './Nav';
import styled from './NavBar.module.css';
import { Link } from 'react-router-dom';
import myImage from '../../Assets/Images/titulo.png';

export const NavBar = ({ onSearch, random, logout }) => {
    return (

        <div className={styled.nav}>


            <ul>
                <img src={myImage} alt="" className={styled.imagen} />
                <Link to="/home" className={styled.link}>
                    <Nav list={"Home"} />
                </Link>

                <Link to="/about" className={styled.link}>
                    <Nav list={"About"} />
                </Link>
                <Link to="/Favorites" className={styled.link}>
                    <Nav list={"Favorites"} />
                </Link>

                <a onClick={logout} className={styled.link}>
                <Nav list={"logout"}/>

                </a>

                <SearchBar onSearch={onSearch} random={random} />
            </ul>
        </div>
    );
};





