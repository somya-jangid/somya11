import React from 'react';
import styled from 'styled-components';

const DetailContainer = styled.div`
  background-color: #141414;
  color: #E5E5E5;
  padding: 20px;
`;

const Background = styled.div`
  height: 400px;
  background-image: url('https://unsplash.com/photos/a-close-up-of-a-projector-projecting-a-movie-onto-a-screen-0xAsHHFx-Fo');
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
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

function DetailPage() {
  return (
    <DetailContainer>
      <Background />
      <h1>Movie Title</h1>
      <p>Release Year | Rating | Duration</p>
      <p>Genre Tags</p>
      <p>Synopsis: A longer description of the plot.</p>
      <Button primary>Play</Button>
      <Button>Add to My List</Button>
    </DetailContainer>
  );
}

export default DetailPage;