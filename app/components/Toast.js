"use client";
// components/CustomToast.js
import { useEffect, useRef, useState } from "react";
// import * as bootstrap from "bootstrap";
const CustomToast = ({ show, setShow, title, message }) => {
  const toastRef = useRef(null);

  useEffect(() => {
    let toastInstance;
    if (toastRef.current) {
      import("bootstrap").then((bootstrap) => {
        toastInstance = new bootstrap.Toast(toastRef.current);
        if (show) {
          toastInstance.show();
        } else {
          toastInstance.hide();
        }
      });
    }
    return () => {
      if (toastInstance) {
        toastInstance.dispose();
      }
    };
  }, [show]);
  return (
    <div
      ref={toastRef}
      className="toast position-absolute  bottom-0 end-0  m-3"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      data-bs-autohide="true"
      data-bs-delay="3000"
      //   style={{
      //     position: "fixed",
      //     bottom: "20px",
      //     right: "20px",
      //     zIndex: 1055,
      //   }}
    >
      <div className="toast-header">
        <strong className="me-auto">{title}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={() => setShow(false)}
        ></button>
      </div>
      <div className="toast-body text-bg-light text-dark">{message}</div>
    </div>
  );
};

export default CustomToast;
