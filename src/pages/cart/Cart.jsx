import React from "react";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Cart = ({ product, cartProducts, setCartProducts }) => {
  const increment = (obj) => {
    let updatedProducts = cartProducts.map((product) => {
      if (obj.title == product.title) {
        product.disapleButton = false;
        product.items++;
      }
      return product;
    });
    setCartProducts(updatedProducts);
  };
  const decrement = (obj) => {
    let updatedProducts = cartProducts.map((product) => {
      if (obj.title == product.title && product.items > 1) {
        product.items--;
        if (product.items == 1) {
          product.disapleButton = true;
        }
      }
      return product;
    });
    setCartProducts(updatedProducts);
  };
  const deleteItem = (obj) => {
    let updatedProducts = cartProducts.filter((product) => {
      return obj.title != product.title;
    });
    Swal.fire({
      title: `Do you want to save the changes ${obj.title}`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
      icon: "question",
    }).then((result) => {
      if (result.isConfirmed) {
        setCartProducts(updatedProducts);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
          <div
            className="bg-image hover-overlay hover-zoom ripple rounded"
            data-mdb-ripple-color="light"
          >
            <img
              src={product.image}
              className="w-100"
              alt="Blue Jeans Jacket"
            />
            <a href="#!">
              <div
                className="mask"
                style={{
                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                }}
              ></div>
            </a>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
          <p>
            <strong>{product.title}</strong>
          </p>
          <p>{product.description}</p>
          <p className="fw-bold">Total : {product.items*product.price}$</p>
          <button
            type="button"
            className="btn btn-danger btn-sm mb-2"
            title="Remove item"
            onClick={() => deleteItem(product)}
          >
            <FaTrash />
          </button>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div
            className="d-flex justify-content-md-end justify-content-start"
            style={{ maxWidth: "300px" }}
          >
            <button
              className="btn btn-danger px-3 me-2"
              disabled={product.disapleButton}
              onClick={() => decrement(product)}
            >
              -
            </button>
            <div data-mdb-input-init className="form-outline">
              <div className="form-control">{product.items}</div>
            </div>
            <button
              className="btn btn-primary ms-2"
              onClick={() => increment(product)}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <hr className="my-4" />
    </>
  );
};

export default Cart;
