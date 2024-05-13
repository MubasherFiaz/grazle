import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ProductFilter = ({ data, setfilterCheckBox }) => {
  const [filter, setFilter] = useState([]);
  const handleSearch = () => {
    const idsString = filter?.map((id) => id).join(",");
    setfilterCheckBox(idsString);
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
            <div className="d-block d-xl-none">
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
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Product by Name"
                  />
                </div>
              </div>
            </div>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header  bg-white" id="headingOne">
                  <button
                    className="accordion-button bg-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Categories
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body bg-white">
                    <div className="card-body p-0">
                      <div className="sidebar_widget_checkbox">
                        <div className="ui_kit_checkbox pb30">
                          {data?.map((item) => (
                            <div className="mb-2" key={item.id}>
                              <input
                                type="checkbox"
                                id={item.name}
                                className="form-check-input me-2"
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setFilter((prevIds) => [
                                      ...prevIds,
                                      item.id,
                                    ]);
                                  } else {
                                    setFilter((prevIds) =>
                                      prevIds.filter(
                                        (prevId) => prevId !== item.id
                                      )
                                    );
                                  }
                                }}
                              />
                              <label
                                className="custom_checkbox1"
                                htmlFor={item.name}
                              >
                                {item.name}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed bg-white"
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
                  <div class="accordion-body  bg-white">
                    <div className="card-body p-0">
                      <div className="sidebar_widget_checkbox">
                        <div className="mb-2">
                          <label htmlFor="minPrice">Min Price</label>
                          <input type="number" />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="minPrice">Max Price</label>
                          <input type="number" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" mt-3 text-end">
              <button className="btn btn-danger w-100" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
