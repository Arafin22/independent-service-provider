import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Cartitem = (props) => {
    console.log(props);
    const {imageURL,price,service1,service2,service3,name,_id}=props.item.service;
  
    
    return (
        <div className='service-item'>
        <Card className="text-center">
<Card.Header>{name}</Card.Header>
<Card.Body>
<Card.Title>$ {price}</Card.Title>


<Card.Text>
<img className='services-img' src={imageURL} alt="" />
</Card.Text>

</Card.Body>
<Card.Footer className="text-muted">
<Button variant="danger">Remove</Button>
</Card.Footer>
</Card>
      
    </div>
    );
};

export default Cartitem;