import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const MainCart = ({ cartProducts, setCartProducts }) => {
  return (
    <section className="h-100 ">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8 justify-content-center align-items-center">
            {cartProducts.length == 0 && (
              <>
                <img
                  src="https://male-fashion-ten.vercel.app/static/media/empty-shopping.a10c4f68e1ba633358c1.jpg"
                  className="w-100"
                  alt=""
                />
                <div className="d-flex justify-content-center mb-4 ">
                  <Link
                    className="text-decoration-none fw-bold text-white rounded-2 btn btn-success"
                    to="/shop"
                  >
                    Shop Now
                  </Link>
                </div>{" "}
              </>
            )}
            {cartProducts.length > 0 && (
              <div className="card mb-4 p-3">
                {cartProducts.map((product, index) => (
                  <Cart
                    key={index}
                    product={product}
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>{cartProducts.length == 0 && "0$"}</strong>
                      <strong>
                        {cartProducts.length > 0 && (
                          <div>
                            {cartProducts
                              .map((product) => {
                                return product.price * product.items;
                              })
                              .reduce((num1, num2) => num1 + num2)
                              .toFixed(2)}
                            $
                          </div>
                        )}
                      </strong>
                    </span>
                  </li>
                </ul>

                <button
                  type="button"
                  data-mdb-button-init
                  data-mdb-ripple-init
                  className="btn btn-primary btn-lg btn-block"
                >
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCart;
