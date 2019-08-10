import React, { Component } from 'react';
import './Message.css';



class Message extends Component {
	constructor(props){
    super(props);
    this.state={
             
               
               };
                    };
  render(){
  return (
    <div>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2018/01/11/11/01/wood-3075862__340.jpg "className="xyz"/>
            <div className="carousel-caption">
              <h3>Save Trees</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1525331336235-d3153d7e58cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60 " className="xyz"/>
            <div className="carousel-caption">
              <h3>Avoid Plastic</h3>
            </div>   
          </div>
          <div className="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2015/06/01/06/32/hand-792920__340.jpg " className="xyz"/>
            <div className="carousel-caption">
              <h3>Save Water</h3>
            </div>   
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
     <h1 className="text-center text-capitalize pt-5">Quates</h1>
      <hr className="w-25 mx-auto pt-5 h-50"/>



    <div className="container fluid ">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-12 ">
          <img src="https://images.pexels.com/photos/906107/pexels-photo-906107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="img-fluid  rounded-circle  for"/>
        </div>
        <div className="col-lg-6 col-md-6 col-12 ">
          <h3 className="mt-5"> Munia Khan</h3>
          <hr/>
          <p className="text-capitalize mt-3"> "Trees exhale for us so that we can inhale them to stay alive. Can we ever forget that? Let us love trees with every breath we take until we perish." 
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-12 mt-5">
          <img src= "https://images.pexels.com/photos/6256/water-kitchen-black-design.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid rounded-circle"/>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <h3 className="mt-5"> Antoine de Saint-Exupery</h3>
          <hr/>
          <p className="text-capitalize mt-3">
           “Water, thou hast no taste, no color, no odor; canst not be defined, art relished while ever mysterious. Not necessary to life, but rather life itself, thou fillest us with a gratification that exceeds the delight of the senses.”
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-12 mt-5 mb-5">
          <img src= "https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-fluid rounded-circle"/>
        </div>
        <div className="col-lg-6 col-md-6 col-12 mt-5">
          <h3 className="text-capitalize mt-3">Roberto Burle Marx </h3>
          <hr/>
          <p className="text-capitalize mt-3">
          "A garden is a complex of aesthetic and plastic intentions; and the plant is, to a landscape artist, not only a plant - rare, unusual,
           ordinary or doomed to disappearance - but it is also a color, a shape, a volume or an arabesque in itself."
          </p>
        </div>
        
       </div>
     </div>
     </div>
     
     
         );
          }
                                }
export default Message;
