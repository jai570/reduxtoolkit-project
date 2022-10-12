import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setuser } from "./redux/feature/authSlice";
import AddEditTour from "./pages/AddEditTour";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setuser(user));
  }, []);
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addtour" element={<AddEditTour />} />
          <Route path="/edittour/:tourid" element={<AddEditTour />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
