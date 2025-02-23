import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: rgba(24, 24, 24, 0.8);
  backdrop-filter: blur(10px);
  color: #E5E5E5;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #E50914;
`;

const NavLinks = styled.nav`
  a {
    color: #E5E5E5;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
      color: #FFFFFF;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Netflix Clone</Logo>
      <NavLinks>
        <a href="/browse">Home</a>
        <a href="/browse">TV Shows</a>
        <a href="/browse">Movies</a>
        <a href="/browse">New & Popular</a>
        <a href="/browse">My List</a>
      </NavLinks>
    </HeaderContainer>
  );
}

export default Header;