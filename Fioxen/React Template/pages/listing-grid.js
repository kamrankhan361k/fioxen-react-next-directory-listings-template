import Link from "next/link";
import React from "react";
import PageBanner from "../src/components/PageBanner";
import RangeSlider from "../src/components/RangeSlider";
import Layout from "../src/layouts/Layout";

const ListingGrid = () => {
  return (
    <Layout>
      <PageBanner title={"Listing Grid"} pageName={"Listing"} />
      <section className="listing-grid-area pt-120 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="sidebar-widget-area">
                <div className="widget search-listing-widget mb-30 wow fadeInUp">
                  <h4 className="widget-title">Filter Search</h4>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="search-form">
                      <div className="form_group">
                        <input
                          type="search"
                          className="form_control"
                          placeholder="Search keyword"
                          name="search"
                          required=""
                        />
                        <i className="ti-search" />
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected="Category">
                            Category
                          </option>
                          <option value={1}>Museums</option>
                          <option value={2}>Restaurant</option>
                          <option value={3}>Party Center</option>
                          <option value={4}>Fitness Zone</option>
                          <option value={5}>Game Field</option>
                          <option value={6}>Job &amp; Feeds</option>
                          <option value={7}>Shooping</option>
                          <option value={8}>Art Gallery</option>
                        </select>
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected="Location">
                            Location
                          </option>
                          <option value={1}>Dhaka</option>
                          <option value={2}>Delhi</option>
                          <option value={3}>lahore</option>
                          <option value={4}>Rome</option>
                          <option value={5}>New york</option>
                          <option value={6}>Pris</option>
                          <option value={7}>Bern</option>
                          <option value={8}>Bangkok</option>
                        </select>
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected="By Country">
                            By Country
                          </option>
                          <option value={1}>Bangladesh</option>
                          <option value={2}>India</option>
                          <option value={3}>Pakistan</option>
                          <option value={4}>Italy</option>
                          <option value={5}>America</option>
                          <option value={6}>London</option>
                          <option value={7}>Swizerland</option>
                          <option value={8}>Thailand</option>
                        </select>
                      </div>
                      <div className="form_group">
                        <select className="wide">
                          <option disabled selected="By place">
                            By place
                          </option>
                          <option value={1}>Dhaka</option>
                          <option value={2}>Delhi</option>
                          <option value={3}>lahore</option>
                          <option value={4}>Rome</option>
                          <option value={5}>New york</option>
                          <option value={6}>Pris</option>
                          <option value={7}>Bern</option>
                          <option value={8}>Bangkok</option>
                        </select>
                      </div>
                    </div>
                    <div className="price-range-widget">
                      <h4 className="widget-title">Around Distance: 50 km</h4>
                      <RangeSlider />

                      <select className="wide">
                        <option disabled selected="Default price">
                          Default price
                        </option>
                        <option value={1}>$10-$30</option>
                        <option value={2}>$30-$70</option>
                        <option value={3}>$70-$100</option>
                        <option value={4}>$100-$130</option>
                        <option value={5}>$130-$150</option>
                      </select>
                    </div>
                    <div className="form_group">
                      <button className="main-btn icon-btn">Search Now</button>
                    </div>
                  </form>
                </div>
                <div className="widget newsletter-widget mb-30 wow fadeInUp">
                  <div
                    className="newsletter-widget-wrap bg_cover"
                    style={{
                      backgroundImage:
                        "url(assets/images/newsletter-widget-1.jpg)",
                    }}
                  >
                    <i className="flaticon-email-1" />
                    <h3>Subscribe Our Newsletter</h3>
                    <button className="main-btn icon-btn">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="listing-search-filter mb-40">
                <div className="row">
                  <div className="col-md-8">
                    <div className="filter-left d-flex align-items-center">
                      <div className="show-text">
                        <span>Showing Result 1-09</span>
                      </div>
                      <div className="sorting-dropdown">
                        <select>
                          <option disabled selected="Default Sorting">
                            Default Sorting
                          </option>
                          <option value={1}>Museums</option>
                          <option value={2}>Restaurant</option>
                          <option value={3}>Party Center</option>
                          <option value={4}>Fitness Zone</option>
                          <option value={5}>Game Field</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="filter-right">
                      <ul className="filter-nav">
                        <li>
                          <Link href="/listing-grid">
                            <a className="active">
                              <i className="ti-view-grid" />
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/listing-list">
                            <a>
                              <i className="ti-view-list-alt" />
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="listing-grid-wrapper">
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-16.jpg"
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
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-17.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
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
                            <a>Party Corner</a>
                          </Link>
                        </h3>
                        <p>Popular restaurant in california</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          <span className="status st-close">Close</span>
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
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-18.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
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
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-19.jpg"
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
                            <a>Easter Plaza</a>
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
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-20.jpg"
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
                            <a>Gym Ground</a>
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
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-21.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
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
                            <a>Miyami Sea</a>
                          </Link>
                        </h3>
                        <p>Popular restaurant in california</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          <span className="status st-close">Close</span>
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
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-22.jpg"
                          alt="Listing Image"
                        />
                        <a href="#" className="cat-btn">
                          <i className="flaticon-chef" />
                        </a>
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
                            <a>Gym Ground</a>
                          </Link>
                        </h3>
                        <p>Popular restaurant in california</p>
                        <span className="phone-meta">
                          <i className="ti-tablet" />
                          <a href="tel:+982653652-05">+98 (265) 3652 - 05</a>
                          <span className="status st-close">Close</span>
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
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="listing-item listing-grid-item-two mb-30 wow fadeInUp">
                      <div className="listing-thumbnail">
                        <img
                          src="assets/images/listing/listing-grid-23.jpg"
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
                            <a>Coffee Time</a>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ListingGrid;
