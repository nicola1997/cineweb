import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";

function About(){

    return(<div>
        <p>ABOUT</p>
        <Nav><Link to={"/"}>Home</Link></Nav>

    </div>)
}
export default About;