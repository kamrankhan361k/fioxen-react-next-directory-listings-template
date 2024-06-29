import Link from "next/link";
import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import ListingDetailsRight from "../src/components/ListingDetailsRight";
import Layout from "../src/layouts/Layout";

const ListingDetails1 = () => {
  const [accordionActive, setAccordionActive] = useState("collapseOne");
  const setAccordion = (value) => (value === accordionActive ? "" : value),
    activeAccortion = (value) => (value === accordionActive ? true : false);

  return (
    <Layout>
      {/*====== Start Breadcrumbs section ======*/}
      <section className="page-breadcrumbs page-breadcrumbs-one pt-120 pb-70">
        <div className="container">
          <div className="breadcrumbs-wrapper-one">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="listing-info-name">
                  <div className="info-name d-flex">
                    <div className="thumb">
                      <img
                        src="assets/images/listing/info-1.jpg"
                        alt="thumb image"
                      />
                    </div>
                    <div className="content">
                      <span className="cat-btn">Restaurant</span>
                      <h3>Food Corner</h3>
                      <p className="tag">
                        <a href="#">Popular restaurant</a>,
                        <a href="#">California</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="listing-info-content">
                  <div className="content">
                    <ul className="ratings ratings-three">
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <i className="flaticon-star-1" />
                      </li>
                      <li>
                        <span>
                          <a href="#">(02 Reviews)</a>
                        </span>
                      </li>
                    </ul>
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
                            <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
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
        </div>
      </section>
      {/*====== End Breadcrumbs section ======*/}
      {/*====== Start Listing Details section ======*/}
      <section className="listing-details-section pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="listing-details-wrapper listing-details-wrapper-one">
                <div className="listing-content mb-50 wow fadeInUp">
                  <h3 className="title">Delicious Restaurant</h3>
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
                  <p className="para">
                    Eros senectus etiam sed habitasse arcu habitant nulla nam
                    amet sociis leo suspendisse in dignissim litora venenatis
                    torquent tempor dapibus ridiculus consectetuer nece sagittis{" "}
                  </p>
                </div>
                <div className="listing-features-box mb-50 wow fadeInUp">
                  <h4 className="title">Our Features</h4>
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
                </div>
                <div className="listing-gallery-box wow fadeInUp">
                  <h4 className="title">Photo Showcase</h4>
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <div className="gallery-item mb-30">
                        <a
                          href="assets/images/listing/gallery-1.jpg"
                          className="img-popup"
                        >
                          <img
                            src="assets/images/listing/gallery-1.jpg"
                            alt="gallery image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="gallery-item mb-30">
                        <a
                          href="assets/images/listing/gallery-2.jpg"
                          className="img-popup"
                        >
                          <img
                            src="assets/images/listing/gallery-2.jpg"
                            alt="gallery image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="gallery-item mb-30">
                        <a
                          href="assets/images/listing/gallery-3.jpg"
                          className="img-popup"
                        >
                          <img
                            src="assets/images/listing/gallery-3.jpg"
                            alt="gallery image"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="gallery-item mb-30">
                        <a
                          href="assets/images/listing/gallery-4.jpg"
                          className="img-popup"
                        >
                          <img
                            src="assets/images/listing/gallery-4.jpg"
                            alt="gallery image"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="listing-tag-box mb-50 wow fadeInUp">
                  <h4 className="title">Popular Tag</h4>
                  <a href="#">Delivery</a>
                  <a href="#">Restaurant</a>
                  <a href="#">Free Internet</a>
                  <a href="#">Shopping</a>
                  <a href="#">Car Parking</a>
                  <a href="#">Food</a>
                  <a href="#">Kitchen</a>
                  <a href="#">Reservation</a>
                  <a href="#">Travel</a>
                </div>
                <div className="listing-faq-box mb-50 wow fadeInUp">
                  <h4 className="title">Asked Question</h4>
                  <Accordion
                    className="faq-accordian"
                    defaultActiveKey="collapseOne"
                  >
                    <div className="card">
                      <Accordion.Toggle
                        as="a"
                        className="card-header"
                        eventKey="collapseOne"
                        onClick={() => setAccordionActive("collapseOne")}
                        aria-expanded={activeAccortion("collapseOne")}
                      >
                        How do I Make a regular Table Booking?
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="collapseOne">
                        <div className="card-body">
                          <p>
                            Musutrum orci montes hac at neque mollis taciti
                            parturient vehicula interdum viverra cubilia ipsum
                            ut duis amet nullam sit ut ornare mattis urna.
                            Parturient. Aptent erat blandit dolor porta eros
                            mollis hendrerit leo viverra pellentesque fusce.
                          </p>
                        </div>
                      </Accordion.Collapse>
                    </div>
                    <div className="card">
                      <Accordion.Toggle
                        as="a"
                        className="card-header"
                        eventKey="collapseTwo"
                        onClick={() => setAccordionActive("collapseTwo")}
                        aria-expanded={activeAccortion("collapseTwo")}
                      >
                        {`How can I be certain my booking's been received?`}
                      </Accordion.Toggle>
                      <Accordion.Collapse
                        eventKey="collapseTwo"

                        // data-parent="#listingFaq"
                      >
                        <div className="card-body">
                          <p>
                            Musutrum orci montes hac at neque mollis taciti
                            parturient vehicula interdum viverra cubilia ipsum
                            ut duis amet nullam sit ut ornare mattis urna.
                            Parturient. Aptent erat blandit dolor porta eros
                            mollis hendrerit leo viverra pellentesque fusce.
                          </p>
                        </div>
                      </Accordion.Collapse>
                    </div>
                    <div className="card">
                      <Accordion.Toggle
                        as="a"
                        className="card-header"
                        eventKey="collapseThree"
                        onClick={() => setAccordionActive("collapseThree")}
                        aria-expanded={activeAccortion("collapseThree")}
                      >
                        How much do I have to pay for my booking?
                      </Accordion.Toggle>
                      <Accordion.Collapse
                        eventKey="collapseThree"

                        // data-parent="#listingFaq"
                      >
                        <div className="card-body">
                          <p>
                            Musutrum orci montes hac at neque mollis taciti
                            parturient vehicula interdum viverra cubilia ipsum
                            ut duis amet nullam sit ut ornare mattis urna.
                            Parturient. Aptent erat blandit dolor porta eros
                            mollis hendrerit leo viverra pellentesque fusce.
                          </p>
                        </div>
                      </Accordion.Collapse>
                    </div>
                    <div className="card">
                      <Accordion.Toggle
                        as="a"
                        className="card-header"
                        eventKey="collapseFour"
                        onClick={() => setAccordionActive("collapseFour")}
                        aria-expanded={activeAccortion("collapseFour")}
                      >
                        {` What happens restaurant and they don't have my booking?`}
                      </Accordion.Toggle>
                      <Accordion.Collapse
                        eventKey="collapseFour"

                        // data-parent="#listingFaq"
                      >
                        <div className="card-body">
                          <p>
                            Musutrum orci montes hac at neque mollis taciti
                            parturient vehicula interdum viverra cubilia ipsum
                            ut duis amet nullam sit ut ornare mattis urna.
                            Parturient. Aptent erat blandit dolor porta eros
                            mollis hendrerit leo viverra pellentesque fusce.
                          </p>
                        </div>
                      </Accordion.Collapse>
                    </div>
                  </Accordion>
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
            </div>
            <ListingDetailsRight />
          </div>
        </div>
      </section>
      {/*====== End Listing Details section ======*/}
    </Layout>
  );
};
export default ListingDetails1;
