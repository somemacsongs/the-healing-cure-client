import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom"

function MegaCard(props) {
  return (
    <Row xs={50} md={50} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Text>
                {props.text}
              </Card.Text>
              <Link to={props.link}><center><Button variant="primary">{props.button}</Button></center></Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
export default MegaCard;