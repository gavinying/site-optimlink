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
      <div className="row controls">
        <div className="col-12">
          <div className="input-group-meta form-group mb-25">
            <input
              id="name"
              name="name"
              type="text"
              defaultValue=""
              placeholder="Your name"
              aria-describedby="name-error"
            />
            <div id="name-error" aria-live="polite" aria-atomic="true">
              {state.errors?.name &&
                state.errors.name.map((error: string) => (
                  <p className="mt-2 text-sm text-danger" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-50">
            <input
              id="email"
              name="email"
              type="text"
              defaultValue=""
              placeholder="name@company.com"
              aria-describedby="email-error"
            />
            <div id="email-error" aria-live="polite" aria-atomic="true">
              {state.errors?.email &&
                state.errors.email.map((error: string) => (
                  <p className="mt-2 text-sm text-danger" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="input-group-meta form-group mb-30">
            <textarea
              id="request"
              name="request"
              defaultValue=""
              placeholder="Your request"
              aria-describedby="request-error"
            />
            <div id="request-error" aria-live="polite" aria-atomic="true">
              {state.errors?.request &&
                state.errors.request.map((error: string) => (
                  <p className="mt-2 text-sm text-danger" key={error}>
                    {error}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {showMessage && (
          <div className="col-12 mt-20">
            <div className="alert alert-success d-flex align-items-center" role="alert">
              <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
                <use xlinkHref="#check-circle-fill"/>
              </svg>
              <div>{state.message}</div>
            </div>
          </div>
        )}

        <div className="col-12">
          <button
            type="submit"
            className="btn-one fw-500 w-100 fs-18 d-block mt-45"
          >
            Send Message
          </button>
        </div>

      </div>
    </form>
  );
}
