import React, { useEffect, useState } from "react";
import SideBar from "../../components/admin/SideBar";
import { Link } from "react-router-dom";

const AdminDashboard = ({ products, users }) => {
  const [lastProduct, setLastProduct] = useState({});
  const [lastUser, setLastUser] = useState({});

  const getLastProduct = () => {
    let lastProductAdded = [...products].pop();
    setLastProduct(lastProductAdded);
  };
  const getLastUser = () => {
    let lastUserAdded = [...users].pop();
    setLastUser(lastUserAdded);
  };
  useEffect(() => {
    getLastProduct();
  }, [products]);
  useEffect(() => {
    getLastUser();
  }, [users]);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <SideBar />
          <div className="col-md-10">
            <div className="content ">
              <div
                className="row justify-content-center align-items-center "
                style={{ height: "100vh" }}
              >
                <div className="col-md-5 mb-4 p-5">
                  <div className="card bg-black text-white">
                    <div
                      className="card-body d-flex flex-column align-items-center justify-content-center"
                      style={{ height: "15em" }}
                    >
                      <h3 className="text-center text-primary ">Products</h3>
                      <h5 className="card-title text-center m-4">
                        Number Of Products :{" "}
                        {products.length > 0 &&
                          products
                            .map((product) => {
                              return (product = 1);
                            })
                            .reduce((num1, num2) => num1 + num2)}{" "}
                      </h5>
                      <h5 className="text-center fs-6 fw-bold">
                        Last Product Added is : {lastProduct?.title}
                      </h5>
                      <Link to="/admin/products">
                        <button className="btn btn-primary mt-2">
                          Show Products
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mb-4 p-5">
                  <div className="card bg-black text-white">
                    <div
                      className="card-body d-flex flex-column align-items-center justify-content-center"
                      style={{ height: "15em" }}
                    >
                      <h3 className="text-center text-primary ">Users</h3>
                      <h5 className="card-title text-center m-4">
                        Number Of Users :{" "}
                        {users.length > 0 &&
                          users
                            .map((user) => {
                              return (user = 1);
                            })
                            .reduce((num1, num2) => num1 + num2)}{" "}
                      </h5>
                      <h5 className="text-center fs-6 fw-bold">
                        Last User Registered is : {lastUser?.username}
                      </h5>
                      <Link to="/admin/users">
                        <button className="btn btn-primary mt-2">
                          Show Users
                        </button>
                      </Link>
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

export default AdminDashboard;
