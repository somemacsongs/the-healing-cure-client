export default function Card(prop){
    return (
        <div className="card">
            <img src={prop.strain.image} className="card-img-top" alt={prop.strain.name} />
            <div className="card-body">
                <h5 className="card-title">{prop.strain.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">THC: {prop.strain.thc}%</li>
                <li className="list-group-item">Type: {prop.strain.type}</li>
                <li className="list-group-item">Flavor: {prop.strain.flavor}</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}
    
