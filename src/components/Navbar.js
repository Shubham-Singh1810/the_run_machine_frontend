import React from "react";
import { useLocation, Link } from "react-router-dom";
function Navbar() {
  const location = useLocation()
  return (
    <div className="navFooter col-lg-4 col-md-6 col-12 bg-light pt-3 pb-4 px-3 d-flex justify-content-between">
      <Link to="/" className="text-dark">
        <h4 className={" px-2 rounded" + (location.pathname=="/" && " bg-dark text-light")}>
          {" "}
          <i className="fa fa-home "></i>
        </h4>
      </Link>
      <Link className="text-dark" to="/search">
        <h4 className={" px-2 rounded" + (location.pathname=="/search" && " bg-dark text-light")}>
          <i className="fa fa-search"></i>
        </h4>
      </Link>
      <Link className="text-dark" to="/add_post">
        <h4 className={" px-2 rounded" + (location.pathname=="/add_post" && " bg-dark text-light")}>
          <i className="fa fa-plus"></i>
        </h4>
      </Link>
      <Link to="/profile" className="text-dark">
        <h4 className={" px-2 rounded" + (location.pathname=="/profile" && " bg-dark text-light")}>
          <i className="fa fa-user"></i>
        </h4>
      </Link>
    </div>
  );
}

export default Navbar;
