import './Nav.scss'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Nav ({ beasts, setFilteredBeasts}) {

    return (
        <div className='nav'>
            <Link to='/0.25'>0.25</Link>
            <Link to='/0.5'>0.5</Link>
            <Link to='/1'>1</Link>
            <Link to='/2'>2</Link>
        </div>
    )
}

export default Nav;