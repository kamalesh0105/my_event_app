import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
  const routename = usePathname();

  // Define base path for the sidebar items
  const basePath = "/admin/dashboard";

  // Define sidebar items with their relative paths
  const sidebarItems = [
    { href: "/home", label: "Home" },
    { href: "/events", label: "Manage Events" },
    { href: "/add", label: "Add Events" },
    { href: "/participants", label: "Participants" },
    { href: "/devsupport", label: "Dev Support" },
    // Add more sidebar items as needed
  ];
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
        {sidebarItems.map((item) => (
          <li key={item.href} className="nav-item">
            <a
              href={`${basePath}${item.href}`}
              className={`nav-link text-white ${
                routename === `${basePath}${item.href}` ? "bg-primary" : ""
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
        <hr className="text-white" />
      </ul>
    </div>
  );
};

export default Sidebar;
