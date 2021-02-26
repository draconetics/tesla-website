import React, { Component } from 'react'

import './Main.css'

export default class Main extends Component {

  constructor(props){
      super(props);
      this.sectionList = [];
      this.initSectionList();
  }

  initSectionList(){
    for(let i = 0; i < 4; i++){
        this.sectionList[i] = React.createRef();
    }
    console.log(this.sectionList);
  }

  componentDidMount(){
    const options = {
      rootMargin: '0px',
      threshold: 0.25
    }

    const callback = (entries) => {
        entries.forEach((entry) => {
          console.log(entry.intersectionRatio );
          if (entry.intersectionRatio >= 0.25) {
            //target.classList.add("is-visible");
            console.log('show compoent');
            //entry.target.firstElementChild.classList.add('is-visible')
          } else {
            //target.classList.remove("is-visible");
            console.log('delete componet');
            //entry.target.firstElementChild.classList.remove('is-visible')
          }
          console.log(entry.target.firstElementChild);
        })
      }
      
    const observer = new IntersectionObserver(callback, options)
      
    this.sectionList.forEach((section) => {
        observer.observe(section.current)
    })
  }

  render() {
    return (
      <div class="scroll-container">
        <section ref={this.sectionList[0]}>
            <h2>Section 1</h2>
        </section>
        <section ref={this.sectionList[1]}>
          <h2>Section 2</h2>
        </section>
        <section ref={this.sectionList[2]}>
          <h2>Section 3</h2>
        </section>
        <section ref={this.sectionList[3]}>
          <h2>Section 4</h2>
        </section>
      </div>
    )
  }
}
