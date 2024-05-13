import React, { useState } from "react";
import userimg from "../../assets/image/Ellipse 3037.png";
import UserSiderBAr from "../../shared/UserSiderBAr";
import ToggleSideBar from "../../shared/ToggleSideBar";
import { Formik } from "formik";
import * as Yup from "yup";
import Input from "../input/input";
import { useAuth } from "../../context/AuthProvider";
import { globalApi } from "../../apis/AuthApis";
import { toast } from "react-toastify";

const UserDetail = () => {
  const { userData, setIsLoading } = useAuth();
  const [imageURL, setImageURL] = useState(null);

  console.log(userData, "UserDetail");

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Required")
      .min(3, "Enter Minimum 3 digits"),
    mobile: Yup.number().required("Required").min(3, "Enter Minimum 3 digits"),
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const UpdateUserData = async (values) => {
    const formData = new FormData();
    formData.append("user_id", userData.id);
    formData.append("email", values.email);
    formData.append("username", values.username);
    formData.append("profile_img", imageURL);

    try {
      setIsLoading(true);
      const response = await globalApi(
        "https://aquaconcepts78.fr/grazleBackend/api/update_user",
        "POST",
        formData
      );
      setIsLoading(false);
      if (response?.error) {
        toast.error(response.message);
      } else {
        toast.success(response.message);
      }
      console.log(response, "Response");
      return response;
    } catch (error) {
      setIsLoading(false);
      toast.error(error);
      throw error;
    }
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
                  <div class="account_user_deails pl40 pl0-md">
                    <div class="d-flex customer_info">
                      <div class="flex-shrink-0 posr">
                        <input
                          id="fileInput"
                          type="file"
                          style={{ display: "none" }}
                          onChange={(e) => handleImageChange(e)}
                        />
                        <img
                          src={imageURL || userData?.image}
                          alt="customer1.png"
                          class="profile-img"
                          style={{ width: "135px", height: "135px" }}
                          onClick={() =>
                            document.getElementById("fileInput").click()
                          }
                        />
                        <span class="active_status active"></span>
                      </div>
                    </div>
                    <div class="ui_kit_tab style2">
                      <div class="tab-content pt20 row" id="myTabContent">
                        <div
                          class="tab-pane fade show active col-lg-12"
                          id="t20"
                          role="tabpanel"
                          aria-labelledby="t20-tab"
                        >
                          <div class="account_details_page form_grid">
                            <Formik
                              initialValues={userData}
                              validationSchema={validationSchema}
                              onSubmit={(values) => {
                                UpdateUserData(values);
                              }}
                            >
                              {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                /* and other goodies */
                              }) => (
                                <form
                                  class="contact_form"
                                  name="contact_form"
                                  onSubmit={handleSubmit}
                                >
                                  <div class="col-12">
                                    <div class="form-group mb-md-4 mb-2 trackoo">
                                      <label class="form-label">
                                        Full Name
                                      </label>
                                      <Input
                                        id="name"
                                        type="text"
                                        name="username"
                                        placeholder="Full NAME"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.username}
                                        isError={
                                          touched.username && errors.username
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div class="col-md-12">
                                    <div class="form-group mb-md-4 mb-2 trackoo">
                                      <label class="form-label">Email</label>
                                      <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                        placeholder="Email Address"
                                        isError={touched.email && errors.email}
                                      />
                                    </div>
                                  </div>
                                  <div class="col-md-12">
                                    <div class="form-group mb-md-4 mb-2 trackoo">
                                      <label class="form-label">
                                        Phone Number
                                      </label>
                                      <Input
                                        id="email"
                                        type="email"
                                        name="mobile"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.mobile}
                                        placeholder="Mobile Number"
                                        isError={
                                          touched.mobile && errors.mobile
                                        }
                                      />
                                    </div>
                                  </div>

                                  <div class="col-sm-12">
                                    <div class="form-group d-flex mb0">
                                      <button
                                        type="submit"
                                        class="btn btn-thm1111 me-3"
                                      >
                                        Update Change
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              )}
                            </Formik>
                          </div>
                        </div>
                      </div>
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

export default UserDetail;
