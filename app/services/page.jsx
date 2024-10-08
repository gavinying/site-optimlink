import Link from "next/link";
import Image from "next/image";

import Services from "@/components/optimlink/Services2";
import WorkProcess from "@/components/optimlink/WorkProcess";
import Testimonial from "@/components/services/Testimonial";
import CallToActions from "@/components/services/CallToActions";

export const metadata = {
  title: "IT Services | Optimlink",
};

const ServicesPage = () => {
  return (
    <>
      {/*
      =============================================
      Inner Banner
      ==============================================
      */}
      <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundImage: "url(/images/assets/bg-17.svg)" }}
        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">IT Services</h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20">
              Empowering Your Business with Intelligent IT Solutions
            </p>
          </div>
        </div>
      </div>

      {/*
      =============================================
        Feature Section One
      ==============================================
      */}
      <div className="fancy-feature-one pt-120 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 aos fadeInLeft">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-bold tx-dark m0">
                  Provide <span>Quality</span> Services.
                </h2>
              </div>{" "}
            </div>
            <div className="col-lg-5 ms-auto aos fadeInRight">
              <p className="text-lg text-center text-lg-start md-pt-30 m0">
              OptimLink provides cutting-edge IT solutions tailored for businesses of all sizes, from startups to large enterprises.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-120 lg-pt-80 md-pt-60">
          <div className="row gx-xxl-5">
            <Services />
          </div>
        </div>{" "}
      </div>

      {/*
      =============================================
        Feature Section Fifty Four
      ==============================================
      */}
      <div className="fancy-feature-fiftyFour p-30 mt-50 lg-mt-40">
        <div className="bg-wrapper position-relative zn2 pt-110 lg-pt-80 pb-110 lg-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="title-style-one">
                  <div className="sc-title text-uppercase">Why us?</div>
                  <h2 className="main-title fw-bold tx-dark">
                    Why <span>choose</span> Optimlink
                  </h2>
                </div>{" "}
                {/* /.title-style-one */}
                <p className="text-lg mt-40 lg-mt-20">
                  We helping our client to fullfill their needs with our expert.
                </p>
                <Image
                  src="/images/shape/shape_179.svg"
                  alt="shape"
                  className="lazy-img d-none d-lg-block mt-40"
                  width={83}
                  height={75}
                />
              </div>

              <div className="col-lg-7 ms-auto" data-aos="fade-left">
                <div className="bg-white pe-3 ps-3 pe-lg-5 ps-lg-5 pt-15 pb-15 ms-xxl-4 rounded-3 md-mt-40">
                  <WorkProcess />
                </div>
              </div>
            </div>
          </div>

          <Image
            width={8}
            height={8}
            src="/images/shape/shape_11.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <Image
            width={18}
            height={16}
            src="/images/shape/shape_13.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          />
          <Image
            width={8}
            height={8}
            src="/images/shape/shape_10.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <Image
            width={10}
            height={10}
            src="/images/shape/shape_12.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
        </div>{" "}
      </div>

      {/*
      =============================================
        Wrapper
      ==============================================
      */}
      <div className="wrapper position-relative mt-160 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 m-auto text-center">
              <div className="title-style-one" data-aos="fade-up">
                <h2 className="main-title fw-bold tx-dark m0">
                  Ready to take plan? It’s just a matter of{" "}
                  <span>one click</span>
                </h2>
              </div>{" "}
              <p
                className="text-lg tx-dark pt-40 pb-35 lg-pt-30 lg-pb-20"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Try it risk free — Schedule a meeting with our IT expert.
              </p>
              <a
                href="https://calendly.com/helloysd/meeting-with-optimlink"
                className="btn-two fs-18 fw-500"
                data-aos="fade-up"
                data-aos-delay="200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
        <Image
          width={8}
          height={8}
          src="/images/shape/shape_20.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
          style={{ top: "5%", left: "10%" }}
        />
        <Image
          width={11}
          height={11}
          src="/images/shape/shape_21.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
          style={{ bottom: "-4%", left: "18%" }}
        />
        <Image
          width={9}
          height={9}
          src="/images/shape/shape_22.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
          style={{ bottom: "-4%", right: "23%" }}
        />
        <Image
          width={16}
          height={14}
          src="/images/shape/shape_23.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
          style={{ top: "-3%", right: "14%" }}
        />
      </div>
    </>
  );
};

export default ServicesPage;
