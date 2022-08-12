import react from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "./style.css";
import {useDispatch} from 'react-redux';
import {ADD} from '../redux/actions/action'

const Cards = ({resource}) => {

  const dispatch = useDispatch();

  const send = (e)=> {
    console.log(e);
    dispatch(ADD(e))
  }
    return(

        <div className='container mt-3'>
        
  
        <div className="row  justify-content-center align-items-center">
        <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style">
        <Card.Img variant="top" src={resource.imgdata} style={{height:"16rem"}} className="mt-3" />
        <Card.Body>
          <Card.Title>{resource.rname}</Card.Title>
          <Card.Text>
          Price : ₹ {resource.price}
          </Card.Text>
          <div className="button_div d-flex justify-content-center">
            <Button variant="primary" onClick={() => send(resource)}
             className='col-lg-12'
            >Add to Cart</Button>
          </div>
        
        </Card.Body>
      </Card>
        </div>
      </div>

    );
}

export default Cards;

