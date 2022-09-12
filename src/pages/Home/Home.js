
import {Link} from "react-router-dom";

function Home (){

  return (
    <>
        <Link to="/explore">
            <button>Explore</button>
        </Link>
        <Link to="/create">
            <button>Create</button>
        </Link>
        
    </>
  )
}

export default Home;
