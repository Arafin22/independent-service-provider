import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider1-min.jpeg';
import slider2 from '../../images/slider2-min.jpeg';
import slider3 from '../../images/slider3-min.jpeg';

const Slider = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
       
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
        
        height={500}
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Powerful Idea
</h3>
          <p>Something we do that's different to lots of other photographers

</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={500}
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>creative</h3>
          <p>Something we do that's different to lots of other photographers

</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        height={500}
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Unique</h3>
          <p>
          Something we do that's different to lots of other photographers


          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

      
    );
};

export default Slider;