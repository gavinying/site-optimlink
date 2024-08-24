import Link from "next/link";
import Image from "next/image";

import Header from "@/components/optimlink/Header";
import Hero from "@/components/optimlink/Hero";
import Partner from "@/components/optimlink/Partner";
import Services from "@/components/optimlink/Services";
import FancyBanner from "@/components/optimlink/FancyBanner";
import Faq from "@/components/optimlink/Faq";
import Footer from "@/components/optimlink/Footer";
import NewsLetter from "@/components/optimlink/NewsLetter";
import CopyrightFooter from "@/components/optimlink/CopyrightFooter";

export const metadata = {
  title: "Home | Optimlink",
};

const HomePage = () => {
  return (
    <>
      {/*
      =============================================
      Theme Header Menu
      ==============================================
      */}
      <Header />

      {/*
      =============================================
      Theme Hero Banner
      ==============================================
      */}
      <Hero />

      {/*
      =============================================
      Partner Section
      ==============================================
      */}
      <div className="partner-section-four position-relative pt-100 sm-pt-70">
        <div className="wrapper m-auto">
          <div className="partner_slider_one row">
            <Partner />
          </div>
        </div>
      </div>

      {/*
      =============================================
        Services Section
      ==============================================
      */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6" data-aos="fade-right">
              <div className="title-style-five mb-45 md-mb-10">
                <div className="sc-title-two fst-italic position-relative">
                  Our Services
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  Our Provided Services.
                </h2>
              </div>
            </div>
          </div>
          <div className="row gx-xxl-5">
            <Services />
          </div>
        </div>
        <Image
          src="/images/shape/shape_172.svg"
          alt="icon"
          className="lazy-img shapes shape-two"
        />
      </div>

      {/*
      =============================================
      Feature Section
      ==============================================
      */}
      <FancyBanner />

      {/*
      =============================================
      FAQ Section
      ==============================================
      */}
      <div className="fancy-feature-twentyFive mt-170 lg-mt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9 m-auto" data-aos="fade-up">
              <div
                className="title-style-seven text-center pb-120 lg-pb-50"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-bold tx-dark">
                  Got questions? <br /> Well, we&lsquo;ve got&nbsp;
                  <span className="position-relative d-inline-block">
                    answers <Image src="/images/shape/shape_99.svg" alt="" />
                  </span>
                </h2>
              </div>
            </div>
            <div className="col-xl-9 col-lg-10 m-auto " data-aos="fade-up">
              <Faq />
              <div className="text-center  mt-80 lg-mt-50">
                <h3 className="fw-bold tx-dark mb-30">
                  Didn’t get your answer?
                </h3>
                <Link href="/contact" className="btn-fourteen fw-500 tran3s">
                  Submit your question
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
      =====================================================
      Footer
      =====================================================
      */}
      <div className="footer-style-seven p-30 theme-basic-footer">
        <div className="bg-wrapper position-relative">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-2 footer-intro mb-40">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo/optimlink_logo_text_vertical_160x160.png"
                      alt="brand"
                      width={120}
                      height={120}
                    />
                  </Link>
                </div>
              </div>
              <Footer />
              <div className="col-xl-4 col-lg-5 mb-30 form-widget">
                <h5 className="footer-title tx-dark fw-normal">Newsletter</h5>
                <h6 className="pt-15 pb-20 md-pt-10">Join our newsletter</h6>
                <NewsLetter />
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter />
      </div>
    </>
  );
};

export default HomePage;
