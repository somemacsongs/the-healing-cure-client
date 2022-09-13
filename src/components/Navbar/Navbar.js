import {Link} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import style from "./Navbar.module.css"

export default function Navbar() {
    return(
    <nav className="navbar navbar-expand-lg" id={style.container}>
      <nav className="navbar">
        <div className="container-fluid">
          <Link to="/" style={{textDecoration: "none"}}>
            <img src="https://sanctuarywellnessinstitute.com/cannabis/images/cannabis-card-logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            <span id={style.title}>The Healing Cure</span>
          </Link>
        </div>
      </nav>
      <Dropdown id={style.menu}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Home</Dropdown.Item>
          <Dropdown.Item href="/aboutus">About Us</Dropdown.Item>
          <Dropdown.Item href="/history">History of Cannabis 101</Dropdown.Item>
          <Dropdown.Item href="/explore">Explore</Dropdown.Item>
          <Dropdown.Item href="/create">Create</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>  
    </nav>
    )
}















