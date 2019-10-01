import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin: 80px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Card = styled.div`
  text-align: center;
  padding: 10px;
  margin: 10px;
  min-height: 150px;
  width: 300px;
  background: rgba(20, 20, 20, 0.7);
  color: #999;
  border-radius: 4px;

  h2 {
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 200;
  }
`

const StarWars = (props) => {
  console.log('props', props)
  return (
    <Container>
      {props.characters.map( (person, index) => {
        return (
          <Card key={index}>
            <h2>{person.name}</h2>
          </Card>
        )
      })}
    </Container> 
  )
}

export default StarWars;