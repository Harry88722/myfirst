import React, { Component } from 'react';
import'./Main.css';


class Main extends Component {
	constructor(props){
    super(props);
    this.state={
       imageone:"https://gratisography.com/thumbnails/gratisography-field-blue-sky-thumbnail-small.jpg",
       imagetwo:"https://gratisography.com/thumbnails/gratisography-441-thumbnail-small.jpg",
       imagethree:"https://cdn.pixabay.com/photo/2014/02/03/08/04/forget-me-not-257176_960_720.jpg"     

               
             

    };
    
  };
  render(){
  return (
      <div id="demo" class="carousel slide" data-ride="carousel">

  
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={this.state.imageone} alt="Nature 1" className="image"/>
   </div>
    <div class="carousel-item">
      <img src={this.state.imagetwo} alt="Nature 2" className="image"/>
    </div>
    <div class="carousel-item">
      <img src={this.state.imagethree} alt="Nature 3" className="image"/>
    </div>
  </div>

  
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>

</div>
          

      
    
  );
}
}

export default Main;
