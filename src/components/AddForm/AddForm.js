import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import style from "./AddForm.module.css"

export default function AddForm () {
    const [form, setForm] = useState({
        name: "",
        type: "",
        thc: 0,
        cbd: 0,
        cbg: 0,
        terpene: "",
        flavor: "",
        helpw: "",
        isLocked: false,
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
          handleToast();
        } catch (err) {
          console.log(err);
        }
      }

      function handleToast(){
        toast((t) => (
          <span>
            Would you like to keep adding strains?
            <Link to="/create">
                <button className= "btn btn-success" onClick={() => {
                    setForm({
                        name: "",
                        type: "",
                        thc: 0,
                        cbd: 0,
                        cbg: 0,
                        terpene: "",
                        flavor: "",
                        helpw: "",
                        isLocked: false,
                        image: "",
                    })
                    toast.dismiss(t.id)}}>
                    Yes
                </button>
            </Link>
                
            <Link to="/explore">
                <button className= "btn btn-primary" style={{marginLeft:"0.5rem"}} onClick={() => toast.dismiss(t.id)}>
                    No
                </button>
            </Link>
          </span>
        ));
      }
    
    return (
      <center>
        <form onSubmit={handleSubmit} className={style.grid}>
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

            
            <center><button type="submit" className="btn btn-primary" style={{width:"5rem", margin:"1rem"}}>Submit!</button></center>
        </form>
     </center>
    );
}