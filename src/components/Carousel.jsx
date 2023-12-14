import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  increase = () => {
    if (this.state.count < 2) {
      this.setState({ count: this.state.count += 1 })
    }
  }
  decrease = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count -= 1 })
    }
  }
  render() {
    console.log(images);
    return (
      <div>
        <div className="main">
          <button className="backwardArrow" onClick={this.decrease}>
            <ArrowBackIosIcon />
          </button>
          <img src={images[this.state.count].img} alt="" />

          <button className="forwardArrow" onClick={this.increase}>
            <ArrowForwardIosIcon />
          </button>
        </div>
        <div className="title">
          <h1>{images[this.state.count].title}</h1>
        </div>
        <div className="subtitle">
          <p>{images[this.state.count].subtitle}</p>
        </div>
      </div>

    )
  }

}

export default Carousel;