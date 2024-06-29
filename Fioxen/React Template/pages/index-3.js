import Link from "next/link";
import React, { useEffect } from "react";
import { Nav, Tab } from "react-bootstrap";
import TestimoinalSlider2 from "../src/components/Slider/TestimonialSlider2";
import Layout from "../src/layouts/Layout";

const Index3 = () => {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        const Isotope = require("isotope-layout");
        new Isotope(".masonry-place-row", {
          itemSelector: ".place-column",
          percentPosition: true,
          masonry: {
            columnWidth: ".place-column",
          },
        });
      }
    }, 1000);
  }, []);

  return (
    <Layout header={3}>
      {/*====== End Header Section ======*/}
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div
          className="hero-wrapper-three bg_cover"
          style={{
            backgroundImage: "url(assets/images/hero/hero-three-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content text-center">
                  <h1 className="wow fadeInUp" data-wow-delay=".30s">
                    Explore The Worlds
                  </h1>
                  <h3 className="wow fadeInDown" data-wow-delay=".50s">
                    People Don’t Take,Trips Take People
                  </h3>
                  <div
                    className="hero-search-wrapper wow fadeInUp"
                    data-wow-delay=".70s"
                  >
                    <Tab.Container defaultActiveKey={"flight"}>
                      <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row align-items-center">
                          <div className="col-lg-6">
                            <div className="search-nav mb-10">
                              <Nav as="ul" className="nav nav-tabs">
                                <Nav.Item>
                                  <Nav.Link
                                    as="a"
                                    className="c-pointer"
                                    eventKey="flight"
                                  >
                                    <i className="far fa-plane-departure" />
                                    Flight
                                  </Nav.Link>
                                </Nav.Item>
                                <li className="nav-item">
                                  <Nav.Link
                                    as="a"
                                    className="c-pointer"
                                    eventKey="hotels"
                                  >
                                    <i className="far fa-building" />
                                    Hotels
                                  </Nav.Link>
                                </li>
                                <li className="nav-item">
                                  <Nav.Link
                                    as="a"
                                    className="c-pointer"
                                    eventKey="rentcar"
                                  >
                                    <i className="far fa-car" />
                                    Rent a Car
                                  </Nav.Link>
                                </li>
                              </Nav>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <p className="tags mb-15">
                              <span>Popular:</span>
                              <a href="#">Saloon</a>,<a href="#">Restaurant</a>,
                              <a href="#">Game</a>,<a href="#">Counter</a>,
                              <a href="#">Train Station</a>,
                              <a href="#">Parking</a>,<a href="#">Shooping</a>
                            </p>
                          </div>
                        </div>
                        <div className="hero-search-form tab-content">
                          <Tab.Pane className="show active">
                            <div className="row">
                              <div className="col-lg-3 col-md-6">
                                <div className="form_group">
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Search By Category"
                                    name="search"
                                    required
                                  />
                                  <i className="ti-ink-pen"></i>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                <div className="form_group">
                                  <select className="wide">
                                    <option value="01">Museums</option>
                                    <option value="02">Restaurant</option>
                                    <option value="03">Party Center</option>
                                    <option value="04">Fitness Zone</option>
                                    <option value="05">Game Field</option>
                                    <option value="06">Job & Feeds</option>
                                    <option value="07">Shooping</option>
                                    <option value="08">Art Gallery</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                <div className="form_group">
                                  <input
                                    type="text"
                                    className="form_control"
                                    placeholder="Location"
                                    name="location"
                                    required
                                  />
                                  <i className="ti-location-pin"></i>
                                </div>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                <div className="form_group">
                                  <button className="main-btn icon-btn">
                                    Search Now
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Tab.Pane>
                        </div>
                      </form>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Place Section ======*/}
      <section className="place-area masonry-place-area light-bg pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Featured List</span>
                <h2>
                  <span className="line">Popular</span> Destination
                </h2>
              </div>
            </div>
          </div>
          <div className="row masonry-place-row">
            <div className="col-lg-4 col-md-6 col-sm-12 place-column">
              <div
                className="place-item place-item-three mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-11.jpg"
                    alt="place image"
                  />
                  <div className="place-overlay">
                    <div className="place-content">
                      <h4>Rialto Bridge</h4>
                      <ul className="ratings ratings-four">
                        <li>
                          <span>Venezia, Italy</span>
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-column">
              <div
                className="place-item place-item-three mb-30 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-12.jpg"
                    alt="place image"
                  />
                  <div className="place-overlay">
                    <div className="place-content">
                      <h4>Flatiron Building</h4>
                      <ul className="ratings ratings-four">
                        <li>
                          <span>Venezia, Italy</span>
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-column">
              <div
                className="place-item place-item-three mb-30 wow fadeInUp"
                data-wow-delay=".30s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-13.jpg"
                    alt="place image"
                  />
                  <div className="place-overlay">
                    <div className="place-content">
                      <h4>Grimentz, Switzerland</h4>
                      <ul className="ratings ratings-four">
                        <li>
                          <span>Venezia, Italy</span>
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-column">
              <div
                className="place-item place-item-three mb-30 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-14.jpg"
                    alt="place image"
                  />
                  <div className="place-overlay">
                    <div className="place-content">
                      <h4>Arc De Triomphe, Place</h4>
                      <ul className="ratings ratings-four">
                        <li>
                          <span>Venezia, Italy</span>
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 place-column">
              <div
                className="place-item place-item-three mb-30 wow fadeInUp"
                data-wow-delay=".40s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-15.jpg"
                    alt="place image"
                  />
                  <div className="place-overlay">
                    <div className="place-content">
                      <h4>Gili Trawangan, Indah</h4>
                      <ul className="ratings ratings-four">
                        <li>
                          <span>Venezia, Italy</span>
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                        <li className="star">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start category Section ======*/}
      <section className="category-area">
        <div
          className="category-wrapper-bg bg_cover pt-75 pb-50"
          style={{ backgroundImage: "url(assets/images/bg/catgory-bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="section-title section-title-white text-center mb-60 wow fadeInUp">
                  <span className="sub-title">What We Offer</span>
                  <h2>Popular Category</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="category-item category-item-three mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-government" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">
                        <a>Museums</a>
                      </Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="category-item category-item-three mb-30 wow fadeInDown">
                  <div className="icon">
                    <i className="flaticon-serving-dish" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">Restaurant</Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="category-item category-item-three mb-30 wow fadeInUp">
                  <div className="icon">
                    <i className="flaticon-game-controller" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">Game Field</Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="category-item category-item-three mb-30 wow fadeInDown"
                  data-wow-delay=".15s"
                >
                  <div className="icon">
                    <i className="flaticon-suitcase" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">Job &amp; Feed</Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="category-item category-item-three mb-30 wow fadeInUp"
                  data-wow-delay=".20s"
                >
                  <div className="icon">
                    <i className="flaticon-gift-box" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">Party Center</Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="category-item category-item-three mb-30 wow fadeInDown"
                  data-wow-delay=".25s"
                >
                  <div className="icon">
                    <i className="flaticon-dumbbell" />
                  </div>
                  <div className="info">
                    <h4 className="title">
                      <Link href="/listing-grid">Fitness Zone</Link>
                    </h4>
                    <p>Sed perspi ciaund natus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End category Section ======*/}
      {/*====== Start Listing Section ======*/}
      <section className="listing-grid-area light-bg pt-115 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Featured List</span>
                <h2>Explore Destination</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".15s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-10.jpg"
                    alt="listing image"
                  />
                  <a href="#" className="wishlist-btn">
                    <i className="ti-heart" />
                  </a>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Museum of Islamic Art,</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-1.jpg"
                      alt="city image"
                    />
                    Doha, Qatar
                  </span>
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
                  <span className="price">$05.00 - $80.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".20s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-11.jpg"
                    alt="listing image"
                  />
                  <span className="featured-btn">Featured</span>
                  <a href="#" className="wishlist-btn">
                    <i className="ti-heart" />
                  </a>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Museum of Islamic Art,</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-2.jpg"
                      alt="city image"
                    />
                    Venezia, Italy
                  </span>
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
                  <span className="price">$05.00 - $80.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-12.jpg"
                    alt="listing image"
                  />
                  <a href="#" className="wishlist-btn">
                    <i className="ti-heart" />
                  </a>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Museum of Islamic Art,</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-3.jpg"
                      alt="city image"
                    />
                    New York
                  </span>
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
                  <span className="price">$05.00 - $80.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".30s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-13.jpg"
                    alt="listing image"
                  />
                  <span className="featured-btn">Featured</span>
                  <a href="#" className="wishlist-btn">
                    <i className="ti-heart" />
                  </a>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Museum of Islamic Art,</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-2.jpg"
                      alt="city image"
                    />
                    Venezia, Italy
                  </span>
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
                  <span className="price">$05.00 - $80.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-14.jpg"
                    alt="listing image"
                  />
                  <a href="#" className="wishlist-btn">
                    <i className="ti-heart" />
                  </a>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Museum of Islamic Art,</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-1.jpg"
                      alt="city image"
                    />
                    Doha, Qatar
                  </span>
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
                  <span className="price">$05.00 - $80.00</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="listing-item listing-grid-item-three mb-30 wow fadeInUp"
                data-wow-delay=".40s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-grid-15.jpg"
                    alt="listing image"
                  />
                  <a href="#" className="wishlist-btn">
                    <i className="ti-heart" />
                  </a>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Museum of Islamic Art,</a>
                    </Link>
                  </h3>
                  <span className="city">
                    <img
                      src="assets/images/listing/thumb-3.jpg"
                      alt="city image"
                    />
                    New York
                  </span>
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
                  <span className="price">$05.00 - $80.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Listing Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-area">
        <div
          className="features-wrapper-two bg_cover pt-115 pb-80"
          style={{ backgroundImage: "url(assets/images/bg/features-bg-1.jpg)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title section-title-white text-center mb-50 wow fadeInUp">
                  <span className="sub-title">Working Process</span>
                  <h2>How Does We Works</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                    <i className="flaticon-map" />
                  </div>
                  <div className="content">
                    <h4>Find Your Places</h4>
                    <p>
                      Amet consectetur adipiscing elitsed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua suspe
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="features-item features-item-one mb-40 wow fadeInUp"
                  data-wow-delay="20ms"
                >
                  <div className="icon">
                    <i className="flaticon-star" />
                  </div>
                  <div className="content">
                    <h4>Customer Reviews</h4>
                    <p>
                      Amet consectetur adipiscing elitsed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua suspe
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="features-item features-item-one mb-40 wow fadeInDown">
                  <div className="icon">
                    <i className="flaticon-calendar" />
                  </div>
                  <div className="content">
                    <h4>Find Your Places</h4>
                    <p>
                      Amet consectetur adipiscing elitsed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua suspe
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start CTA Section ======*/}
      <div className="cta-area">
        <div
          className="cta-wrapper-three bg_cover pt-50 pb-50"
          style={{ backgroundImage: "url(assets/images/bg/cta-bg-3.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-9">
                <div className="cta-content-box wow fadeInLeft">
                  <h3>Splash Yourself Bigger Offer on Everyday</h3>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="button text-center wow fadeInRight">
                  <Link href="/listing-grid">
                    <a className="main-btn icon-btn">Explore Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*====== End CTA Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-area pt-120 pb-120">
        <div className="container">
          <div className="testimonial-wrapper-two">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <div
                  className="testimonial-bg bg_cover wow fadeInLeft"
                  style={{
                    backgroundImage:
                      "url(assets/images/testimonial/testimonial-img-1.jpg)",
                  }}
                />
              </div>
              <div className="col-lg-6">
                <div
                  className="testimonial-content-box bg_cover wow fadeInRight"
                  style={{
                    backgroundImage:
                      "url(assets/images/bg/testimonial-bg-3.jpg)",
                  }}
                >
                  <div className="section-title section-title-left mb-45">
                    <span className="sub-title">Customer Feedback</span>
                    <h2>Customer Say</h2>
                  </div>
                  <div className="testimonial-review-area">
                    <TestimoinalSlider2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Client Section ======*/}
      <section className="client-area">
        <div
          className="client-wrapper-two bg_cover pt-120 pb-70"
          style={{
            backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="client-content-box mb-50 wow fadeInLeft">
                  <div className="section-title section-title-left section-title-white mb-35">
                    <span className="sub-title">Premium Partners</span>
                    <h2>Glod Sponsors</h2>
                  </div>
                  <p>
                    Sed ut perspiciatis omnis iste natus error voluptatem
                    accusantium doloremque laudantiu totam rem aperiam eaque
                    quae abillo inventore veritatis quasi architectos beatae
                    vitae dicta sunt explicabo.
                  </p>
                  <Link href="/listing-grid">
                    <a className="main-btn icon-btn">Explore Now</a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="client-item-wrapper mb-50 wow fadeInRight">
                  <div className="client-item client-item-two">
                    <a href="#">
                      <img
                        src="assets/images/client/05.png"
                        alt="client image"
                      />
                    </a>
                  </div>
                  <div className="client-item client-item-two">
                    <a href="#">
                      <img
                        src="assets/images/client/06.png"
                        alt="client image"
                      />
                    </a>
                  </div>
                  <div className="client-item client-item-two">
                    <a href="#">
                      <img
                        src="assets/images/client/07.png"
                        alt="client image"
                      />
                    </a>
                  </div>
                  <div className="client-item client-item-two">
                    <a href="#">
                      <img
                        src="assets/images/client/08.png"
                        alt="client image"
                      />
                    </a>
                  </div>
                  <div className="client-item client-item-two">
                    <a href="#">
                      <img
                        src="assets/images/client/09.png"
                        alt="client image"
                      />
                    </a>
                  </div>
                  <div className="client-item client-item-two">
                    <a href="#">
                      <img
                        src="assets/images/client/10.png"
                        alt="client image"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Client Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-area pt-115 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Recent Articles</span>
                <h2>Every Single Journal</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item blog-post-item-three mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <Link href="/blog-details">
                    <a>
                      <img
                        src="assets/images/blog/blog-7.jpg"
                        alt="Blog Image"
                      />
                    </a>
                  </Link>
                  <div className="post-date">
                    <a href="#">
                      20 <span>Oct</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" />
                    Tours &amp; Travel
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Duis nonummy socios mattis tempus penatibus</a>
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-comments-smiley" />
                          <a href="#">0 Comment</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-id-badge" />
                          <a href="#">By admin</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="blog-post-item blog-post-item-three mb-40 wow fadeInDown"
                data-wow-delay="20ms"
              >
                <div className="post-thumbnail">
                  <Link href="/blog-details">
                    <a>
                      <img
                        src="assets/images/blog/blog-8.jpg"
                        alt="Blog Image"
                      />
                    </a>
                  </Link>
                  <div className="post-date">
                    <a href="#">
                      20 <span>Oct</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" />
                    Tours &amp; Travel
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Litora phasellus in phasellus curabitur porta eun</a>
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-comments-smiley" />
                          <a href="#">0 Comment</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-id-badge" />
                          <a href="#">By admin</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item blog-post-item-three mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <Link href="/blog-details">
                    <a>
                      <img
                        src="assets/images/blog/blog-9.jpg"
                        alt="Blog Image"
                      />
                    </a>
                  </Link>
                  <div className="post-date">
                    <a href="#">
                      20 <span>Oct</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" /> Tours &amp; Travel
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Mattis parturent tortor lectus lestie sapien Dapus</a>
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-comments-smiley" />
                          <a href="#">0 Comment</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-id-badge" />
                          <a href="#">By admin</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="button text-center mt-40 wow fadeInUp">
                <Link href="/blog">
                  <a className="main-btn icon-btn">View Blog</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
    </Layout>
  );
};
export default Index3;
