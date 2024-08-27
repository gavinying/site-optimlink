"use client";

import { useEffect, useState, useActionState } from "react";
import { processForm, State } from "@/app/lib/actions";

const DownloadModal = () => {
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
    <div className="d-grid gap-2 col-8 mx-auto">
      <button
        type="button"
        className="btn btn-primary btn-lg"
        data-bs-toggle="modal"
        data-bs-target="#downloadModal"
      >
        Download
      </button>

      <div
        className="modal fade"
        id="downloadModal"
        aria-labelledby="downloadModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-2 mb-20 mt-20" id="downloadModalLabel">
                Download PDPA Checklist
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action={formAction}>
                <div className="input-group-meta form-group mb-40">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    className={`form-control ${
                      state.errors?.request ? "is-invalid" : ""
                    }`}
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
                <div className="input-group-meta form-group mb-40">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    className={`form-control ${
                      state.errors?.email ? "is-invalid" : ""
                    }`}
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
                <div className="input-group-meta form-group mb-40">
                  <label htmlFor="request" className="form-label">
                    Request
                  </label>
                  <textarea
                    className={`form-control ${
                      state.errors?.request ? "is-invalid" : ""
                    }`}
                    id="request"
                    name="request"
                    defaultValue="I want a free PDPA Checklist."
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
                <div className="input-group-meta form-group mb-40">
                  <button type="submit" className="btn btn-primary btn-lg form-control">
                    Submit
                  </button>
                </div>
              </form>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
