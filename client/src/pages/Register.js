import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBIcon,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { register } from "../redux/feature/authSlice";
const initialState = {
  userName: "",
  email: "",
  password: "",
};
const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  console.log(formValue);
  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const { userName, email, password, confirmpassword } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      return toast.error("password are not matching");
    }
    if (email && password && userName && confirmpassword) {
      dispatch(register({ formValue, navigate, toast }));
    }
  };
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <div
      style={{
        margin: "auto",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h5>Register</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            <div className="col-md-12">
              <MDBInput
                label="Name"
                type="text"
                value={userName}
                name="userName"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your username"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your email"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={onInputChange}
                required
                invalid
                validation="Please provide your password"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="confirm Password"
                type="password"
                value={confirmpassword}
                name="confirmpassword"
                onChange={onInputChange}
                required
                invalid
                validation="Please enter correct password"
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2">
                {loading && (
                  <MDBSpinner
                    size="sm"
                    role="status"
                    tag="span"
                    className="me-2"
                  />
                )}
                Register
              </MDBBtn>
            </div>
          </MDBValidation>
          <br />
          {/* <GoogleLogin
            clientId="your client id"
            // render={(renderProps) => (
            //   <MDBBtn
            //     style={{ width: "100%" }}
            //     color="danger"
            //     onClick={renderProps.onClick}
            //     disabled={renderProps.disabled}
            //   >
            //     <MDBIcon className="me-2" fab icon="google" /> Google Sign In
            //   </MDBBtn>
            // )}
            // onSuccess={googleSuccess}
            // onFailure={googleFailure}
            // cookiePolicy="single_host_origin"
          /> */}
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/login">
            <p>Already have an acccount ? Login</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  );
};

export default Register;
