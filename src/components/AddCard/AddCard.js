import {Link} from "react-router-dom";
import style from "./AddCard.module.css"

export default function AddCard(){
    return (
        
        <div className="card" style={{width:"20rem", marginTop:"2rem", marginLeft:"1.3rem"}}>
            <Link to="/create" style={{textDecoration: "none"}}>
            <img src="https://static.vecteezy.com/system/resources/previews/005/423/778/original/add-icon-on-white-background-plus-icon-document-add-plus-icon-free-vector.jpg" className="card-img-top" alt="AddCard" />
            </Link>
            <div className="card-body" id={style.text}>
                <h5 className="card-title">Add a strain!</h5>
                <p className="card-text" style={{height:"3rem"}}>Click on "+" to add a strain</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Type: -</li>
                <li className="list-group-item">THC: -%</li>
                <li className="list-group-item">CDB - CDG: -% </li>
                <li className="list-group-item">Flavor: -</li>
            </ul>
            <div className="card-body" style={{display: "flex", flexDirection: "row", gap: "0.7rem"}}>
                    <button className="btn btn-primary disabled" style={{height:"2.5rem"}}>Learn More</button>
                    <button className="btn btn-secondary disabled" style={{height:"2.5rem"}}>Edit</button>
            </div>
        </div>
        
        
    )
}