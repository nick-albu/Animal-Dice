import './Filter.scss'
import React, { useEffect, useState } from 'react';

function Filter ({ beasts, setFilteredBeasts}) {
    const [selection, setSelection] = useState([])

    useEffect(()=>{
        setFilteredBeasts(selection)
    },[selection])

    function beastFilter (cr) {
    const filteredBeasts = []
    for (let i = 0; i < beasts.length; i++) {
        const beast = beasts[i];
        if (beast.challenge_rating === cr) {
            filteredBeasts.push(beast)
        }     
    }
    setSelection(filteredBeasts)
   }

    return (
        <div className='filter'>
            <div onClick={() => {beastFilter(0.25)}}>0.25</div>
            <div onClick={() => {beastFilter(0.5)}}>0.5</div>
            <div onClick={() => {beastFilter(1)}}>1</div>
            <div onClick={() => {beastFilter(2)}}>2</div>
        </div>
    )
}

export default Filter;