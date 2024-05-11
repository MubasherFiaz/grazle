import React, { useEffect, useState } from "react";
// @ import styles
import "./styles.css";
import StarRating from "../../shared/StarRating";
import { useAuth } from "../../context/AuthProvider";
import { globalApi } from "../../apis/AuthApis";
import ProductsCard from "../productsCard";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const { setIsLoading } = useAuth();

  const geProductDetailData = async () => {
    try {
      setIsLoading(true);
      const data = await globalApi(
        `https://aquaconcepts78.fr/grazleBackend/api/product_details_by_id/${productId}`
      );
      setProductDetail(data.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await geProductDetailData();
    };
    fetchData();
  }, []);

  return (
    <section id="product-info">
      <div className="container">
        <div className="main-product-image mb-5 d-flex justify-content-center align-items-center">
          <img src={productDetail?.product_image} alt="Product Image" />
        </div>
        <nav>
          <div
            className="nav nav-tabs justify-content-center product-tabpane"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              Home
            </button>
            <button
              className="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              product info
            </button>
            <button
              className="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              Contact
            </button>
          </div>
        </nav>
        <div className="tab-content pt-3" id="nav-tabContent">
          <div className="col-xxl-8 col-xl-8 col-lg-10 col-sm-12 col-12">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="product-content">
                <div className="mb-xl-5 mb-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: productDetail?.product?.description,
                    }}
                  />

                  <p>
                    Sed et condimentum arcu, id molestie tellus. Nulla facilisi.
                    Nam scelerisque vitae justo a convallis. Morbi urna ipsum,
                    placerat quis commodo quis, egestas elementum leo. Donec
                    convallis mollis enim. Aliquam id mi quam. Phasellus nec
                    fringilla elit. Nulla mauris tellus, feugiat quis pharetra
                    sed, gravida ac dui. Sed iaculis, metus faucibus elementum
                    tincidunt, turpis mi viverra velit, pellentesque tristique
                    neque mi eget nulla. Proin luctus elementum neque et
                    pharetra. Nulla mauris tellus, feugiat quis pharetra sed,
                    gravida ac dui. Sed iaculis, metus faucibus elementum
                    tincidunt, turpis mi viverra velit, pellentesque tristique
                    neque mi eget nulla. Proin luctus elementum neque et
                    pharetra.
                  </p>
                </div>

                <ul className="m-0 p-0">
                  <li>100 g of fresh leaves provides.</li>
                  <li>100 g of fresh leaves provides.</li>
                  <li>100 g of fresh leaves provides.</li>
                </ul>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              content-2
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              content-3
            </div>
          </div>
        </div>
        <div className="review-wrapper">
          <div className="review-head">
            <div className="review-heading">
              <h3>ratings & reviews</h3>
            </div>
            <div className="row align-items-start rating-area">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-12 col-sm-12 col-12 rating-border-right">
                <div className="rating-flex-wrapper">
                  <div className="rating-points d-flex align-items-center">
                    <p className="m-0">5.0</p>
                    <div className="ms-2 half-cut">very good</div>
                  </div>
                  <div className="rating-stars">
                    <StarRating />
                  </div>
                  <div className="rating-total-points">
                    <p>133 rating</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                <div className="total-ratingwrapper">
                  <div className="d-flex align-items-center gap-3">
                    <div className="total-rating-stars flex-grow-0">
                      <StarRating />
                    </div>
                    <div className="total-rating-progress flex-grow-1">
                      <div className="progress">
                        <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="total-rating-points flex-grow-1">75</div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="total-rating-stars flex-grow-0">
                      <StarRating />
                    </div>
                    <div className="total-rating-progress flex-grow-1">
                      <div className="progress">
                        <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="total-rating-points flex-grow-1">75</div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="total-rating-stars flex-grow-0">
                      <StarRating />
                    </div>
                    <div className="total-rating-progress flex-grow-1">
                      <div className="progress">
                        <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="total-rating-points flex-grow-1">75</div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="total-rating-stars flex-grow-0">
                      <StarRating />
                    </div>
                    <div className="total-rating-progress flex-grow-1">
                      <div className="progress">
                        <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="total-rating-points flex-grow-1">75</div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="total-rating-stars flex-grow-0">
                      <StarRating />
                    </div>
                    <div className="total-rating-progress flex-grow-1">
                      <div className="progress">
                        <div
                          className="progress-bar w-75"
                          role="progressbar"
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="total-rating-points flex-grow-1">75</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="review-body">
            <div className="rating-filters d-xl-flex justify-content-between">
              <div class="dropdown">
                <button
                  class="btn filter-btn  dropdown-toggle "
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Filter
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dropdown">
                <button
                  class="btn filter-btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Relevence
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="review-footer">
            <div className="user-review-box d-xl-flex justify-content-between">
              <div className="review-left-content">
                <div className="user-rating-info d-flex gap-2 align-items-center mb-2">
                  <span className="user-rating-stars">
                    {" "}
                    <StarRating />
                  </span>
                  <h4>Rooshan R.</h4>
                  <p>12 month ago</p>
                </div>
                <div className="user-output-wrapper">
                  <p className="user-comment">
                    it was a little bit loose and elongated at the same time i
                    want refund please
                  </p>
                  <div className="user-output-images d-flex flex-wrap gap-3">
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                  </div>
                  <div className="product-metas d-flex flex-xl-row flex-column gap-xl-3 gap-1">
                    <p>color family: gold</p>
                    <p>bracelet size : one size</p>
                  </div>
                </div>
              </div>
              <div className="review-right-content">
                <p>12 month ago</p>
              </div>
            </div>
            <div className="user-review-box d-xl-flex justify-content-between">
              <div className="review-left-content">
                <div className="user-rating-info d-flex gap-2 align-items-center mb-2">
                  <span className="user-rating-stars">stars</span>
                  <h4>Rooshan R.</h4>
                  <p>12 month ago</p>
                </div>
                <div className="user-output-wrapper">
                  <p className="user-comment">
                    it was a little bit loose and elongated at the same time i
                    want refund please
                  </p>
                  <div className="user-output-images d-flex flex-wrap gap-3">
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                  </div>
                  <div className="product-metas d-flex flex-xl-row flex-column gap-xl-3 gap-1">
                    <p>color family: gold</p>
                    <p>bracelet size : one size</p>
                  </div>
                </div>
              </div>
              <div className="review-right-content">
                <p>12 month ago</p>
              </div>
            </div>
            <div className="user-review-box d-xl-flex justify-content-between">
              <div className="review-left-content">
                <div className="user-rating-info d-flex gap-2 align-items-center mb-2">
                  <span className="user-rating-stars">
                    {" "}
                    <StarRating />
                  </span>
                  <h4>Rooshan R.</h4>
                  <p>12 month ago</p>
                </div>
                <div className="user-output-wrapper">
                  <p className="user-comment">
                    it was a little bit loose and elongated at the same time i
                    want refund please
                  </p>
                  <div className="user-output-images d-flex flex-wrap gap-3">
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                  </div>
                  <div className="product-metas d-flex flex-xl-row flex-column gap-xl-3 gap-1">
                    <p>color family: gold</p>
                    <p>bracelet size : one size</p>
                  </div>
                </div>
              </div>
              <div className="review-right-content">
                <p>12 month ago</p>
              </div>
            </div>
            <div className="user-review-box d-xl-flex justify-content-between">
              <div className="review-left-content">
                <div className="user-rating-info d-flex gap-2 align-items-center mb-2">
                  <span className="user-rating-stars">
                    {" "}
                    <StarRating />
                  </span>
                  <h4>Rooshan R.</h4>
                  <p>12 month ago</p>
                </div>
                <div className="user-output-wrapper">
                  <p className="user-comment">
                    it was a little bit loose and elongated at the same time i
                    want refund please
                  </p>
                  <div className="user-output-images d-flex flex-wrap gap-3">
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                  </div>
                  <div className="product-metas d-flex flex-xl-row flex-column gap-xl-3 gap-1">
                    <p>color family: gold</p>
                    <p>bracelet size : one size</p>
                  </div>
                </div>
              </div>
              <div className="review-right-content">
                <p>12 month ago</p>
              </div>
            </div>
            <div className="user-review-box d-xl-flex justify-content-between">
              <div className="review-left-content">
                <div className="user-rating-info d-flex gap-2 align-items-center mb-2">
                  <span className="user-rating-stars">
                    {" "}
                    <StarRating />
                  </span>
                  <h4>Rooshan R.</h4>
                  <p>12 month ago</p>
                </div>
                <div className="user-output-wrapper">
                  <p className="user-comment">
                    it was a little bit loose and elongated at the same time i
                    want refund please
                  </p>
                  <div className="user-output-images d-flex flex-wrap gap-3">
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                    <div className="user-img"></div>
                  </div>
                  <div className="product-metas d-flex flex-xl-row flex-column gap-xl-3 gap-1">
                    <p>color family: gold</p>
                    <p>bracelet size : one size</p>
                  </div>
                </div>
              </div>
              <div className="review-right-content">
                <p>12 month ago</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h3>More from frequently Our Store</h3>
          <div className="row">
            {productDetail?.related_products?.product.map((item) => (
              <div
                className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12 mb-3"
                key={item.id}
              >
                <ProductsCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
