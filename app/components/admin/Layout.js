import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
