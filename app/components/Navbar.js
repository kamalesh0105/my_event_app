const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark justify-content-center">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav ">
          <div className="img px-4">
            <a className="navbar-brand" href="/">
              <img
                src="logo.png"
                style={{ width: "40px", height: "auto" }}
                alt="Logo"
              />
            </a>
          </div>
          <li className="nav-item px-3">
            <a href="/" className="nav-link active">
              Home
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/premium" className="nav-link">
              Premium
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/party-packs" className="nav-link">
              Party Packs
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/safety" className="nav-link">
              Safety
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/faq" className="nav-link">
              FAQ
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item px-3">
            <i
              className="far fa-search nav-link"
              style={{ color: "white" }}
            ></i>
          </li>
          <li className="nav-item px-2">
            <button className="btn btn-outline-secondary transparent-btn">
              Login
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
