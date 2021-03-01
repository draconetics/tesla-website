import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLessThan } from '@fortawesome/free-solid-svg-icons'
import './SpringSlider.css';
import SpringSliderNote from './SpringSliderNote';
import SpringBudget from './SpringBudget';

export const SpringSlider = () => {
  const sliderList = [
    {
        img:'/img/model-s/slider-a/MS-Interior-Carousel-A-Desktop.jfif',
        title:'17” Cinematic Display',
        description:'With 2200x1300 resolution, ultra bright, true colors, exceptional responsiveness and left-right tilt, the new center display is the best screen to watch anywhere.',
    },
    {
        img:'/img/model-s/slider-a/MS-Interior-Carousel-B-Desktop.jfif',
        title:'Focus on Driving',
        description:'The ultimate focus on driving: no stalks, no shifting. Model S is the best car to drive, and the best car to be driven in.',
    },
    {
        img:'/img/model-s/slider-a/MS-Interior-Carousel-C-Desktop.jfif',
        title:'Perfect Environment',
        description:'Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.',
    },
    {
        img:'/img/model-s/slider-a/MS-Interior-Carousel-D-Desktop.jfif',
        title:'Redesigned Second Row',
        description:'Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.',
    },
  ];

  const [index, setIndex] = React.useState(0)

  const setSlideCustom = (operation) => {
    console.log(operation);
    let resp = operation;
    switch (operation){
        case '>':
            console.log('right')
            if(index < (sliderList.length-1)){
                console.log(index);
                resp = index+1;
            }            
            else{
                resp = 0;
            };
            break;
        case '<':  
        if(index > 0){
            resp = index-1;
        }            
        else{
            resp = sliderList.length-1;
        }
            break;
        default: resp = operation;
    }
    console.log(resp);
    setIndex(resp);
    return resp;
  };

  const BulletComponent = ({ onClick, isActive }) => (
    <li
      style={{
        width: '25px',
        height: '25px',
        backgroundColor: 'red',
        margin: '0 2px',
        opacity: isActive && '0.5',
      }}
      onClick={onClick}
    />
  );

  BulletComponent.propTypes = {
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
  };


  return (
    <>
      <div className="spring-slider__row-space"></div>
      <div className="spring-slider">
        <Slider
          BulletComponent={BulletComponent}
          activeIndex={index}
          setSlideCustom={setSlideCustom}
          auto={4000} 
        >
          <div
            className="container container-image"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + sliderList[0].img}`,
            }}
          ></div>
          <div
            className="container container-image"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + sliderList[1].img}`,
            }}
          ></div>
          <div
            className="container container-image"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + sliderList[2].img}`,
            }}
          ></div>
          <div
            className="container container-image"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + sliderList[3].img}`,
            }}
          ></div>
        </Slider>
        <span className="spring-slider__right-arrow" onClick={()=>setSlideCustom('>')}> 
          <FontAwesomeIcon icon={faGreaterThan} />
        </span>
        <span className="spring-slider__left-arrow" onClick={()=>setSlideCustom('<')}> 
          <FontAwesomeIcon icon={faLessThan} />
        </span>
      </div>
      <div className="spring-slider__content">
          <SpringBudget changeIndex={setSlideCustom} index={index} />
          <SpringSliderNote item={sliderList[index]} />
      </div>
    </>
  );
};
