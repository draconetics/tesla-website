import React, { Component } from 'react'
import ScrollSnap from 'scroll-snap'
import { Fade, Bounce } from "react-awesome-reveal";

import './Scroll.css'

function callback() {
  console.log('snapped')
}

export default class Scroll extends Component {
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
    for(let i = 0; i < 4; i++){
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
          entry.target.firstElementChild.classList.add('is-visible')
        } else {
          //target.classList.remove("is-visible");
          console.log('delete componet');
          entry.target.firstElementChild.classList.remove('is-visible')
        }
        console.log(entry.target.firstElementChild);
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
        <div className="page first-page" ref={this.sectionList[0]}>
          <Fade direction="up">
            <div>tesla M</div>
          </Fade>
          <div className="hint">scroll down</div>
        </div>
        <div className="page second-page" ref={this.sectionList[1]}>
          <div>II</div>
        </div>
        <div className="page third-page" ref={this.sectionList[2]}>
          <div>III</div>
        </div>
        <div className="page fourth-page" ref={this.sectionList[3]}>
          <div>IV</div>
          <div className="hint">scroll up</div>
        </div>
      </div>
    )
  }
}
