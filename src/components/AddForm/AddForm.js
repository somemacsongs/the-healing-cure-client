import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom"


export default function List () {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        type: "",
        thc: "",
        cbd: "",
        cbg: "",
        terpeno: "",
        flavor: "",
        helpw: [""],
    });

    function handleChange(e){
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          const response = await axios.post(
            "https://ironrest.herokuapp.com/",
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
            <label htmlFor="type">Type</label>
            <input 
                id="type"
                type="type"
                value={form.type}
                onChange={handleChange}
            />
            <label htmlFor="thc">THC</label>
            <input 
                id="thc"
                thc="thc"
                value={form.thc}
                onChange={handleChange}
            />
            <label htmlFor="cbd">CBD</label>
            <input 
                id="cbd"
                cbd="cbd"
                value={form.cbd}
                onChange={handleChange}
            />
            <label htmlFor="cbg">CBG</label>
            <input 
                id="cbg"
                cbg="cbg"
                value={form.cbg}
                onChange={handleChange}
            />
            <label htmlFor="terpeno">Terpeno</label>
            <input 
                id="terpeno"
                terpeno="terpeno"
                value={form.terpeno}
                onChange={handleChange}
            />
            <label htmlFor="flavor">Flavor</label>
            <input 
                id="flavor"
                flavor="flavor"
                value={form.flavor}
                onChange={handleChange}
            />
            <label htmlFor="helpw">Help With</label>
            <input 
                id="helpw"
                helpw="helpw"
                value={form.helpw}
                onChange={handleChange}
            />

            
            <button type="submit">Submit!</button>
        </form>
    );
}