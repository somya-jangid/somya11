import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
  background-image: url('https://unsplash.com/photos/a-group-of-people-sitting-in-front-of-a-large-screen-miziNqvJx5M');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #FFFFFF;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#E50914' : '#B3B3B3'};
  color: #FFFFFF;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    opacity: 0.8;
  }
`;

function LandingPage() {
  return (
    <HeroSection>
      <h1>Unlimited movies, TV shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <Button primary>GET STARTED</Button>
      <Button>SIGN IN</Button>
    </HeroSection>
  );
}

export default LandingPage;