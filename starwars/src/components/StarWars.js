import React from 'react';

const StarWars = (props) => {
  console.log('props', props)
  return (
    <div>
      {props.characters.map( (person, index) => {
        return (
          <div key={index}>
            <h2>{person.name}</h2>
          </div> 
        )
      })}
    </div> 
  )
}

export default StarWars;