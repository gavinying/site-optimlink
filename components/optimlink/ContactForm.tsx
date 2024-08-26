"use client";

import { useEffect, useState, useActionState } from "react";
import { processForm, State } from "@/app/lib/actions";

export default function ContactForm() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(processForm, initialState);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (state.message) {
      setShowMessage(true);
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.message]);

  return (
    <form action={formAction}>
      <div className="messages" />
      <div className="input-bg-group position-relative controls">
        <div className="d-block">
          <div className="input-group-meta form-group mb-50">
            <label className="d-block">Name*</label>
            <input
              id="name"
              name="name"
              type="text"
              defaultValue=""
              placeholder="Your name"
              aria-describedby="name-error"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .d-block */}

        <div className="d-block">
          <div className="input-group-meta form-group mb-60">
            <label className="d-block">Email*</label>
            <input
              id="email"
              name="email"
              type="text"
              defaultValue=""
              placeholder="name@company.com"
              aria-describedby="email-error"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
        {/* End .d-block */}

        <div className="d-block">
          <div className="input-group-meta form-group">
            <textarea
              id="request"
              name="request"
              defaultValue=""
              placeholder="Your request"
              aria-describedby="request-error"
            />
            <div className="help-block with-errors" />
          </div>
        </div>
      </div>

      <div className="row controls">
        <div className="col-12">
          <button
            type="submit"
            className="btn-one fw-500 w-100 fs-18 d-block mt-45"
          >
            Send Message
          </button>
        </div>

        {showMessage && (
          <div className="col-12 mt-20">
            <div
              className="alert alert-success d-flex align-items-center"
              role="alert"
            >
              <svg
                className="bi flex-shrink-0 me-2"
                width="24"
                height="24"
                role="img"
                aria-label="Success:"
              >
                <use xlinkHref="#check-circle-fill" />
              </svg>
              <div>{state.message}</div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
