import {Link} from "react-router-dom"

export default function Navbar() {
    return(
    <nav className="navbar navbar-expand-lg bg-light">
    <nav className="navbar bg-light">
  <div className="container-fluid">
    <Link to="/">
      <img src="https://sanctuarywellnessinstitute.com/cannabis/images/cannabis-card-logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
      The Healing Cure
    </Link>
    
  </div>
</nav>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">About Us</a></li>
                <li><a className="dropdown-item" href="#">History of Cannabis 101</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#">Explore</a></li>
                <li><a className="dropdown-item" href="#">Create</a></li>
            </ul>
            </li>

        </ul>
        <form className="d-flex" role="search">
        </form>
        </div>
   
    </nav>
    )
}
