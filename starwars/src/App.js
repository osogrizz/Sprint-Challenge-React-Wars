import React, { useState, useEffect  } from 'react';
import './App.css';

import axios from 'axios';
import StarWars from './components/StarWars';
import Page from './components/Page';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);
  const [page, setPage] = useState('');
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://swapi.co/api/`)
      .then(response => {
        console.log(response.data.people);
        axios.get(response.data.people)
          .then(response => {
            // console.log(response.data.results);
            setCharacter(response.data.results);
            console.log(response.data)

            if (page === 'next') {
              setCharacter(response.data.next);
            }
          })
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetchData();

  },[page])
  
  



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Page page={page}/>
      <StarWars characters={character} />
    </div>
  );
}

export default App;
