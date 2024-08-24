import Link from "next/link";
import Image from "next/image"
import LoginForm from "@/components/common/LoginForm";

export const metadata = {
  title: "Login | Optimlink",
};
const LogIn = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      {/*
      =============================================
      Theme Main Menu
      ==============================================
      */}
      <header className="theme-main-menu sticky-menu theme-menu-eight">
        <div className="inner-content position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <Link href="/" className="d-block">
                <Image src="/images/logo/optimlink-text-black-134x32.png" alt="" width={95} />
              </Link>
            </div>
            <Link href="/" className="go-back-btn fw-500 tran3s">
              Go to home
            </Link>
          </div>
        </div>
      </header>

      {/*
      =============================================
      User Login Page
      ==============================================
      */}
      <div className="user-data-section d-flex align-items-center justify-content-center flex-column position-relative">
        {/* login form */}
        <div className="form-wrapper position-relative m-auto">
          <div className="text-center">
            <h2 className="tx-dark mb-30 lg-mb-10">Login</h2>
            {/* Sign up option */}
            {/* <p className="fs-20 tx-dark">
              Still don&lsquo;t have an account?{" "}
              <Link href="/signup">Sign up</Link>
            </p> */}
          </div>
          <LoginForm />
        </div>

        <p className="mt-auto pt-50">Copyright @{currentYear} Optimlink</p>
        <Image
          src="/images/assets/ils_11.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <Image
          src="/images/assets/ils_12.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
    </>
  );
};

export default LogIn;
