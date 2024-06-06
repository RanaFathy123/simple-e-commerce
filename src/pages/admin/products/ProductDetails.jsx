import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState({});
  const { productId } = useParams();

  const getProduct = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/products/${productId}`,
      });
      const data = response.data;
      setProductDetails(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div
                className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                data-mdb-ripple-color="light"
              >
                <img
                  src={productDetails?.image}
                  style={{
                    borderTopLeftRadius: "15px",
                    borderTopRightRadius: "15px",
                  }}
                  className="img-fluid"
                  alt="Laptop"
                />
                <a>
                  <div className="mask"></div>
                </a>
              </div>
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="text-dark">{productDetails?.title}</h5>
                    <p className="small text-muted">
                      {productDetails?.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted">
                      {productDetails?.rating?.rate} 
                    </p>
                  </div>
                </div>
              </div>
              <hr className="my-0" />
              <div className="card-body pb-0">
                <div className="d-flex justify-content-between">
                 
                    <p  className="text-dark">
                      ${productDetails?.price}
                    </p>
                 
                </div>
              </div>
              <hr className="my-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
