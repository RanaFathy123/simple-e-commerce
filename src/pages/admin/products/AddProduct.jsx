import React, { useState } from "react";
import SideBar from "../../../components/admin/SideBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = ({ ifProductChanged, setIfProductChanged }) => {
  const [addProductInputs, setAddProductInputs] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });
  const [addProductInputsMessage, setAddProductInputsMessage] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });
  const [checkProductTitle, setCheckProductTitle] = useState(false);
  const [checkProductPrice, setCheckProductPrice] = useState(false);
  const [checkProductDescription, setCheckProductDescription] = useState(false);
  const [checkProductCategory, setCheckProductCategory] = useState(false);
  const [checkProductImage, setCheckProductImage] = useState(false);

  const navigate = useNavigate();

  const addProduct = async () => {
    try {
      const response = axios({
        method: "post",
        url: "http://localhost:3000/products",
        data: {
          ...addProductInputs,
          rating: {
            rate: 0,
            count: 0,
          },
        },
      });
      navigate("/admin/products");
      setIfProductChanged(!ifProductChanged);
    } catch (err) {
      console.log(err);
    }
  };
  const resetInputs = () => {
    setCheckProductTitle(false);
    setCheckProductPrice(false);
    setCheckProductDescription(false);
    setCheckProductCategory(false);
    setCheckProductImage(false);
  };
  const validateInputs = () => {
    if (addProductInputs.title == "") {
      setCheckProductTitle(true);
      setAddProductInputsMessage({
        ...addProductInputsMessage,
        title: "Please Fill Product Title",
      });
    } else if (addProductInputs.image == "") {
      resetInputs();
      setCheckProductImage(true);
      setAddProductInputsMessage({
        ...addProductInputsMessage,
        image: "Please Fill Product Image",
      });
    } else if (addProductInputs.category == "") {
      resetInputs();
      setCheckProductCategory(true);
      setAddProductInputsMessage({
        ...addProductInputsMessage,
        category: "Please Fill Product Category",
      });
    } else if (addProductInputs.price == 0) {
      resetInputs();
      setCheckProductPrice(true);
      setAddProductInputsMessage({
        ...addProductInputsMessage,
        price: "Please Fill Product Price",
      });
    } else if (addProductInputs.description == "") {
      resetInputs();
      setCheckProductDescription(true);
      setAddProductInputsMessage({
        ...addProductInputsMessage,
        description: "Please Fill Product Image",
      });
    } else {
      addProduct();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <div className="col-md-9">
          <div className="content">
            <div className="row container p-5">
              <div className="container mt-5 w-75 bg-secondary text-light">
                <h3 className="text-center mt-5 p-2">Add New Product</h3>
                <div className="mb-3 ">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={addProductInputs.title}
                    onChange={(e) => {
                      setAddProductInputs({
                        ...addProductInputs,
                        title: e.target.value,
                      });
                    }}
                  />
                  {checkProductTitle && (
                    <div className="text-danger m-2 fw-bold ">
                      {addProductInputsMessage.title}
                    </div>
                  )}
                </div>
                <div className="mb-3 ">
                  <label className="form-label">Image</label>
                  <input
                    type="text"
                    className="form-control"
                    value={addProductInputs.image}
                    onChange={(e) => {
                      setAddProductInputs({
                        ...addProductInputs,
                        image: e.target.value,
                      });
                    }}
                  />
                  {checkProductImage && (
                    <div className="text-danger m-2 fw-bold">
                      {addProductInputsMessage.image}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    value={addProductInputs.category}
                    onChange={(e) => {
                      setAddProductInputs({
                        ...addProductInputs,
                        category: e.target.value,
                      });
                    }}
                  />
                  {checkProductCategory && (
                    <div className="text-danger m-2 fw-bold">
                      {addProductInputsMessage.category}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    value={addProductInputs.price}
                    onChange={(e) => {
                      setAddProductInputs({
                        ...addProductInputs,
                        price: e.target.value,
                      });
                    }}
                  />
                  {checkProductPrice && (
                    <div className="text-danger m-2 fw-bold">
                      {addProductInputsMessage.price}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={addProductInputs.description}
                    onChange={(e) => {
                      setAddProductInputs({
                        ...addProductInputs,
                        description: e.target.value,
                      });
                    }}
                  />
                  {checkProductDescription && (
                    <div className="text-danger m-2 fw-bold">
                      {addProductInputsMessage.description}
                    </div>
                  )}
                </div>
                <button
                  className="btn btn-primary mb-5"
                  onClick={validateInputs}
                >
                  Add Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
