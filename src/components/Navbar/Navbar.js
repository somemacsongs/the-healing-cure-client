export default function NavBar() {
    return(
    <nav class="navbar navbar-expand-lg bg-light">
    <nav class="navbar bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://sanctuarywellnessinstitute.com/cannabis/images/cannabis-card-logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      The Healing Cure
    </a>
  </div>
</nav>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">About Us</a></li>
                <li><a class="dropdown-item" href="#">History of Cannabis 101</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Explore</a></li>
                <li><a class="dropdown-item" href="#">Create</a></li>
            </ul>
            </li>

        </ul>
        <form class="d-flex" role="search">
        </form>
        </div>
   
    </nav>
    )
}
