import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProductFilter = ({ items }) => {
  const handleparentdata = () => {
    items();
  };
  return (
    <div>
      <div className="sidebar_accordion_widget">
        <div className="faq_according text-start ">
          <div
            className="accordion card shadow bg-lg-white"
            id="accordionExample"
            style={{ padding: "12px" }}
          >
            <div onClick={handleparentdata} className="d-block d-xl-none">
              <FontAwesomeIcon
                icon={faTimes}
                style={{
                  fontSize: "30px",
                  marginBottom: "1rem",
                  padding: "4px",
                  border: "1px solid black",
                  borderRadius: "7px",
                }}
              />
            </div>
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center filter1-head">
                <h5 className="p-0">Filter Products</h5>
                <h5 style={{ color: "#F70000" }} className=" ">
                  <i className="fa-solid fa-xmark"></i> Clear
                </h5>
              </div>
            </div>

            <div className="card">
              <div className="card-body " style={{ background: "none" }}>
                <div className="search1">
                  <i className="fa fa-search1"></i>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search1 Product Here"
                  />
                </div>
              </div>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header  bg-white" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    On Offer
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="card-body">
                      <div className="sidebar_widget_checkbox">
                        <div className="ui_kit_checkbox pb30">
                          <div className="mb-2">
                            <label className="custom_checkbox1">
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                              />
                              AND/OR (988)
                            </label>
                          </div>

                          <div className="mb-2">
                            <label
                              className="custom_checkbox1"
                              checked="checked"
                            >
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                              />
                              7 For all mankind (88)
                            </label>
                          </div>
                          <div className="mb-2">
                            <label className="custom_checkbox1">
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                              />
                              AG (22)
                            </label>
                          </div>
                          <div className="mb-2">
                            <label className="custom_checkbox1">
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                              />
                              AllSaints (11)
                            </label>
                          </div>
                          <div>
                            <label className="custom_checkbox1 mb5">
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                              />
                              Babour (988)
                            </label>
                          </div>
                          <a href="#" className="shop1_btn">
                            View More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header  bg-white" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Size
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="card-body">
                      <div className="sidebar_widget_checkbox">
                        <div className="ui_kit_checkbox pb30">
                          <div className="mb-2">
                            <label className="custom_checkbox1">
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                              />
                              XXL
                            </label>
                          </div>
                          <div className="mb-2">
                            <label
                              className="custom_checkbox1"
                              checked="checked"
                            >
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                              />
                              XL
                            </label>
                          </div>
                          <div className="mb-2">
                            <label className="custom_checkbox1">
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                              />
                              L
                            </label>
                          </div>
                          <div className="mb-2">
                            <label className="custom_checkbox1">
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                              />
                              M
                            </label>
                          </div>
                          <div>
                            <label className="custom_checkbox1 mb5">
                              <input
                                type="checkbox"
                                className="form-check-input me-2"
                              />
                              S
                            </label>
                          </div>
                          <a href="#" className="shop1_btn">
                            View More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header  bg-white" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Price
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="card-body">
                      <div className="sidebar_widget_checkbox"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header bg-white" id="headingFour">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Color
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div className="card-body">
                      <div className="color_chose_list_sscs_page shop_single_natabmenu sidebar_widget_checkbox color_style color_switch">
                        <div className="align-items-center">
                          <div
                            className="nav nav-pills d-block"
                            id="v-pills-tab2"
                            role="tablist"
                            aria-orientation="vertical"
                          >
                            <div
                              className="d-flex  "
                              style={{ color: "#74767E" }}
                            >
                              <button
                                className="nav-link p-0 active me-2"
                                id="v-pills-color7-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-color7"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-color7"
                                aria-selected="true"
                                style={{ border: "12px solid #9BD1FF" }}
                              ></button>
                              Color 1
                            </div>
                            <div
                              className="d-flex  "
                              style={{ color: "#74767E" }}
                            >
                              <button
                                className="nav-link p-0 me-2"
                                id="v-pills-color8-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-color8"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-color8"
                                aria-selected="false"
                                style={{ border: "12px solid #FEC4C4" }}
                              ></button>
                              Color 1
                            </div>
                            <div
                              className="d-flex  "
                              style={{ color: "#74767E" }}
                            >
                              <button
                                className="nav-link p-0 me-2"
                                id="v-pills-color9-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-color9"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-color9"
                                aria-selected="false"
                                style={{ border: "12px solid #FEC4C4" }}
                              ></button>
                              Color 1
                            </div>

                            <div
                              className="d-flex  "
                              style={{ color: "#74767E" }}
                            >
                              <button
                                className="nav-link p-0 me-2"
                                id="v-pills-color10-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-color10"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-color10"
                                aria-selected="false"
                                style={{ border: "12px solid #21B290" }}
                              ></button>
                              Color 1
                            </div>
                            <div
                              className="d-flex  "
                              style={{ color: "#74767E" }}
                            >
                              <button
                                className="nav-link p-0 me-2"
                                id="v-pills-color11-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-color11"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-color11"
                                aria-selected="false"
                                style={{ border: "12px solid #ECDBF3" }}
                              ></button>
                              Color 1
                            </div>
                            <div
                              className="d-flex  "
                              style={{ color: "#74767E" }}
                            >
                              <button
                                className="nav-link p-0 me-2"
                                id="v-pills-color12-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#v-pills-color12"
                                type="button"
                                role="tab"
                                aria-controls="v-pills-color12"
                                aria-selected="false"
                                style={{
                                  border: "12px solid #FF4A76 ",
                                }}
                              ></button>
                              Color 1
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
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
