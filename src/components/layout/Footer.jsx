import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Developed By:
            <span className="text-warning font-weight-normal">
              {"  "} Ahmed Amir Salem
            </span>
            , Using <i className="fab fa-react" /> ReactJS &amp; ReduxJS
            integrated with external movie database API
            <a
              href="http://www.omdbapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"  "}OMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
