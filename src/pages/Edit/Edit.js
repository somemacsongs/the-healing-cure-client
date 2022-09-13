import {useParams, useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import toast from "react-hot-toast"

function Edit (){
    const { id } = useParams();
    const [form, setForm] = useState({
        name: "",
        type: "",
        thc: 0,
        cbd: 0,
        cbg: 0,
        terpene: "",
        flavor: "",
        helpw: "",
        isLocked: true,
        image: "",
    });
    const navigate = useNavigate();
  
    useEffect(() => {
      async function fetchStrain() {
        try {
          const response = await axios.get(
            `https://ironrest.herokuapp.com/the-healing-cure/${id}`
          );
          delete response.data._id
          setForm({ ...response.data });
        } catch (err) {
          console.log(err);
        }
      }
      fetchStrain();
    }, []);

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
          const response = await axios.put(
            `https://ironrest.herokuapp.com/the-healing-cure/${id}`,
            form
          );
    
          navigate(`/explore/${id}`);
          toast.success('Strain successfully edited!')
    
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      }

    return (
        <form onSubmit={handleSubmit} style={{display: "grid", margin: "5rem"}}>
            <label htmlFor="name">Name</label>
            <input 
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
            />
            <label htmlFor="type">Type</label>
            <input 
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
            />
            <label htmlFor="thc">THC</label>
            <input 
                id="thc"
                name="thc"
                value={form.thc}
                onChange={handleChange}
            />
            <label htmlFor="cbd">CBD</label>
            <input 
                id="cbd"
                name="cbd"
                value={form.cbd}
                onChange={handleChange}
            />
            <label htmlFor="cbg">CBG</label>
            <input 
                id="cbg"
                name="cbg"
                value={form.cbg}
                onChange={handleChange}
            />
            <label htmlFor="terpeno">Terpene</label>
            <input 
                id="terpene"
                name="terpene"
                value={form.terpene}
                onChange={handleChange}
            />
            <label htmlFor="flavor">Flavor</label>
            <input 
                id="flavor"
                name="flavor"
                value={form.flavor}
                onChange={handleChange}
            />
            <label htmlFor="helpw">Helps With</label>
            <input 
                id="helpw"
                name="helpw"
                value={form.helpw}
                onChange={handleChange}
            />
            <label htmlFor="image">Image</label>
            <input 
                id="image"
                name="image"
                value={form.image}
                onChange={handleChange}
            />

            
            <button type="submit" className="btn btn-primary">Submit!</button>
        </form>
    );
}

export default Edit;