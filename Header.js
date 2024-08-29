import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const Header = () => {
  return (
      <MainHeader>
        <NavLink to= "/">
            <img src='./images/finallogo.png' alt='logo' height="400px" width="400px" className='logo'/>
        </NavLink>
        <Nav />
      </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 50rem;
    padding-top: 40px;
  }
`;
export default Header;
