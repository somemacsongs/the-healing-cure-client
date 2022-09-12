import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"


export default function AddForm () {
    const navigate = useNavigate();
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

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            "https://ironrest.herokuapp.com/the-healing-cure",
            form
          );
    
          navigate("/");
    
          console.log(response);
        } catch (err) {
          console.log(err);
        }
      }

    return (
        <form onSubmit={handleSubmit}>
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

            
            <button type="submit">Submit!</button>
        </form>
    );
}