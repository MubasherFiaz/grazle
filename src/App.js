import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import Loader from "./components/Loader";
import "./assets/css/style.css";
import "./assets/css/ace-responsive-menu.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-select.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/dashbord_navitaion.css";
import "./assets/css/flaticon.css";
import "./assets/css/fontawesome.css";
import "./assets/css/jquery-ui.min.css";
import "./assets/css/magnific-popup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Roote from "./routes/Roote";

function App() {
  const { setIsLogin, setUserData } = useAuth();
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("login_token"));
    setUserData(storedData?.data[0]);
    console.log(storedData?.data[0]);

    if (storedData?.data) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <>
      <Roote />
      <ToastContainer />
    </>
  );
}

export default App;
