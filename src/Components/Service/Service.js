import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ServieContext } from '../../App';
import './Service.css'

const Service = (props) => {
    const {imageURL,price,service1,service2,service3,name,_id}=props.service;

    const [cart, setCart] = useContext(ServieContext);
    console.log(cart);

    function addToCart (){
        setCart([...cart,props])
    }
    
    return (
        <div className='service-item'>
            <Card className="text-center">
  <Card.Header>{name}</Card.Header>
  <Card.Body>
    <Card.Title>$ {price}</Card.Title>
    <p>* {service1}</p>
    <p>* {service2}</p>
    <p>* {service3}</p>

    <Card.Text>
    <img className='services-img' src={imageURL} alt="" />
    </Card.Text>
    
  </Card.Body>
  <Card.Footer className="text-muted">
  <Button variant="danger" onClick={addToCart}>Add To Cart</Button>
  </Card.Footer>
</Card>
          
        </div>
    );
};

export default Service;