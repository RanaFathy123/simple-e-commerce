import React from "react";
import SideBar from "../../../components/admin/SideBar";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Products = ({ products, ifProductChanged, setIfProductChanged }) => {
  const deleteProduct = (obj) => {
    Swal.fire({
      title: `Do you want to save the changes ${obj.title}`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
      icon: "question",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: `http://localhost:3000/products/${obj.id}`,
        })
          .then((response) => response.data)
          .catch((err) => console.log(err));
        setIfProductChanged(!ifProductChanged);
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <div className="col-md-10">
          <div className="content ">
            <Link to="/admin/addproduct">
              <button className="btn btn-primary mt-5 mb-3">Add Product</button>
            </Link>
            <h3 className="text-center m-3">Products</h3>
            <div className="row container" style={{ height: "100vh" }}>
              <div className="container">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col" className="text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((product) => (
                        <tr key={product.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={product.image}
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                              />
                              <div className="ms-3">
                                <p className="fw-bold mb-1">{product.title}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{product.price}</p>
                          </td>
                          <td>{product.category}</td>
                          <td>
                            <div className="d-flex justify-content-round ">
                              <Link to={`/admin/product/${product.id}`}>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-primary"
                                  style={{ marginRight: "0.5em" }}
                                >
                                  View
                                </button>
                              </Link>
                              <Link to={`/admin/editproduct/${product.id}`}>
                              <button
                                type="button"
                                className="btn btn-sm btn-warning"
                                style={{ marginRight: "0.5em" }}
                              >
                                Edit
                              </button>
                              </Link>
                             
                              <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                style={{ marginRight: "0.5em" }}
                                onClick={() => deleteProduct(product)}
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
