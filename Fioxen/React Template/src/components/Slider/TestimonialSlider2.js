import React, { Component, Fragment } from "react";
import Slider from "react-slick";

export default class TestimoinalSlider2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <Fragment>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          dots={false}
          arrows={false}
          autoplaySpeed={1500}
          focusOnSelect={true}
          autoplay={true}
          slidesToShow={3}
          slidesToScroll={1}
          className="testimonial-thumb-slider-one"
        >
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-1.jpg"
              alt="testimonial thumb"
            />
          </div>
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-2.jpg"
              alt="testimonial thumb"
            />
          </div>
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-3.jpg"
              alt="testimonial thumb"
            />
          </div>
          <div className="single-thumb">
            <img
              src="assets/images/testimonial/tm-thumb-2.jpg"
              alt="testimonial thumb"
            />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          dots={false}
          arrows={false}
          infinite={true}
          autoplaySpeed={1500}
          autoplay={true}
          fade={true}
          slidesToShow={1}
          slidesToScroll={1}
          className="testimonial-content-slider-one"
        >
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
                multiply given all hath given may meat god abundant appear lioud
                fourth madman mane said god dominion great gathering called very
                shall after cre ated from fruitful place over the mitual{" "}
              </p>
              <div className="author-info d-flex">
                <div className="quote">
                  <img src="assets/images/quote.png" alt="" />
                </div>
                <div className="author-title">
                  <h4>Melisa Powels</h4>
                  <span className="position">Sr. Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
                multiply given all hath given may meat god abundant appear lioud
                fourth madman mane said god dominion great gathering called very
                shall after cre ated from fruitful place over the mitual{" "}
              </p>
              <div className="author-info d-flex">
                <div className="quote">
                  <img src="assets/images/quote.png" alt="" />
                </div>
                <div className="author-title">
                  <h4>Martyn Decode</h4>
                  <span className="position">Sr. Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
                multiply given all hath given may meat god abundant appear lioud
                fourth madman mane said god dominion great gathering called very
                shall after cre ated from fruitful place over the mitual{" "}
              </p>
              <div className="author-info d-flex">
                <div className="quote">
                  <img src="assets/images/quote.png" alt="" />
                </div>
                <div className="author-title">
                  <h4>Alesha Mature</h4>
                  <span className="position">Sr. Designer</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
                multiply given all hath given may meat god abundant appear lioud
                fourth madman mane said god dominion great gathering called very
                shall after cre ated from fruitful place over the mitual{" "}
              </p>
              <div className="author-info d-flex">
                <div className="quote">
                  <img src="assets/images/quote.png" alt="" />
                </div>
                <div className="author-title">
                  <h4>Martyn Decode</h4>
                  <span className="position">Sr. Designer</span>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}
