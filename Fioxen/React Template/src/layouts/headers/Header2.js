import Link from "next/link";
import React from "react";
import { About, Blog, Contact, Home, Listing, Pages } from "../Menu";

const Header2 = () => {
  return (
    <header className="header-area header-area-two d-none d-xl-block">
      <div className="header-navigation">
        <div className="container-fluid">
          <div className="primary-menu">
            <div className="row align-items-center">
              <div className="col-lg-2 col-5">
                <div className="site-branding">
                  <Link href="/">
                    <a className="brand-logo">
                      <img
                        src="assets/images/logo/logo-2.png"
                        alt="Brand Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 col-2">
                <div className="nav-menu">
                  <div className="navbar-close">
                    <i className="ti-close"></i>
                  </div>
                  <nav className="main-menu">
                    <ul>
                      <li className="menu-item has-children">
                        <Link href="/">
                          <a>Home</a>
                        </Link>
                        <ul className="sub-menu">
                          <Home />
                        </ul>
                        <span className="dd-trigger">
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <About />
                      <li className="menu-item has-children">
                        <a href="#">Listings</a>
                        <ul className="sub-menu">
                          <Listing />
                        </ul>
                        <span className="dd-trigger">
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                          <Pages />
                        </ul>
                        <span className="dd-trigger">
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <li className="menu-item has-children">
                        <a href="#">Article</a>
                        <ul className="sub-menu">
                          <Blog />
                        </ul>
                        <span className="dd-trigger">
                          <i className="ti-arrow-down"></i>
                        </span>
                      </li>
                      <Contact />
                      <li className="nav-btn">
                        <Link href="/add-listing">
                          <a className="main-btn icon-btn">Add Listing</a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-lg-4 col-5">
                <div className="header-right-nav">
                  <ul className="d-flex align-items-center">
                    <li>
                      <Link href="/">
                        <a>
                          <i className="ti-heart"></i>
                          <span>Wishlist</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <i className="ti-shopping-cart"></i>
                          <span>Cart</span>
                        </a>
                      </Link>
                    </li>
                    <li className="user-btn">
                      <Link href="/">
                        <a className="icon">
                          <i className="flaticon-avatar"></i>
                        </a>
                      </Link>
                    </li>
                    <li className="hero-nav-btn">
                      <Link href="/add-listing">
                        <a className="main-btn icon-btn">Add Listing</a>
                      </Link>
                    </li>
                    <li className="nav-toggle-btn">
                      <div className="navbar-toggler">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header2;
