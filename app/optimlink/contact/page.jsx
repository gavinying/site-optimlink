import Link from "next/link";
import Image from "next/image";

import ContactForm from "@/components/optimlink/ContactForm";

export const metadata = {
  title: "Contact | Optimlink",
};

const ContactPage = () => {
  return (
    <>
      {/*
      =============================================
        Contact Section Three
      ==============================================
      */}
      <div className="contact-section-three p-30">
        <div className="address-wrapper zn2 position-relative pt-180 lg-pt-150 mb-150 lg-mb-80">
          <div className="container">
            <div className="title-style-seven text-center" data-aos="fade-up">
              <h2 className="main-title fw-bold tx-dark">
                Get in&nbsp;
                <span className="position-relative d-inline-block">
                  Touch{" "}
                  <Image
                    src="/images/shape/shape_96.svg"
                    width={305}
                    height={104}
                    alt="shape"
                  />
                </span>
              </h2>
            </div>
            <div className="row">
              <div className="col-xxl-6 col-xl-7 m-auto">
                <p
                  className="mt-45 lg-mt-20 mb-70 lg-mb-30 fs-20 lh-lg text-center"
                  data-aos="fade-up"
                >
                  Want to get in touch? We’d love to hear from you. Here’s how
                  you can reach us.
                </p>
              </div>
            </div>
            {/* <div className="row justify-content-center">
              <BlockContact3 />
            </div> */}
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto">
              <div
                className="title-style-one text-center mb-60 lg-mb-40"
                data-aos="fade-up"
              >
                <h2 className="main-title fw-500 tx-dark m0">
                  Drop us a line for any kind of info.
                </h2>
              </div>
            </div>

            <div className="col-xxl-11 m-auto">
              <div className="form-style-four" data-aos="fade-up">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*
      =====================================================
        Fancy Short Banner Ten
      =====================================================
      */}
      <div
        className="fancy-short-banner-ten position-relative mt-225 lg-mt-100"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper position-relative pt-50 pb-65 lg-pt-40 lg-pb-50">
            <div className="row">
              <div className="col-lg-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-lg-5">
                    <h2 className="m0 text-white fw-bold md-pb-20">
                      Sign up for best web hosting today.
                    </h2>
                  </div>
                  <div className="col-xl-6 col-lg-7">
                    <div className="d-sm-flex align-items-center justify-content-center justify-content-lg-end">
                      <Link
                        href="/contact/contact-v3"
                        className="btn-line fw-500 tran3s position-relative me-sm-5"
                      >
                        Chat with a an Expert
                      </Link>
                      <Link
                        href="/contact/contact-v3"
                        className="btn-solid fw-500 tran3s"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
