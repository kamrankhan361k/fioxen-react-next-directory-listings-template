import Link from "next/link";
import React, { useState } from "react";
import PageBanner from "../src/components/PageBanner";
import VideoPopup from "../src/components/VideoPopup";
import Layout from "../src/layouts/Layout";

const HowWork = () => {
  const [video, setVideo] = useState(false);
  return (
    <Layout>
      {video && <VideoPopup close={setVideo} />}
      <PageBanner title={"Working Process"} />

      {/*====== Start Intro Section ======*/}
      <section className="intro-area pt-115">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60 wow fadeInUp">
                <span className="sub-title">Working Process</span>
                <h2>How Listing Works</h2>
              </div>
            </div>
          </div>
          <div
            className="intro-wrppaer-two bg_cover wow fadeInDown"
            style={{ backgroundImage: "url(assets/images/bg/video-bg-2.jpg)" }}
          >
            <div className="intro-content-box-one">
              <div className="play-content text-center">
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
          </div>
        </div>
      </section>
      {/*====== End Intro Section ======*/}
      {/*====== Start Work-process Section ======*/}
      <section className="work-process-area pt-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="work-process-wrapper">
                <div className="row single-process-step align-items-center">
                  <div className="col-lg-6">
                    <div className="process-content-box wow fadeInLeft">
                      <div className="step-count">01.</div>
                      <div className="content">
                        <span className="line" />
                        <h3 className="title">
                          Choose
                          <br />A Category
                        </h3>
                        <p>
                          Be seed saying our sign beginning face give spirit own
                          beast and a darkness morning moveth green multipl she
                          doin kind saying one shall, two which darkness have
                          day image god their night his feed subdue so you rule
                          can.
                        </p>
                        <Link href="/listing-grid">
                          <a className="btn-link icon-btn">Explore List</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="process-img wow fadeInRight">
                      <img
                        src="assets/images/elements/step-1.jpg"
                        alt="process Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="row single-process-step align-items-center">
                  <div className="col-lg-6">
                    <div className="process-content-box wow fadeInRight">
                      <div className="step-count">02.</div>
                      <div className="content">
                        <span className="line" />
                        <h3 className="title">
                          Select
                          <br />
                          Amazing Place
                        </h3>
                        <p>
                          Be seed saying our sign beginning face give spirit own
                          beast and a darkness morning moveth green multipl she
                          doin kind saying one shall, two which darkness have
                          day image god their night his feed subdue so you rule
                          can.
                        </p>
                        <Link href="/listing-grid">
                          <a className="btn-link icon-btn">Explore List</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="process-img wow fadeInLeft">
                      <img
                        src="assets/images/elements/step-2.jpg"
                        alt="process Image"
                      />
                    </div>
                  </div>
                </div>
                <div className="row single-process-step align-items-center">
                  <div className="col-lg-6">
                    <div className="process-content-box wow fadeInLeft">
                      <div className="step-count">03.</div>
                      <div className="content">
                        <span className="line" />
                        <h3 className="title">
                          Explore
                          <br />
                          Selected Place
                        </h3>
                        <p>
                          Be seed saying our sign beginning face give spirit own
                          beast and a darkness morning moveth green multipl she
                          doin kind saying one shall, two which darkness have
                          day image god their night his feed subdue so you rule
                          can.
                        </p>
                        <Link href="/listing-grid">
                          <a className="btn-link icon-btn">Explore List</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="process-img wow fadeInRight">
                      <img
                        src="assets/images/elements/step-3.jpg"
                        alt="process Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Work-process Section ======*/}
    </Layout>
  );
};
export default HowWork;
