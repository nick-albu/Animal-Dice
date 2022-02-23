import './Main.scss';
import { Component } from 'react';
import axios from 'axios';

class Main extends Component {

    getBeasts = () => {
        axios.get('https://www.dnd5eapi.co/api/monsters?challenge_rating=0.25,0.5,1,2')
        .then((response) => {
            const monsterArray = response.data.results
            const beastArray = []
            for (let i = 0; i < monsterArray.length; i++) {
                const monster = monsterArray[i];
                const monsterURL = monster.url
                axios.get(`https://www.dnd5eapi.co${monsterURL}`)
                .then((response) => {
                    console.log(response.data)
                    if (response.data.type === 'beast') {
                        console.log(response.data)
                    }
                })
            }
        })
    }
    
    componentDidMount() {
        this.getBeasts()
    }

    render() {
        return (
            <>
                <nav className='nav'>
                    <h1 className='nav__header'>Animal Dice</h1>
                    <p className='nav__item'>Link 1</p>
                    <p className='nav__item'>Link 2</p>
                    <p className='nav__item'>Link 3</p>
                </nav>

            </>
        )
    }
}

export default Main;
