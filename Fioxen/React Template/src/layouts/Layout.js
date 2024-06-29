import React, { Fragment, useEffect } from "react";
import ImageView from "../components/ImageView";
import { activeNavMenu, animation, niceSelect, stickyNav } from "../utils";
import Footer from "./Footer";
import Header from "./headers/Header";
import MobileMenu from "./MobileMenu";
import ScrollTop from "./ScrollTop";

const Layout = ({ children, header }) => {
  useEffect(() => {
    animation();
    niceSelect();
    activeNavMenu();
    window.addEventListener("scroll", stickyNav);
  }, []);

  return (
    <Fragment>
      <ImageView />
      <MobileMenu />
      <Header header={header} />
      {children} <Footer />
      <ScrollTop />
    </Fragment>
  );
};
export default Layout;
