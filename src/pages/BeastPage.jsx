import './BeastPage.scss'
import Nav from '../components/Nav';
import Beasts from '../components/Beasts';
import Armor from '../components/Armor';

function BeastPage({ filteredBeasts }) {
    
    console.log(filteredBeasts)

    return (
        <>
            <Nav />
            <Beasts filteredBeasts={filteredBeasts}/>
            <Armor />
        </>
    )
}

export default BeastPage;
