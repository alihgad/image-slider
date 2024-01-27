import { Component } from "react";
import "./MainImage.css"
export default class MainImage extends Component {

 
  render() {
    return (
      <>
        <div className="container   pt-5">
          <div className="w-25 m-auto main">
            <img className="w-100 h-100 " src={this.props.src} alt="main" />
          </div>
        </div>
      </>
    );
  }
}
