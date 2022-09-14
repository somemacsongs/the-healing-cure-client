import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast"
import style from "./InfoPage.module.css"


function InfoPage (){
    const { id } = useParams();
    const [strain, setStrain] = useState({});
    const navigate = useNavigate();
  
    useEffect(() => {
      async function fetchStrain() {
        try {
          const response = await axios.get(
            `https://ironrest.herokuapp.com/the-healing-cure/${id}`
          );
  
          setStrain({ ...response.data });
        } catch (err) {
          console.log(err);
        }
      }
      fetchStrain();
    }, []);

    function handleToast(){
      if(strain.isLocked === false){
        toast((t) => (
          <span>
            <p>Are you sure you want to <b>delete</b> {strain.name}?</p>
            <button onClick={() => toast.dismiss(t.id)} style={{marginRight:"0.5rem"}} className="btn btn-danger">
              No
            </button>
            <button className= "btn btn-success" onClick={()=>{
              handleDelete(t);
              }}
            >
              Yes
            </button>
          </span>
        ));
      } else {
        toast.error("This strain cannot be deleted")
      }
      
    }

    function handleEdit(){
      if (strain.isLocked === false){
        navigate(`/explore/${id}/edit`);
      } else {
        toast.error("This strain cannot be edited")
      }
    }

    async function handleDelete(t) {
        try{
          await axios.delete(`https://ironrest.herokuapp.com/the-healing-cure/${id}`);
          toast.dismiss(t.id);
          navigate("/explore");
        } catch (err) {
          console.log(err);
        }
    }
    
  
    return (
      <div className={style.container}>
        <img src={strain.image} alt={strain.name} style={{width: "30rem", border:"solid green", borderRadius:"10px", marginRight:"2rem"}} />
        <div>
          <h1 style={{width: "30rem", marginBottom:"2rem"}}>{strain.name}</h1>
          <h4>Type: {strain.type}</h4>
          <h4>THC: {strain.thc}%</h4>
          <h4>CBD: {strain.cbd}%</h4>
          <h4>CBG: {strain.cbg}%</h4>
          <h4>Terpene: {strain.terpene}</h4>
          <h4>Flavor: {strain.flavor}</h4>
          <h4>Helps with: {strain.helpw}</h4>
          <div style={{display: "flex", flexDirection: "row", gap: "0.7rem", marginTop: "2rem", marginLeft:"1rem"}}>
            <button className={`btn btn-primary ${style.primary}`} onClick={handleEdit}>Edit</button>
            <button className={`btn btn-danger ${style.danger}`} onClick={handleToast}>Delete</button>
            <Link to={`/explore`}><button className={`btn btn-warning ${style.warning}`}>Back to Explore</button></Link>
          </div>  
        </div>        
      </div>
    );
}

export default InfoPage;