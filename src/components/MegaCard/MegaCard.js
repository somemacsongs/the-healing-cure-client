import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"
import style from "./MegaCard.module.css"

function MegaCard(props) {
  return (
    <Row xs={50} md={50} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card style={{marginTop:"3rem"}}>
            <Card.Img variant="top" src={props.image} style={{width: "30rem", backgroundImage: "linear-gradient(60deg, red, yellow, green)"}}/>
            <Card.Body>
              <Card.Text style={{maxWidth: "25rem", marginLeft: "1rem"}}>
                <center>{props.text}</center>
              </Card.Text>
              <Link to={props.link}><center><Button variant="primary" className={style.primary}>{props.button}</Button></center></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
export default MegaCard;