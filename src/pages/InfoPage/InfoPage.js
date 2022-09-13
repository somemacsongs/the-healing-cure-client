import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast"


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
      toast((t) => (
        <span>
          Tem certeza que quer <b>deletar</b> {strain.name}?
          <button onClick={() => toast.dismiss(t.id)}>
            Nao
          </button>
          <button className= "btn btn-primary" onClick={()=>{
            handleDelete(t);
            }}
          >
            Sim
          </button>
        </span>
      ));
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
      <>
        <img src={strain.image} alt={strain.name} />
        <h1>Name: {strain.name}</h1>
        <h4>THC level: {strain.thc}%</h4>
        <h4>CBD level: {strain.cbd}%</h4>
        <Link to={`/explore/${id}/edit`}><button>Editar</button></Link>
        <button onClick={handleToast}>Deletar</button>
      </>
    );
}

export default InfoPage;