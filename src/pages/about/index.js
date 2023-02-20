import React, { Component } from "react";
import "../about/about.css";
import "../about/photo-1481627834876-b7833e8f5570.jpeg";

export class About extends Component {
  render() {
    return (
      <div className="main1">
        <div className="title1">
          <h1>About Us</h1>
          <p className="about-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="image1">
          <img
            src="photo-1481627834876-b7833e8f5570.jpeg"
            alt="."
            width="500"
            height="500"
          ></img>
        </div>
      </div>
    );
  }
}

export default About;
