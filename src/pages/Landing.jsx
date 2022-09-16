import './Landing.scss';
import { Link } from "react-router-dom";

function Landing() {
    return (
        <div className='landing'>
            <p className='landing__text'>Welcome to Animal Dice, a 5e druid tool by Nick Albu.</p>
            <Link to='home' className='landing__button'>Roll</Link>
        </div>
    )
}

export default Landing;