import { useState, useEffect } from "react";
import axios from "axios";
import style from "./Explore.module.css"
import Card from "../../components/Card/Card";
import AddCard from "../../components/AddCard/AddCard";


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
                <AddCard />
               {strains.map((current) => {return <Card strain={current} />})}
            </div>
            
        </>
      )
}

export default Explore;


