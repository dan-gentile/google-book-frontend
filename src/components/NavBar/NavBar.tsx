import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <h3>Book Search</h3>
      <ul>
        <li>
          <Link
            to="/"
            className={
              window.location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            to="/saved"
            className={
              window.location.pathname === "/saved"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Saved
          </Link>
        </li>
      </ul>
    </nav>
  );
}
