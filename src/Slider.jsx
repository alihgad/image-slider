import { Component } from "react";
import src1 from "./imges/1.jpg";
import src2 from "./imges/2.jpg";
import src3 from "./imges/3.jpg";
import src4 from "./imges/4.jpg";
import MainImage from "./MainImage";
import "jquery/dist/jquery.js";
import $ from "jquery/dist/jquery";

export default class Slider extends Component {
  state = {
    source: src4,
  };

  adding() {
    $("img").click((e) => {
      let src = e.target.getAttribute("src");
        this.setState({ source : src });
    });
  }
  componentDidMount() {
    this.src = this.adding();
  }
  render() {
    return (
      <>
        <MainImage src={this.state.source} />
        <div className="container">
          <div className="row row-cols-md-4 mt-2">
            <div className="col p-5">
              <img className=" f w-100  h-100" src={src1} alt="1" />
            </div>
            <div className="col p-5">
              <img className="w-100  h-100" src={src2} alt="2" />
            </div>
            <div className="col p-5">
              <img className="w-100  h-100" src={src3} alt="3" />
            </div>
            <div className="col p-5">
              <img className="w-100  h-100" src={src4} alt="4" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
