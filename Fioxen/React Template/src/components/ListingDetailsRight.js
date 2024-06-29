import React from "react";

const ListingDetailsRight = () => {
  return (
    <div className="col-lg-4">
      <div className="sidebar-widget-area">
        <div className="widget reservation-form-widget mb-30 wow fadeInUp">
          <h4 className="widget-title">Reservation</h4>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form_group">
              <input
                type="text"
                className="form_control"
                placeholder="Name"
                name="name"
                required=""
              />
              <i className="ti-user" />
            </div>
            <div className="form_group">
              <input
                type="text"
                className="form_control"
                placeholder="Phone"
                name="phone"
                required=""
              />
              <i className="ti-mobile" />
            </div>
            <div className="form_group">
              <select className="wide">
                <option disabled selected>
                  Guest
                </option>
                <option data-display={1}>Guest 01</option>
                <option data-display={2}>Guest 02</option>
                <option data-display={2}>Guest 02</option>
                <option data-display={2}>Guest 02</option>
              </select>
            </div>
            <div className="form_group">
              <select>
                <option disabled selected>
                  Date
                </option>
                <option data-display={1}>01.11.2021</option>
                <option data-display={2}>01.11.2021</option>
                <option data-display={3}>01.11.2021</option>
                <option data-display={4}>01.11.2021</option>
              </select>
            </div>
            <div className="form_group">
              <select className="wide">
                <option disabled selected>
                  Time
                </option>
                <option data-display={1}>08.00AM-10.00AM</option>
                <option data-display={2}>11.00AM-12.00PM</option>
                <option data-display={3}>01.00PM-02.00PM</option>
                <option data-display={4}>02.00PM-03.00PM</option>
              </select>
            </div>
            <div className="form_group">
              <button className="main-btn icon-btn">Book Now</button>
            </div>
          </form>
        </div>
        <div className="widget contact-info-widget mb-30 wow fadeInUp">
          <div className="contact-info-widget-wrap">
            <div className="contact-map">
              <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
              <a href="#" className="support-icon">
                <i className="flaticon-headphone" />
              </a>
            </div>
            <div className="contact-info-content">
              <h4 className="widget-title">Contact Info</h4>
              <div className="info-list">
                <p>
                  <i className="ti-tablet" />
                  <a href="tel:+98265365205">+98 (265) 3652 - 05</a>
                </p>
                <p>
                  <i className="ti-location-pin" />
                  45/A Natura, Barcelona, Spain
                </p>
                <p>
                  <i className="ti-email" />
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </p>
                <p>
                  <i className="ti-world" />
                  <a href="www.fioxen.com">www.fioxen.com</a>
                </p>
              </div>
              <ul className="social-link">
                <li>
                  <a href="#">
                    <i className="ti-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-twitter-alt" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="widget business-hour-widget mb-30 wow fadeInUp">
          <h4 className="widget-title">Business Hour</h4>
          <ul className="time-info">
            <li>
              <span className="day">Monday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Tuesday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Wednesday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Thursday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Friday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Saturday</span>
              <span className="time">08:00 - 21:00</span>
            </li>
            <li>
              <span className="day">Sunday</span>
              <span className="time st-close">Close</span>
            </li>
          </ul>
        </div>
        <div className="widget newsletter-widget mb-30 wow fadeInUp">
          <div
            className="newsletter-widget-wrap bg_cover"
            style={{
              backgroundImage: "url(assets/images/newsletter-widget-1.jpg)",
            }}
          >
            <i className="flaticon-email-1" />
            <h3>Subscribe Our Newsletter</h3>
            <button className="main-btn icon-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListingDetailsRight;
