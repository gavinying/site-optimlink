"use client";

import Aos from "aos";
import { useEffect, useRef } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/optimlink/Header";
import Footer from "@/components/optimlink/Footer";
import NewsLetter from "@/components/optimlink/NewsLetter";
import CopyrightFooter from "@/components/optimlink/CopyrightFooter";

import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

// export const experimental_ppr = true;

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  const tawkMessengerRef = useRef();

  return (
    <html lang="en">
      <body>
        {/*
        =====================================================
        Header
        =====================================================
        */}
        <Header />
        <div className="main-page-wrapper">
          {children}
          <ScrollToTop />
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
        {/* Tawk.to chatbot integration */}
        <TawkMessengerReact
          propertyId="5a8fbbb4d7591465c707efe8"
          widgetId="default"
          ref={tawkMessengerRef}
          handleMinimize={() => {
            tawkMessengerRef.current.minimize();
          }}
          onBeforeLoad={(widgetId) => {}}
          onLoad={() => {}}
          onStatusChange={(status) => {}}
          onChatStarted={() => {}}
          onChatMaximized={() => {}}
          onChatMinimized={() => {}}
          onChatMessageSystem={() => {}}
          onUnreadCountChanged={() => {}}
        />
      </body>
    </html>
  );
}
