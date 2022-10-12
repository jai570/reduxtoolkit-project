import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setLogout } from "../redux/feature/authSlice";

const Header = () => {
  const [show, setShow] = useState(false);
  const { user, loading, error } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/");
  };
  return (
    <MDBNavbar fixed="top" expand="lg" style={{ backgroundColor: "#f0e6ea" }}>
      <MDBContainer>
        <MDBNavbarBrand
          href="/"
          style={{ color: "#606080", fontWeight: "600", fontSize: "22px" }}
        >
          Touropedia
        </MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toogle navigation"
          onClick={() => setShow(!show)}
          style={{ color: "#606080" }}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse show={show} navbar>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
            {user?.result?._id && (
              <h5 style={{ marginRight: "30px", marginTop: "17px" }}>
                Logged in as: {user?.result?.userName}
              </h5>
            )}
            <MDBNavbarItem>
              <Link to="/">
                <p className="header-text m-4">Home</p>
              </Link>
            </MDBNavbarItem>
            {user?.result?._id && (
              <>
                <MDBNavbarItem>
                  <Link to="/addTour">
                    <p className="header-text m-4">Add Tour</p>
                  </Link>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <Link to="/dashboard">
                    <p className="header-text m-4">Dashboard</p>
                  </Link>
                </MDBNavbarItem>
              </>
            )}
            {user?.result?._id ? (
              <MDBNavbarItem>
                <Link to="/login">
                  <p className="header-text m-4" onClick={handleLogout}>
                    Logout
                  </p>
                </Link>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <Link to="/login">
                  <p className="header-text m-4">Login</p>
                </Link>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Header;
