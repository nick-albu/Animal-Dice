import './App.css';
import Landing from './pages/Landing';
import Main from './pages/Main';
import BeastPage from './pages/BeastPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { beastFilter } from './utils/utils';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



// Browser router imports and setup below, add link to Landing.jsx


function App() {
  const [beasts, setBeasts] = useState([])
  // const [filteredBeasts, setFilteredBeasts] = useState([])

  useEffect(() => {
    axios.get('https://www.dnd5eapi.co/api/monsters?challenge_rating=0.25&challenge_rating=0.5&challenge_rating=1&challenge_rating=2')
      .then((response) => {
          const monsterArray = response.data.results
          const beastArray = []
          for (let i = 0; i < monsterArray.length; i++) {
              const monster = monsterArray[i];
              const monsterURL = monster.url
              axios.get(`https://www.dnd5eapi.co${monsterURL}`)
              .then((response) => {
                  if (response.data.type === 'beast') {
                      beastArray.push(response.data)
                  }
              })
          }
          setBeasts(beastArray)
          console.log('Beasts set in state')
      })
  }, [])

  console.log('App level ',beastFilter(0.25, beasts))

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/home" exact element={<Main />} />
          <Route path="/0.25"  element={<BeastPage filteredBeasts={beastFilter(0.25, beasts)}/>} />
          <Route path="/0.5"  element={<BeastPage filteredBeasts={beastFilter(0.5, beasts)}/>} />
          <Route path="/1"  element={<BeastPage filteredBeasts={beastFilter(1, beasts)}/>} />
          <Route path="/2"  element={<BeastPage filteredBeasts={beastFilter(2, beasts)}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;




// ...

    