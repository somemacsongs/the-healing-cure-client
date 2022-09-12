import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import style from "./Explore.module.css"
import Card from "../../components/Card/Card";


function Explore(){
    const [strains, setStrains] = useState([]);

    useEffect(() => {
    async function fetchStrains() {
        try {
            const response = await axios.get(
                "https://ironrest.herokuapp.com/the-healing-cure"
            );

        setStrains([...response.data]);
        } catch (err) {
        console.log(err);
        }
    }
    fetchStrains();
    }, []);

    return (
        <>
            <div className={style.grid}>
                <Link to="/create">
                    <button>Add a Strain!</button>
                </Link>
               {strains.map((current) => {return <Card strain={current} />})}
            </div>
            
        </>
      )
}

export default Explore;


