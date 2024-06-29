import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import TestimoinalSlider from "../src/components/Slider/TestimonialSlider";
import Layout from "../src/layouts/Layout";
import { ListingSlider2 } from "../src/sliderProps";

const Index2 = () => {
  return (
    <Layout header={2}>
      {/*====== Start Hero Section ======*/}
      <section className="hero-area">
        <div
          className="hero-wrapper-two bg_cover"
          style={{ backgroundImage: "url(assets/images/hero/hero-bg-2.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="hero-content">
                  <h1 className="wow fadeInUp" data-wow-delay="30ms">
                    Experience The Wonder
                  </h1>
                  <h3 className="wow fadeInDown" data-wow-delay="50ms">
                    People Don’t Take,Trips Take People
                  </h3>
                  <div
                    className="hero-search-wrapper wow fadeInUp"
                    data-wow-delay="70ms"
                  >
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                          <div className="form_group">
                            <input
                              type="search"
                              className="form_control"
                              placeholder="Search By Category"
                              name="search"
                              required=""
                            />
                            <i className="ti-ink-pen" />
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="form_group">
                            <select className="wide">
                              <option value="01">Museums</option>
                              <option value="02">Restaurant</option>
                              <option value="03">Party Center</option>
                              <option value="04">Fitness Zone</option>
                              <option value="05">Game Field</option>
                              <option value="06">Job &amp; Feeds</option>
                              <option value="07">Shooping</option>
                              <option value="08">Art Gallery</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                          <div className="form_group">
                            <input
                              type="text"
                              className="form_control"
                              placeholder="Location"
                              name="location"
                              required=""
                            />
                            <i className="ti-location-pin" />
                          </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12">
                          <div className="form_group">
                            <button className="main-btn icon-btn">
                              Search Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <p className="tags">
                    <span>Popular:</span>
                    <a href="#">Saloon</a>,<a href="#">Restaurant</a>,
                    <a href="#">Game</a>,<a href="#">Counter</a>,
                    <a href="#">Train Station</a>,<a href="#">Parking</a>,
                    <a href="#">Shooping</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start category Section ======*/}
      <section className="category-area pt-110 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-two text-center mb-60 wow fadeInUp">
                <h2>
                  <span className="line">Destination</span> Category
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-25 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/category/cat-1.jpg"
                    alt="Category Image"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <Link href="/index-2">
                        <a>
                          <i className="ti-link" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-government" />
                  </div>
                  <h3 className="title">
                    <a href="#">Museums</a>
                  </h3>
                  <span className="listing">15 Listing</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-25 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/category/cat-2.jpg"
                    alt="Category Image"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <Link href="/index-2">
                        <a>
                          <i className="ti-link" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-serving-dish" />
                  </div>
                  <h3 className="title">
                    <a href="#">Restaurant</a>
                  </h3>
                  <span className="listing">15 Listing</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-25 wow fadeInUp"
                data-wow-delay=".30s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/category/cat-3.jpg"
                    alt="Category Image"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <Link href="/index-2">
                        <a>
                          <i className="ti-link" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-gift-box" />
                  </div>
                  <h3 className="title">
                    <a href="#">Party Center</a>
                  </h3>
                  <span className="listing">15 Listing</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-25 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/category/cat-4.jpg"
                    alt="Category Image"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <Link href="/index-2">
                        <a>
                          <i className="ti-link" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-dumbbell" />
                  </div>
                  <h3 className="title">
                    <a href="#">Fitness Zone</a>
                  </h3>
                  <span className="listing">15 Listing</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-25 wow fadeInUp"
                data-wow-delay=".40s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/category/cat-5.jpg"
                    alt="Category Image"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <Link href="/index-2">
                        <a>
                          <i className="ti-link" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-game-controller" />
                  </div>
                  <h3 className="title">
                    <a href="#">Game Field</a>
                  </h3>
                  <span className="listing">15 Listing</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-25 wow fadeInUp"
                data-wow-delay=".45s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/category/cat-6.jpg"
                    alt="Category Image"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <Link href="/index-2">
                        <a>
                          <i className="ti-link" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-suitcase" />
                  </div>
                  <h3 className="title">
                    <a href="#">Job &amp; Feeds</a>
                  </h3>
                  <span className="listing">15 Listing</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-25 wow fadeInUp"
                data-wow-delay=".50s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/category/cat-7.jpg"
                    alt="Category Image"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <Link href="/index-2">
                        <a>
                          <i className="ti-link" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-shopping" />
                  </div>
                  <h3 className="title">
                    <a href="#">Shooping</a>
                  </h3>
                  <span className="listing">15 Listing</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div
                className="category-item category-item-two mb-25 wow fadeInUp"
                data-wow-delay=".55s"
              >
                <div className="category-img">
                  <img
                    src="assets/images/category/cat-8.jpg"
                    alt="Category Image"
                  />
                  <div className="category-overlay">
                    <div className="category-content">
                      <Link href="/index-2">
                        <a>
                          <i className="ti-link" />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="info">
                  <div className="icon">
                    <i className="flaticon-color-palette" />
                  </div>
                  <h3 className="title">
                    <a href="#">Art Gallery</a>
                  </h3>
                  <span className="listing">15 Listing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End category Section ======*/}
      {/*====== Start Newsletter Section ======*/}
      <section className="newsletter-area">
        <div
          className="newsletter-wrapper newsletter-wrapper-two bg_cover pt-75"
          style={{
            backgroundImage: "url(assets/images/bg/newsletter-bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="newsletter-content-box-one wow fadeInLeft">
                  <div className="icon">
                    <i className="flaticon-email" />
                  </div>
                  <div className="content">
                    <h2>Get Special Rewards</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="newsletter-form wow fadeInRight">
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Enter Address"
                      name="email"
                      required=""
                    />
                    <i className="ti-location-pin" />
                    <button className="main-btn icon-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Newsletter Section ======*/}
      {/*====== Start Listing-list Section ======*/}
      <section className="listing-list-area pt-110 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-two text-center mb-60 wow fadeInUp">
                <h2>
                  <span className="line">Popular</span> Listings
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div
                className="listing-item listing-list-item-one mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-list-1.jpg"
                    alt="listing image"
                  />
                  <a href="#" className="cat-btn">
                    <i className="flaticon-chef" />
                  </a>
                  <span className="status st-open">open</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Food House</a>
                    </Link>
                  </h3>
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
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
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
                          <a href="#" tabIndex={0}>
                            Save
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="listing-item listing-list-item-one mb-30 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-list-2.jpg"
                    alt="listing image"
                  />
                  <a href="#" className="cat-btn">
                    <i className="flaticon-museum" />
                  </a>
                  <span className="status st-close">Close</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>State Museum</a>
                    </Link>
                  </h3>
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
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
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
                          <a href="#" tabIndex={0}>
                            Save
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="listing-item listing-list-item-one mb-30 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-list-3.jpg"
                    alt="listing image"
                  />
                  <a href="#" className="cat-btn">
                    <i className="flaticon-balloons" />
                  </a>
                  <span className="status st-open">open</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Party Center</a>
                    </Link>
                  </h3>
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
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
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
                          <a href="#" tabIndex={0}>
                            Save
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="listing-item listing-list-item-one mb-30 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="listing-thumbnail">
                  <img
                    src="assets/images/listing/listing-list-4.jpg"
                    alt="listing image"
                  />
                  <a href="#" className="cat-btn">
                    <i className="flaticon-game-controller" />
                  </a>
                  <span className="status st-open">open</span>
                </div>
                <div className="listing-content">
                  <h3 className="title">
                    <Link href="/listing-details-1">
                      <a>Gaming Place</a>
                    </Link>
                  </h3>
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
                  <span className="phone-meta">
                    <i className="ti-tablet" />
                    <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
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
                          <a href="#" tabIndex={0}>
                            Save
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Listing-list Section ======*/}
      {/*====== Start offer Section ======*/}
      <section className="cta-area">
        <div
          className="cta-wrapper-two bg_cover"
          style={{ backgroundImage: "url(assets/images/bg/cta-bg-2.jpg)" }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div className="company-name wow fadeInLeft">Fioxen</div>
              </div>
              <div className="col-lg-5">
                <div className="cta-content-box fadeInRight">
                  <h2>Visit the Best Places</h2>
                  <p>
                    Pharetra venenatis ante pulvinar fermentum dignissim one
                    malesuada laoreet ridiculus fringilla quam
                  </p>
                  <Link href="/listing-grid">
                    <a className="main-btn icon-btn">Explore Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End offer Section ======*/}
      {/*====== Start Place Section ======*/}
      <section className="place-area pt-110 pb-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-two text-center mb-55 wow fadeInUp">
                <h2>
                  <span className="line">Featured</span> Places
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="place-item place-item-two mb-30 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-5.jpg"
                    alt="place Image"
                  />
                  <div className="place-overlay">
                    <div className="place-content d-flex align-items-center">
                      <div className="info">
                        <span className="span">Spain</span>
                        <h4>Barcelona</h4>
                      </div>
                      <div className="icon">
                        <span className="number">15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="place-item place-item-two mb-30 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-6.jpg"
                    alt="place Image"
                  />
                  <div className="place-overlay">
                    <div className="place-content d-flex align-items-center">
                      <div className="info">
                        <span className="span">Spain</span>
                        <h4>Barcelona</h4>
                      </div>
                      <div className="icon">
                        <span className="number">15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="place-item place-item-two mb-30 wow fadeInUp"
                data-wow-delay=".30s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-7.jpg"
                    alt="place Image"
                  />
                  <div className="place-overlay">
                    <div className="place-content d-flex align-items-center">
                      <div className="info">
                        <span className="span">Spain</span>
                        <h4>Barcelona</h4>
                      </div>
                      <div className="icon">
                        <span className="number">15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="place-item place-item-two mb-30 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-8.jpg"
                    alt="place Image"
                  />
                  <div className="place-overlay">
                    <div className="place-content d-flex align-items-center">
                      <div className="info">
                        <span className="span">Spain</span>
                        <h4>Barcelona</h4>
                      </div>
                      <div className="icon">
                        <span className="number">15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="place-item place-item-two mb-30 wow fadeInUp"
                data-wow-delay=".40s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-9.jpg"
                    alt="place Image"
                  />
                  <div className="place-overlay">
                    <div className="place-content d-flex align-items-center">
                      <div className="info">
                        <span className="span">Spain</span>
                        <h4>Barcelona</h4>
                      </div>
                      <div className="icon">
                        <span className="number">15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="place-item place-item-two mb-30 wow fadeInUp"
                data-wow-delay=".45s"
              >
                <div className="place-thumbnail">
                  <img
                    src="assets/images/place/place-10.jpg"
                    alt="place Image"
                  />
                  <div className="place-overlay">
                    <div className="place-content d-flex align-items-center">
                      <div className="info">
                        <span className="span">Spain</span>
                        <h4>Barcelona</h4>
                      </div>
                      <div className="icon">
                        <span className="number">15</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Place Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section
        className="testimonial-area bg_cover pt-110 pb-140"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-two section-title-white text-center mb-55 wow fadeInUp">
                <h2>
                  <span className="line">Customer</span> Feedack
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="testimonial-wrapper-one text-center wow fadeInUp">
                <div className="testimonial-review-area">
                  <TestimoinalSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Listing Section ======*/}
      <section className="listing-grid-area pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-two text-center mb-55 wow fadeInUp">
                <h2>
                  <span className="line">Latest</span> Destination
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...ListingSlider2}
          className="listing-slider-two wow fadeInDown"
        >
          <div className="listing-item listing-grid-item-two">
            <div className="listing-thumbnail">
              <img
                src="assets/images/listing/listing-grid-4.jpg"
                alt="Listing Image"
              />
              <a href="#" className="cat-btn">
                <i className="flaticon-chef" />
              </a>
              <span className="featured-btn">Featured</span>
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
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className="phone-meta">
                <i className="ti-tablet" />
                <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                <span className="status open">Open</span>
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
                src="assets/images/listing/listing-grid-5.jpg"
                alt="Listing Image"
              />
              <a href="#" className="cat-btn">
                <i className="flaticon-chef" />
              </a>
              <span className="featured-btn">Featured</span>
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
                <Link href="/listing-details-6">
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className="phone-meta">
                <i className="ti-tablet" />
                <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                <span className="status open">Open</span>
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
                src="assets/images/listing/listing-grid-7.jpg"
                alt="Listing Image"
              />
              <a href="#" className="cat-btn">
                <i className="flaticon-chef" />
              </a>
              <span className="featured-btn">Featured</span>
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
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className="phone-meta">
                <i className="ti-tablet" />
                <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                <span className="status open">Open</span>
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
                <i className="flaticon-chef" />
              </a>
              <span className="featured-btn">Featured</span>
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
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className="phone-meta">
                <i className="ti-tablet" />
                <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                <span className="status open">Open</span>
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
                <i className="flaticon-chef" />
              </a>
              <span className="featured-btn">Featured</span>
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
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className="phone-meta">
                <i className="ti-tablet" />
                <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                <span className="status open">Open</span>
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
                src="assets/images/listing/listing-grid-7.jpg"
                alt="Listing Image"
              />
              <a href="#" className="cat-btn">
                <i className="flaticon-chef" />
              </a>
              <span className="featured-btn">Featured</span>
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
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className="phone-meta">
                <i className="ti-tablet" />
                <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                <span className="status open">Open</span>
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
                <i className="flaticon-chef" />
              </a>
              <span className="featured-btn">Featured</span>
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
                  <a>Pizza Recipe</a>
                </Link>
              </h3>
              <p>Popular restaurant in california</p>
              <span className="phone-meta">
                <i className="ti-tablet" />
                <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                <span className="status open">Open</span>
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
      </section>
      {/*====== End Listing Section ======*/}
      {/*====== Start Pricing Section ======*/}
      <section className="pricing-area pt-70 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-two text-center mb-60 wow fadeInUp">
                <h2>
                  <span className="line">Affordable</span> Package
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing-item pricing-item-one text-center mb-40 wow fadeInUp">
                <div className="pricing-inner-time">
                  <div className="pricing-head">
                    <span className="title">General</span>
                    <h2 className="price">25.00</h2>
                  </div>
                  <div className="pricing-body">
                    <ul className="list">
                      <li>Construction Drawing</li>
                      <li>Floor &amp; celling plan</li>
                      <li>Selection of Material</li>
                      <li>Structure of a project</li>
                      <li>Always plan support</li>
                      <li>Visualization premise</li>
                    </ul>
                    <Link href="/pricing">
                      <a className="main-btn icon-btn">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing-item pricing-item-one text-center mb-40 wow fadeInDown">
                <div className="pricing-inner-time">
                  <div className="pricing-head">
                    <span className="title">General</span>
                    <h2 className="price">35.00</h2>
                  </div>
                  <div className="pricing-body">
                    <ul className="list">
                      <li>Construction Drawing</li>
                      <li>Floor &amp; celling plan</li>
                      <li>Selection of Material</li>
                      <li>Structure of a project</li>
                      <li>Always plan support</li>
                      <li>Visualization premise</li>
                    </ul>
                    <Link href="/pricing">
                      <a className="main-btn icon-btn">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing-item pricing-item-one text-center mb-40 wow fadeInUp">
                <div className="pricing-inner-time">
                  <div className="pricing-head">
                    <span className="title">General</span>
                    <h2 className="price">45.00</h2>
                  </div>
                  <div className="pricing-body">
                    <ul className="list">
                      <li>Construction Drawing</li>
                      <li>Floor &amp; celling plan</li>
                      <li>Selection of Material</li>
                      <li>Structure of a project</li>
                      <li>Always plan support</li>
                      <li>Visualization premise</li>
                    </ul>
                    <Link href="/pricing">
                      <a className="main-btn icon-btn">Get Started</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section
        className="blog-area pt-110 pb-80 bg_cover"
        style={{ backgroundImage: "url(assets/images/bg/blog-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-two text-center mb-60 wow fadeInUp">
                <h2>
                  <span className="line">Journal</span> Insights
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item blog-post-item-two mb-40 wow fadeInDown">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/blog-4.jpg" alt="Post Image" />
                </div>
                <div className="entry-content text-center">
                  <a href="#" className="cat-btn">
                    Tour &amp; Travel
                  </a>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <a href="#">22 Aug, 21</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a href="#">03 Comment</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Sociis sapie justo feugiat purus adipiscing</a>
                    </Link>
                  </h3>
                  <a href="#" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-40">
              <div className="blog-post-item blog-post-item-two wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/blog-5.jpg" alt="Post Image" />
                </div>
                <div className="entry-content text-center">
                  <a href="#" className="cat-btn">
                    Gym &amp; Fitness
                  </a>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <a href="#">22 Aug, 21</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a href="#">03 Comment</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Sociis sapie justo feugiat purus adipiscing</a>
                    </Link>
                  </h3>
                  <a href="#" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item blog-post-item-two mb-40 wow fadeInDown">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/blog-6.jpg" alt="Post Image" />
                </div>
                <div className="entry-content text-center">
                  <a href="#" className="cat-btn">
                    Art &amp; Museum
                  </a>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <a href="#">22 Aug, 21</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <a href="#">03 Comment</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="title">
                    <Link href="/blog-details">
                      <a>Sociis sapie justo feugiat purus adipiscing</a>
                    </Link>
                  </h3>
                  <a href="#" className="btn-link">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
    </Layout>
  );
};
export default Index2;
