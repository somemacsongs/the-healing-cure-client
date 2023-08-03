import {Link} from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import style from "./Navbar.module.css"
import logo from "../../assets/images/logo.png"

export default function Navbar() {
    return(
    <nav className="navbar navbar-expand-lg" id={style.container}>
      <nav className="navbar">
        <div className="container-fluid" style={{marginTop:"0.7rem"}}>
          <Link to="/" style={{textDecoration: "none", display: "flex", justifyContent: "center", alignItems:"center"}}>
            <img id={style.logo} src={logo} alt="Logo" width="75" height="75" className="d-inline-block align-text-top"/>
            <span id={style.title}> The Healing Cure</span>
          </Link>
        </div>
      </nav>
      <Dropdown className={style.menu}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/">Home</Dropdown.Item>
          <Dropdown.Item href="/aboutus">About Us</Dropdown.Item>
          <Dropdown.Item href="/history">History of Cannabis 101</Dropdown.Item>
          <Dropdown.Item href="/explore"><b>Explore</b></Dropdown.Item>
          <Dropdown.Item href="/create"><b>Create</b></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
    )
}













