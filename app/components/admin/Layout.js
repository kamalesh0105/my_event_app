import React, { useEffect } from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  useEffect(() => {
    // Check if we are in the browser environment before running Bootstrap JS
    if (typeof window !== "undefined") {
      require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
