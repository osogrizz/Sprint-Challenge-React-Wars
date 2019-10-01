import React, { useState, useEffect  } from 'react';
import './App.css';

import axios from 'axios';
import StarWars from './components/StarWars';
// import Page from './components/Page';

import styled from 'styled-components';

const Btns = styled.button`
  width: 120px;
  font-size: 1rem;
  padding: 10px;
  margin: 0 20px;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');
  const [page, setPage] = useState('page');
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
            setCharacter(response.data.results);
            setNext(response.data.next);
            setPrev(response.data.previous);
            console.log('data', response.data)
            
          })
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetchData();

  },[])

  useEffect(() => {
    axios.get(`${page}`)
      .then(response => {
        setCharacter(response.data.results);
        setPrev(response.data.previous)
        setNext(response.data.next)
      })
      .catch(err => {
        console.log(err);
      })
  }, [page])
  

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div>
        <Btns value="prev" onClick={ () => {setPage(prev)}} value={prev} >prev</Btns>
        <Btns value="next" onClick={() => {setPage(next)}} value={next}>next</Btns>
      </div>
      <StarWars characters={character} page={page} />
    </div>
  );
}

export default App;
