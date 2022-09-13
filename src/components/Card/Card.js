import {Link} from "react-router-dom"

export default function Card(prop){
    return (
        <div className="card">
            <img src={prop.strain.image} className="card-img-top" alt={prop.strain.name} />
            <div className="card-body">
                <h5 className="card-title">{prop.strain.name}</h5>
                <p className="card-text">Helps with: {prop.strain.helpw}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Type: {prop.strain.type}</li>
                <li className="list-group-item">THC: {prop.strain.thc}%</li>
                <li className="list-group-item">CDB - CDG: {prop.strain.cbd}% - {prop.strain.cbg}%</li>
                <li className="list-group-item">Flavor: {prop.strain.flavor}</li>
            </ul>
            <div className="card-body">
                <Link to={`/explore/${prop.strain._id}`}>
                    <button className="btn btn-primary">Learn More</button>
                </Link>
                <Link to={`/explore/${prop.strain._id}/edit`}>
                    <button className="btn">Edit</button>
                </Link>
            </div>
        </div>
    )
}
    
