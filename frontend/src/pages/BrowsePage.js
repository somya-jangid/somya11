import React from 'react';
import styled from 'styled-components';

const BrowseContainer = styled.div`
  background-color: #141414;
  color: #E5E5E5;
  padding: 20px;
`;

const HeroCarousel = styled.div`
  height: 400px;
  background-image: url('https://www.pexels.com/photo/people-watching-movie-in-theater-3825587/');
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const Row = styled.div`
  margin: 20px 0;
`;

const Thumbnail = styled.div`
  display: inline-block;
  width: 200px;
  height: 300px;
  background-color: #333333;
  margin-right: 10px;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }
`;

function BrowsePage() {
  return (
    <BrowseContainer>
      <HeroCarousel />
      <Row>
        <h3>Trending Now</h3>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </Row>
      <Row>
        <h3>My List</h3>
        <Thumbnail />
        <Thumbnail />
        <Thumbnail />
      </Row>
    </BrowseContainer>
  );
}

export default BrowsePage;