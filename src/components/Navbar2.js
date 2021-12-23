import React, { useState } from 'react';
import styled, {css} from 'styled-components/macro';
import {Link} from 'react-router-dom'
import { menuData } from './data/MenuData';
import {Button2} from './Button2';
import { Button } from './Button';
import './Navbar2.css';
import {FaBars} from 'react-icons/fa'

const Nav = styled.nav`
    height : 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: #242424;

`;

const NavLink = css`
    color: #fff;
    // display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

// const Logo = styled(Link)`
//     background-image: url(/images/logo.png);
// `;

const MenuBars = styled(FaBars)`
    display:none;

    @media screen and (max-width: 768px){
        display: block;
        height: 30px;
        width: 30px;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-70%, 50%);
        cursor: pointer;
    }
`;

const NavMenu = styled.div`
display: flex;
align-items: center;


@media screen and (max-width: 768px) {
    display:none;
}
`;

const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items:center;

    @media screen and (max-width: 768px) {
        display:none;
    }
    
`;

const Navbar2 = ({ toggle }) => {

    // const [navbar, setNavbar] = useState(false);


    // const changeBackground = () => {
    //     if(window.scrollY >= 80) {
    //         setNavbar(true);
    //     } else{
    //         setNavbar(false);
    //     }
    // }

    // window.addEventListener('scroll', changeBackground);

    return (
        <Nav>
            <Link to='/home' className='navbar-logo' >
                <img className="navbar-logo" src="/images/logo.png" alt="" />
            </Link>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index} className="navLinks">
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button2 to='/contact'>Spotify</Button2>
            </NavBtn>
        </Nav>
    )
}

export default Navbar2;
