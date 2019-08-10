import React, { Component } from 'react';

import './Gallery.css';

class Gallery extends Component {
	constructor(props){
    super(props);
    this.state={
                 imageone:"https://images.pexels.com/photos/736849/pexels-photo-736849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                 imagetwo:"https://images.pexels.com/photos/449462/pexels-photo-449462.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                 imagethree:"https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500",
                 imagefour:"https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                 imagefive:"https://images.pexels.com/photos/822350/pexels-photo-822350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                 imagesix:"https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                };
                    };

    Changeone = () => {
      this.setState({ imageone:"https://images.pexels.com/photos/235615/pexels-photo-235615.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"});
                      };
    Changetwo = () => {
      this.setState({ imagetwo:"https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"});
                      };
    Changethree = () => {
      this.setState({ imagethree:"https://images.pexels.com/photos/449416/pexels-photo-449416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"});
                        };
    Changefour = () => {
      this.setState({ imagefour:"https://images.pexels.com/photos/446345/pexels-photo-446345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"});
                       };
    Changefive = () => {
      this.setState({ imagefive:"https://images.pexels.com/photos/6059/nature-people-water-garden.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"});
                       };
    Changesix = () => {
      this.setState({ imagesix:"https://images.pexels.com/photos/1064535/pexels-photo-1064535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"});
                      };
    render(){
  return (
    <div className="container"> 
      <h1 className="text-center text-capitalize pt-5">Gallery</h1>
      <hr className="w-25 mx-auto pt-5 h-50"/>
      <div className="row">
        <div className="col-lg-4 col-md-2 col-12 mb-4">
          <img src={this.state.imageone} className="img-fluid"/>
            <button className=" mt-3  text-white" onClick={this.Changeone}>Change  </button>
            
        </div>
        <div className="col-lg-4 col-md-2 col-12 mb-4">
          <img src={this.state.imagetwo} className="img-fluid"/>
          <button className="  mt-3 text-white" onClick={this.Changetwo}>Change  </button>
        </div>
        <div className="col-lg-4 col-md-2 col-12 mb-4">
          <img src={this.state.imagethree} className="img-fluid"/>
          <button className="   mt-3  text-white" onClick={this.Changethree}>Change  </button>
        </div>
        <div className="col-lg-4 col-md-2 col-12 mb-4">
           <img src={this.state.imagefour} className="img-fluid"/>
           <button className="mt-3  text-white" onClick={this.Changefour}>Change  </button>
        </div>
        <div className="col-lg-4 col-md-2 col-12 mb-4">
          <img src={this.state.imagefive} className="img-fluid"/>
          <button className="mt-3  text-white" onClick={this.Changefive}>Change  </button>
        </div>
        <div className="col-lg-4 col-md-2 col-12 mb-4">
          <img src={this.state.imagesix} className="img-fluid"/>
          <button className="mt-3  text-white" onClick={this.Changesix}>Change  </button>
        </div>
      </div>
    </div>
  )
}

}

export default Gallery;