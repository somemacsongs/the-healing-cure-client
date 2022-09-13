import {Link} from "react-router-dom";
import style from "./AddCard.module.css"

export default function AddCard(){
    return (
        
        <div className="card">
            <Link to="/create" style={{textDecoration: "none"}}>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAAeHh7u7u6enp6pqanh4eGioqL5+fnd3d3MzMzm5uYoKCjr6+vJycm+vr58fHyGhoZFRUVtbW1WVlY1NTVmZmbR0dE8PDxSUlLX19dERET09PS5ublfX18lJSUMDAyKiop4eHgTExNqtAvlAAAFBUlEQVR4nO2d63biIBRGoyYam2gSb/XW2jrv/44zs2xnhIANh8Nl4bd/K+vshACHEMgyAAAAAAAAAAAAAADipmqKdrOvL2O3XOr9pi2ayq9cOc/fR7455PPSk99re/Gud+PSvrrXO+fbQHo3tvnZqd+kDap3o1048zt3oeW+6Bzdx+IjtNk/PgoHftUqtJbAasotWIRW6sF7G8t1aB8Fa8bucRG2h9CxZWtU56FVtMx5BF9DezzgJXVBFsUHVXTVzZpjNXFLdWxm3UkfhHVFXWgKHncsFWQwy0/dcN+yuSnVrejOr96Nl50ylq1dp6HsB6/s44mBTJUD/7VNkaqRzImpiSYxV40dLUY3FW9xLKguOn2Ko3/B6lAV9D/TuhfVilpW/3Jt3CbYwyg3XBXr3MsHrZ5pRnrt3wftyvcy+lgEFYodpZRJr4pyx2lBr6JOCIXIfU8dwzP4zVlubgg38SxfpfCt6D1TOTzz659LJYTuB2Xkhj43LkEakJK7HGdI+cbW9P9yVhhyqKZGTutMJ/yldqZ1EqQdV6sQSykbi6uZuSE1NrVZFiVVgZ2jIO2Q8kWzB0lqSUMkvD/zIgZp1pqKY4axoxBtGQtRmo25xKvz6ShCWz7FME3+KqW+cVbSLFuKYZokwg394nhFDLMx+Kc4JIpvPPONOK4xGViK/T0p+fKCmMKa9PliUzpzFqEtMyFOk8Z0T67ffhHbi73BP8X88ugsQluOQpy1wT/FrtTziisDxF7tYvBP0ZAyB+IHcS7JZOgFw1iAoR4YxgIM9TgzLJdvS8alTNEZVreZlR3bWqbYDP8nrFwpdWSG9/N3TLOTkRke7opkelMXl6E4gctzE+MyFGdGeF5lxWUoTjKbvwxTAUM9MKQAQwow1ANDCjCkAEM9MKQAQwow1ANDCjCkAEM9MKQAQwow1ANDCjCkEJehuEKLZyWZf8NpkeuYifsuvc+0vyyGv9PwbTg/jHg4DHX0bCit2LVi4CtUv4aqj4bpDHsR7tdQ/bU8lWFfc3o1LFkFR6NBKza8GnI+hX9ZRmf4xmz4Fp1h+vcw/ecw/bZUu5MNjRj7Q/ljOSuiHNP8GXf3N6ygEeu4NEs/t3hMGvnhI9LP8WFIAYZ6YEgBhhRgqAeGFGBIAYZ6YEgBhhRgqAeGFGBIAYZ6YEgBhhRgqAeGFNL/Djj9b7mF7/EPPEVGZnh/E9PcU+HuFWqi+2Jk2eK2W/w62b1NsvT3p2EHhnpgGAsw1APDWOAyTHH/0vT3oE1/H+H094JOfz/v9PdkT39f/fTPRkj/fIsnOKMk/XNm0j8rKP3znuQzu65ugrTC7syuJzh3TT477+QiSCtsz857gvMP0z/DMv1zSJ/gLNn0zwN+gjOdYz2X+8x2LvcTnK2u3OoidL/Yr1hWE7qq4k4hB3DzkyIiq4vee6b/cg1VVadXVTh27V+5VZU52oVIiV/UX/xvLd+a676yH3eDtnVgY/l50URivexBTlLuOHWz5lhN3FIdm1mnevq+YGgV5EwxLlgel5gVmdqDBxU1MGwd10LdooZmy7a26k+noewXA7NmXFyVqUc3YWEfPlb9YXhIVi4WFxS/Qmv948PR+P/cy/oD0blLUycxOHZu1/ec87A9xzb3MM3w2vazbD/UrfHUPZFynr//HA8zh3zO2wH+SNUU7WZfX8ZuudT7TVs08a48AwAAAAAAAAAAAADgxm9Xd0/PkuJ9NwAAAABJRU5ErkJggg==" className="card-img-top" alt="AddCard" />
            </Link>
            <div className="card-body" id={style.text}>
                <h5 className="card-title">Add a strain!</h5>
                <p className="card-text">Click on "+" to add a strain</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Type: -</li>
                <li className="list-group-item">THC: -%</li>
                <li className="list-group-item">CDB - CDG: -% </li>
                <li className="list-group-item">Flavor: -</li>
            </ul>
            <div className="card-body">
                    <button className="btn btn-primary disabled">Learn More</button>
                    <button className="btn disabled">Edit</button>
            </div>
        </div>
        
        
    )
}