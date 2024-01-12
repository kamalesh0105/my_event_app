const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark justify-content-center pt-3 border-bottom border-dark ">
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
        <div className="d-flex align-items-center">
          <div className="img ">
            <a className="navbar-brand" href="/">
              <img
                src="logo.png"
                style={{ width: "40px", height: "auto" }}
                alt="Logo"
              />
            </a>
          </div>
        </div>
        <ul className="navbar-nav ">
          <li className="nav-item px-3">
            <a href="/" className="nav-link active">
              Home
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/events" className="nav-link">
              Events
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/safety" className="nav-link">
              Gallery
            </a>
          </li>
          <li className="nav-item px-3">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
          <li className="nav-item px-0">
            <i
              className="far fa-search nav-link"
              style={{ color: "white" }}
            ></i>
          </li>
          <li className="nav-item px-0">
            <button className="btn btn-outline-secondary transparent-btn text-light">
              Register Now!
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark justify-content-center">
//       <div className="d-flex align-items-center">
//         <div className="img px-2">
//           <a className="navbar-brand" href="/">
//             <img
//               src="logo.png"
//               style={{ width: "40px", height: "auto" }}
//               alt="Logo"
//             />
//           </a>
//         </div>
//         <h4 className="align-items-center justify-content-center m-0 fst-bold ">
//           Event
//         </h4>
//       </div>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         aria-controls="navbarNav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div
//         className="collapse navbar-collapse justify-content-center"
//         id="navbarNav"
//       >
//         <ul className="navbar-nav ">
//           <li className="nav-item px-3">
//             <a href="/" className="nav-link active">
//               Home
//             </a>
//           </li>
//           <li className="nav-item px-3">
//             <a href="/events" className="nav-link">
//               Events
//             </a>
//           </li>
//           <li className="nav-item px-3">
//             <a href="/about" className="nav-link">
//               About
//             </a>
//           </li>
//           <li className="nav-item px-3">
//             <a href="/safety" className="nav-link">
//               Gallery
//             </a>
//           </li>
//           <li className="nav-item px-3">
//             <a href="/contact" className="nav-link">
//               Contact
//             </a>
//           </li>
//           <li className="nav-item px-3">
//             <i
//               className="far fa-search nav-link"
//               style={{ color: "white" }}
//             ></i>
//           </li>
//           <li className="nav-item px-2">
//             <button className="btn btn-outline-secondary transparent-btn text-light">
//               Register Now!
//             </button>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
