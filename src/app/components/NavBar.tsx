import {Link, NavLink} from "react-router-dom";
import Home from "../pages/Home";

export default function NavBar(){
    return(
        <div>
            <nav>
                <Link to="/techart"> Technical Artist</Link>
                <Link to="/dev">Front-End Developer</Link>
                <Link to="/illust">Illustrator</Link>
            </nav>
        </div>
    )
}