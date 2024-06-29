import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import ListingDetailsRight from "../src/components/ListingDetailsRight";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";
import { GallerySlider2, reletedListingSlider2 } from "../src/sliderProps";

const ListingDetails2 = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      {/*====== Start breadcrumbs Section ======*/}
      <section
        className="page-breadcrumbs page-breadcrumbs-two bg_cover"
        style={{
          backgroundImage: "url(assets/images/bg/listing-breadcrumbs-1.jpg)",
        }}
      />
      {/*====== End breadcrumbs Section ======*/}
      {/*====== Start Listing Details Section ======*/}
      <section className="listing-details-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="listing-details-wrapper listing-details-wrapper-two">
                <div className="listing-info-area mb-30 wow fadeInUp">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <div className="listing-info-content">
                        <ul className="ratings ratings-three">
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li>
                            <span>
                              <a href="#">(02 Reviews)</a>
                            </span>
                          </li>
                        </ul>
                        <h3 className="title">Center Museum</h3>
                        <div className="listing-meta">
                          <ul>
                            <li>
                              <span>
                                <i className="ti-location-pin" />
                                California, USA
                              </span>
                            </li>
                            <li>
                              <span>
                                <i className="ti-tablet" />
                                <a href="tel:+982653652-05">
                                  +98 (265) 3652 - 05
                                </a>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="button">
                        <Link href="/listing-grid">
                          <a className="icon-btn">
                            <i className="ti-heart" />
                          </a>
                        </Link>
                        <Link href="/listing-grid">
                          <a className="icon-btn">
                            <i className="ti-share" />
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-thumbnail mb-30 wow fadeInUp">
                  <img
                    src="assets/images/listing/listing-single-1.jpg"
                    alt="listing image"
                  />
                </div>
                <div className="listing-content mb-30 wow fadeInUp">
                  <h3 className="title">{`World's Quality Museum`}</h3>
                  <p>
                    Parturient varius elementum maecenas faucibus maecenas
                    inceptos commodo metus vitae ac pretium magnis. Ridiculus
                    aenean diam duis montes mattis curae dis platea cubilia
                    fames justo nullam per incepto Accumsan mollis, semper nisl
                    nulla per curae ante tellus cursus ut blandit eleifend ut
                    adipiscing fringilla Sociosqu penatibus nascetur senectus,
                    molestie sed habitant adipiscing maecenas ultrices curae
                    sociis mi eros ultrices euismod risus cubilia eget habitasse
                    facilisic
                  </p>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-credit-card" />
                        </div>
                        <div className="info">
                          <h6>Card Payment</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-paint-bucket" />
                        </div>
                        <div className="info">
                          <h6>Air-conditioned</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-rss-alt" />
                        </div>
                        <div className="info">
                          <h6>Wireless Internet</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-trash" />
                        </div>
                        <div className="info">
                          <h6>Serves Alcohol</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-car" />
                        </div>
                        <div className="info">
                          <h6>Parking Street</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                      <div className="icon-box icon-box-one">
                        <div className="icon">
                          <i className="ti-credit-card" />
                        </div>
                        <div className="info">
                          <h6>Outdoor Seating</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Cras vivamus dui cubilia placerat netus lorem vivamus
                    inceptos sollicitudin non inceptos mi dui vulputate donec
                    sed etiam turpis varius a porta natoque nullam tincidunt in
                    nec cubilia hac netus and class pharetra Commodo convallis
                    pharetra tortor facilisis dapibus maecenas nunc nascetur
                    arcu quam vel non varius egestas fusce aced molestie
                    adipiscing curae ante tellus cursus ut blandit
                  </p>
                </div>
                <div className="listing-play-box mb-30 wow fadeInUp">
                  <h4 className="title">Documentary</h4>
                  <div
                    className="play-content bg_cover text-center"
                    style={{
                      backgroundImage: "url(assets/images/bg/video-bg-3.jpg)",
                    }}
                  >
                    <a
                      href="#"
                      className="video-popup"
                      onClick={(e) => {
                        e.preventDefault();
                        setVideo(true);
                      }}
                    >
                      <i className="flaticon-play-button" />
                    </a>
                  </div>
                </div>
                <div className="listing-gallery-box mb-30 wow fadeInUp">
                  <h4 className="title">Photo Gallery</h4>
                  <Slider {...GallerySlider2} className="gallery-slider-one">
                    <div className="gallery-item">
                      <img
                        src="assets/images/listing/gallery-5.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="assets/images/listing/gallery-6.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="assets/images/listing/gallery-7.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="assets/images/listing/gallery-8.jpg"
                        alt="gallery image"
                      />
                    </div>
                    <div className="gallery-item">
                      <img
                        src="assets/images/listing/gallery-6.jpg"
                        alt="gallery image"
                      />
                    </div>
                  </Slider>
                </div>
                <div className="listing-tag-box mb-30 wow fadeInUp">
                  <h4 className="title">Popular Tag</h4>
                  <a href="#">Delivery</a>
                  <a href="#">Restaurant</a>
                  <a href="#">Free Internet</a>
                  <a href="#">Shopping</a>
                  <a href="#">Car Parking</a>
                </div>
                <div className="listing-rating-box wow fadeInUp">
                  <h4 className="title">Average Review (10 Reviews)</h4>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-average-rating">
                        <h5 className="title">Service</h5>
                        <div className="single-average-wrap d-flex align-items-center">
                          <div className="progress flex-grow-1">
                            <div
                              className="progress-bar"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="rating">4.5</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-average-rating">
                        <h5 className="title">Quality</h5>
                        <div className="single-average-wrap d-flex align-items-center">
                          <div className="progress flex-grow-1">
                            <div
                              className="progress-bar"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="rating">4.5</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-average-rating">
                        <h5 className="title">Location</h5>
                        <div className="single-average-wrap d-flex align-items-center">
                          <div className="progress flex-grow-1">
                            <div
                              className="progress-bar"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="rating">4.5</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-average-rating">
                        <h5 className="title">Price</h5>
                        <div className="single-average-wrap d-flex align-items-center">
                          <div className="progress flex-grow-1">
                            <div
                              className="progress-bar"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <span className="rating">4.5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-review-box mb-50 wow fadeInUp">
                  <h4 className="title">Customer Review</h4>
                  <ul className="review-list">
                    <li className="review">
                      <div className="thumb">
                        <img
                          src="assets/images/listing/review-1.jpg"
                          alt="review image"
                        />
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2021</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-three">
                            <li>
                              <span className="av-rate">4.5</span>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="review">
                      <div className="thumb">
                        <img
                          src="assets/images/listing/review-2.jpg"
                          alt="review image"
                        />
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2021</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-three">
                            <li>
                              <span className="av-rate">4.5</span>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="review">
                      <div className="thumb">
                        <img
                          src="assets/images/listing/review-3.jpg"
                          alt="review image"
                        />
                      </div>
                      <div className="review-content">
                        <h5>Moriana Steve</h5>
                        <span className="date">Sep 02, 2021</span>
                        <p>
                          Musutrum orci montes hac at neque mollis taciti
                          parturient vehicula interdum verra cubilia ipsum duis
                          amet nullam sit ut ornare mattis urna.{" "}
                        </p>
                        <div className="content-meta d-flex align-items-center justify-content-between">
                          <ul className="ratings ratings-three">
                            <li>
                              <span className="av-rate">4.5</span>
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                            <li className="star">
                              <i className="flaticon-star-1" />
                            </li>
                          </ul>
                          <a href="#" className="reply">
                            <i className="ti-share-alt" />
                            Reply
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="listing-review-form mb-30 wow fadeInUp">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="title">Write a Review</h4>
                    </div>
                    <div className="col-md-6">
                      <div className="form-rating">
                        <ul className="ratings">
                          <li>
                            <span>Rate Here:</span>
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                          <li className="star">
                            <i className="flaticon-star-1" />
                          </li>
                        </ul>
                        <span>(02 Reviews)</span>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form_group">
                          <textarea
                            className="form_control"
                            placeholder="Write Message"
                            name="message"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="text"
                            className="form_control"
                            placeholder="Your name"
                            name="name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form_group">
                          <input
                            type="email"
                            className="form_control"
                            placeholder="Email here"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <div className="single-checkbox d-flex">
                            <input
                              type="checkbox"
                              id="check4"
                              name="checkbox"
                            />
                            <label htmlFor="check4">
                              <span>
                                Save my name, email, and website in this browser
                                for the next time i comment.
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form_group">
                          <button className="main-btn icon-btn">
                            Submit Review
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="releted-listing-area wow fadeInUp">
                <h3 className="title mb-20">Similar Restaurant</h3>
                <Slider
                  {...reletedListingSlider2}
                  className="releted-listing-slider-one"
                >
                  <div className="listing-item listing-grid-item-two">
                    <div className="listing-thumbnail">
                      <img
                        src="assets/images/listing/listing-grid-7.jpg"
                        alt="Listing Image"
                      />
                      <a href="#" className="cat-btn">
                        <i className="flaticon-chef" />
                      </a>
                      <span className="featured-btn">Featured</span>
                      <ul className="ratings ratings-four">
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li>
                          <span>
                            <a href="#">(02 Reviews)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="listing-content">
                      <h3 className="title">
                        <Link href="/listing-details-1">
                          <a>Pizza Recipe</a>
                        </Link>
                      </h3>
                      <p>Popular restaurant in california</p>
                      <span className="phone-meta">
                        <i className="ti-tablet" />
                        <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                        <span className="status st-open">Open</span>
                      </span>
                      <div className="listing-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-location-pin" />
                              California, USA
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-heart" />
                              <a href="#">Save</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item listing-grid-item-two">
                    <div className="listing-thumbnail">
                      <img
                        src="assets/images/listing/listing-grid-8.jpg"
                        alt="Listing Image"
                      />
                      <a href="#" className="cat-btn">
                        <i className="flaticon-dumbbell" />
                      </a>
                      <ul className="ratings ratings-three">
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li>
                          <span>
                            <a href="#">(02 Reviews)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="listing-content">
                      <h3 className="title">
                        <Link href="/listing-details-1">
                          <a>Gym Ground</a>
                        </Link>
                      </h3>
                      <p>Popular restaurant in california</p>
                      <span className="phone-meta">
                        <i className="ti-tablet" />
                        <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                        <span className="status st-close">close</span>
                      </span>
                      <div className="listing-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-location-pin" />
                              California, USA
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-heart" />
                              <a href="#">Save</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="listing-item listing-grid-item-two">
                    <div className="listing-thumbnail">
                      <img
                        src="assets/images/listing/listing-grid-9.jpg"
                        alt="Listing Image"
                      />
                      <a href="#" className="cat-btn">
                        <i className="flaticon-government" />
                      </a>
                      <span className="featured-btn">Featured</span>
                      <ul className="ratings ratings-five">
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li className="star">
                          <i className="flaticon-star-1" />
                        </li>
                        <li>
                          <span>
                            <a href="#">(02 Reviews)</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="listing-content">
                      <h3 className="title">
                        <Link href="/listing-details-1">
                          <a>City Palace</a>
                        </Link>
                      </h3>
                      <p>Popular restaurant in california</p>
                      <span className="phone-meta">
                        <i className="ti-tablet" />
                        <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                        <span className="status st-open">Open</span>
                      </span>
                      <div className="listing-meta">
                        <ul>
                          <li>
                            <span>
                              <i className="ti-location-pin" />
                              California, USA
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="ti-heart" />
                              <a href="#">Save</a>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>

            <ListingDetailsRight />
          </div>
        </div>
      </section>
      {/*====== End Listing Details Section ======*/}
    </Layout>
  );
};
export default ListingDetails2;
