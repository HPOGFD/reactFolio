import { Link } from 'react-router-dom';

function NavTabs() {
   
    return (
        <ul>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/Projects">Projects</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
            <li>
                <Link to="/Resume">Resume</Link>
            </li>
        </ul>
    )
}

export default NavTabs;