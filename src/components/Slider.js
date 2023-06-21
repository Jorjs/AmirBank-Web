import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img/slider1.jpg';
import img2 from '../assets/img/slider2.jpg';
import img3 from '../assets/img/banner.jpg';
import { Container } from 'react-bootstrap';

export const Slider = () => {
  const [index, setIndex] = useState(0);
  console.log("Asdas");
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
       <div className="slider_container">
          <h1>asddsasad</h1>
          <img src={img1} alt="Round"/>      
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="slider_container">
      <img src={img2} alt="Second slide"/>
      </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-img"
          src={img2}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;