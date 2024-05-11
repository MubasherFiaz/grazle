import React from "react";
import UserSiderBAr from "../../shared/UserSiderBAr";
import ToggleSideBar from "../../shared/ToggleSideBar";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("login_token");
    navigate("/login");
  };
  return (
    <div>
      <section class="our-dashbord dashbord" style={{ padding: "0" }}>
        <div class="container py-3">
          <div
            className="row d-flex justify-content-center align-items-center my-3"
            style={{
              width: "100%",
              backgroundColor: "#F8F8F8",
              color: "#909198",
              height: "40px",
            }}
          >
            Home - My Account
          </div>
          <div class="row">
            <div class="col-lg-3 d-none d-lg-block">
              <UserSiderBAr />
            </div>
            <div class="col-lg-9">
              <div class="row">
                <div class="col-xl-12">
                  <ToggleSideBar />
                  <div class="card shadow p-4">
                    <h2 class="title mb-0">Logout</h2>
                    <p>Are you sure you want to log uot?</p>

                    <div class="form-group d-flex mb0">
                      <button
                        type="button"
                        class="btn btn-thm1111 me-3"
                        onClick={handleLogout}
                      >
                        Yes, Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logout;
