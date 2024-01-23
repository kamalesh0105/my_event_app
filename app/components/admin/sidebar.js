"use client";
import Link from "next/link";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-dark"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4 text-white">Dashboard</span>
      </a>
      <hr className="text-white" />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a
            href="/admin/dashboard/home"
            className="nav-link active px-3 "
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <button
            className="btn btn-toggle d-inline-flex align-items-center px-3  rounded border-0 collapsed text-white"
            data-bs-toggle="collapse"
            data-bs-target="#dashboardCollapse"
            aria-expanded="false"
          >
            Events
          </button>
          <div className="collapse" id="dashboardCollapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li className="px-5">
                <a
                  href="/admin/dashboard/events"
                  className=" d-inline-flex text-decoration-none rounded text-secondary "
                >
                  View
                </a>
              </li>
              <li className="px-5">
                <a
                  href="/admin/dashboard/events"
                  className=" d-inline-flex text-decoration-none rounded text-secondary "
                >
                  Add
                </a>
              </li>
              <li className="px-5">
                <a
                  href="/admin/dashboard/events"
                  className=" d-inline-flex text-decoration-none rounded text-secondary "
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <a
            href="/admin/dashboard/participants"
            className="nav-link text-white"
          >
            Participants
          </a>
        </li>
        <li className="nav-item">
          <a href="/admin/dashboard/dev" className="nav-link text-white">
            Dev Support
          </a>
        </li>

        <hr className="text-white" />
        <li className="nav-item"></li>
      </ul>
    </div>
  );
};

export default Sidebar;
