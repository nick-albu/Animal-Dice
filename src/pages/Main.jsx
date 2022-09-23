import './Main.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from '../components/Filter';
import Beasts from '../components/Beasts';
import Armor from '../components/Armor';


function Main() {
  const [beasts, setBeasts] = useState([])
  const [filteredBeasts, setFilteredBeasts] = useState([])

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
    
  return (
    <>
      <Filter beasts={beasts} setFilteredBeasts={setFilteredBeasts}/>
      <Beasts filteredBeasts={filteredBeasts}/>
      <Armor />
    </>
  );
}

export default Main;
