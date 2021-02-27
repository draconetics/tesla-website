import React, { Component } from 'react'
import ScrollSnap from 'scroll-snap'
import { Fade, Bounce } from "react-awesome-reveal";
import Menu from  './Menu'

import './Main.css';
import FirstSection from './Section01';
import Section01 from './Section01';
import Section02 from './Section02';

function callback() {
  console.log('snapped')
}

export default class Main extends Component {
  constructor(props){
    super(props);
    this.container = React.createRef();
    this.sectionList = [];
    this.initSectionList();
  }

  bindScrollSnap() {
    const element = this.container.current
    const snapElement = new ScrollSnap(element, {
      snapDestinationY: '100%',
      threshold: 0.1,
      timeout: 0,
      duration: 0,
    })
    snapElement.bind(callback)
  }
    
  initSectionList(){
    for(let i = 0; i < 7; i++){
        this.sectionList[i] = React.createRef();
    }
    console.log(this.sectionList);
  }

  initObservers(){
    const options = {
      rootMargin: '0px',
      threshold: 0.25
    }

    const callback = (entries) => {
      entries.forEach((entry) => {
        console.log(entry.intersectionRatio);
        if (entry.intersectionRatio >= 0.25) {
          //target.classList.add("is-visible");
          console.log('show compoent');
          entry.target.firstElementChild.firstElementChild.classList.add('show')
        } else {
          //target.classList.remove("is-visible");
          console.log('delete componet');
          entry.target.firstElementChild.firstElementChild.classList.remove('show')
        }
        console.log(entry.target.firstElementChild.firstElementChild);
      })
    }
      
    const observer = new IntersectionObserver(callback, options)
      console.log(this.sectionList);
    this.sectionList.forEach((section) => {
      if(section && section.current){
        console.log('add observer');
        observer.observe(section.current);
      }
        
    })
  }

  componentDidMount() {
    //this.initSectionList();
    this.initObservers();
    this.bindScrollSnap();
  }

  render() {
    return (
      <div id="container" ref={this.container}>
        <Menu />
        <section 
          className="page" 
          ref={this.sectionList[0]}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/ms-homepage-desktop.jfif'})`}}
        >
          <Section01 model='Model S' buttonLeft='custom order' buttonRight='existing inventory' />
        </section>
        <section 
          className="page" 
          ref={this.sectionList[1]}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Desktop-ModelY.jfif'})`}}
        >
          <Section01 model='Model Y' buttonLeft='custom order' buttonRight='learn more' />
        </section>
        <section 
          className="page" 
          ref={this.sectionList[2]}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/m3-homepage-desktop.jfif'})`}}
        >
          <Section01 model='Model 3' buttonLeft='custom order' buttonRight='existing inventory' />
        </section>
        <section 
          className="page" 
          ref={this.sectionList[3]}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/mx-homepage-desktop.jfif'})`}}
        >
          <Section01 model='Model X' buttonLeft='custom order' buttonRight='existing inventory' />
        </section>
        <section 
          className="page" 
          ref={this.sectionList[4]}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Desktop-SolarPanels.jfif'})`}}
        >
          <Section01 
            model='Lowest Cost Solar Panels in America' 
            buttonLeft='order now' 
            buttonRight='learn more' 
          />
        </section>
        <section 
          className="page" 
          ref={this.sectionList[5]}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/solar-roof-hero-desktop.jfif'})`}}
        >
          <Section01 
            model='Solar for New Roofs' 
            buttonLeft='order now' 
            buttonRight='learn more' 
          />
        </section>
        <section 
          className="page last-page" 
          ref={this.sectionList[6]}
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/Desktop-Accessories.jfif'})`}}
        >
          <Section02 />
        </section>
      </div>
    )
  }
}
