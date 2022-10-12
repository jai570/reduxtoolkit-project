import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="row g-3">
      <div className="col-md-12">
        <img
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=338&ext=jpg"
          alt="Not Found"
        />
        <Link to={"/"}>
          <MDBBtn
            style={{ display: "block", margin: "auto", marginTop: "30px" }}
          >
            Go back
          </MDBBtn>{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
