import {Link, useNavigate} from "react-router-dom"
import toast from "react-hot-toast"
import style from "./Card.module.css"

export default function Card(prop){
    const navigate = useNavigate();

    function handleEdit(strain){
        if (strain.isLocked === false){
          navigate(`/explore/${strain._id}/edit`);
        } else {
          toast.error("This strain cannot be edited")
        }
    };

    return (
        <div className="card" style={{width:"20rem", marginTop:"2rem", marginLeft:"1.3rem"}}>
            <img src={prop.strain.image} className="card-img-top" alt={prop.strain.name} style={{borderBottom:"solid gainsboro"}}/>
            <div className="card-body">
                <h5 className="card-title">{prop.strain.name}</h5>
                <p className="card-text" style={{height:"3rem"}}>Helps with: {prop.strain.helpw}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Type: {prop.strain.type}</li>
                <li className="list-group-item">THC: {prop.strain.thc}%</li>
                <li className="list-group-item">CDB - CDG: {prop.strain.cbd}% - {prop.strain.cbg}%</li>
                <li className="list-group-item">Flavor: {prop.strain.flavor}</li>
            </ul>
            <div className="card-body" style={{display: "flex", flexDirection: "row", gap: "0.7rem"}}>
                <Link to={`/explore/${prop.strain._id}`}>
                    <button className={`btn btn-primary ${style.primary}`}>Learn More</button>
                </Link>
                <button className={`btn btn-secondary ${style.secondary}`} onClick={()=>{handleEdit(prop.strain)}}>Edit</button>
            </div>
        </div>
    )
}
    
