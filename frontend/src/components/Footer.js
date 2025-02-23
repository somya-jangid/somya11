import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #181818;
  color: #B3B3B3;
  padding: 20px;
  text-align: center;
  font-size: 14px;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>Netflix Clone &copy; 2023</p>
      <p>
        <a href="#">FAQ</a> | <a href="#">Help Center</a> | <a href="#">Account</a> | <a href="#">Media Center</a> | <a href="#">Investor Relations</a> | <a href="#">Jobs</a> | <a href="#">Ways to Watch</a> | <a href="#">Terms of Use</a> | <a href="#">Privacy</a> | <a href="#">Cookie Preferences</a> | <a href="#">Corporate Information</a> | <a href="#">Contact Us</a> | <a href="#">Speed Test</a> | <a href="#">Legal Notices</a> | <a href="#">Only on Netflix</a>
      </p>
    </FooterContainer>
  );
}

export default Footer;