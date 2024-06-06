import React, { useEffect } from "react";
import SideBar from "../../../components/admin/SideBar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const EditProduct = ({ ifProductChanged, setIfProductChanged }) => {
  const [editProductInputs, setEditProductInputs] = useState({
    title: "",
    image: "",
    category: "",
    price: 0,
    description: "",
  });
  const [editProductInputsMessage, setEditProductInputsMessage] = useState({
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
  const { productId } = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/products/${productId}`,
      });
      const data = response.data;

      setEditProductInputs({
        title: data.title,
        image: data.image,
        category: data.category,
        price: data.price,
        description: data.description,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const editProduct = async () => {
    try {
      const response = axios({
        method: "patch",
        url: `http://localhost:3000/products/${productId}`,
        data: editProductInputs,
      });
    } catch (err) {
      console.log(err);
    }
    setIfProductChanged(!ifProductChanged);
    navigate("/admin/products");
  };
  const resetInputs = () => {
    setCheckProductTitle(false);
    setCheckProductPrice(false);
    setCheckProductDescription(false);
    setCheckProductCategory(false);
    setCheckProductImage(false);
  };
  const validateInputs = () => {
    if (editProductInputs.title == "") {
      setCheckProductTitle(true);
      setEditProductInputsMessage({
        ...editProductInputsMessage,
        title: "Please Fill Product Title",
      });
    } else if (editProductInputs.image == "") {
      resetInputs();
      setCheckProductImage(true);
      setEditProductInputsMessage({
        ...editProductInputsMessage,
        image: "Please Fill Product Image",
      });
    } else if (editProductInputs.category == "") {
      resetInputs();
      setCheckProductCategory(true);
      setEditProductInputsMessage({
        ...editProductInputsMessage,
        category: "Please Fill Product Category",
      });
    } else if (editProductInputs.price == 0) {
      resetInputs();
      setCheckProductPrice(true);
      setEditProductInputsMessage({
        ...editProductInputsMessage,
        price: "Please Fill Product Price",
      });
    } else if (editProductInputs.description == "") {
      resetInputs();
      setCheckProductDescription(true);
      setEditProductInputsMessage({
        ...editProductInputsMessage,
        description: "Please Fill Product Image",
      });
    } else {
      editProduct();
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />
        <div className="col-md-9">
          <div className="content">
            <div className="row container p-5">
              <div className="container mt-5 w-75 bg-secondary text-light">
                <h3 className="text-center mt-5 p-2">Edit Product</h3>
                <div className="mb-3 ">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editProductInputs.title}
                    onChange={(e) =>
                      setEditProductInputs({
                        ...editProductInputs,
                        title: e.target.value,
                      })
                    }
                  />
                  {checkProductTitle && (
                    <div className="text-danger m-2 fw-bold ">
                      {editProductInputsMessage.title}
                    </div>
                  )}
                </div>
                <div className="mb-3 ">
                  <label className="form-label">Image</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editProductInputs.image}
                    onChange={(e) =>
                      setEditProductInputs({
                        ...editProductInputs,
                        image: e.target.value,
                      })
                    }
                  />
                  {checkProductImage && (
                    <div className="text-danger m-2 fw-bold">
                      {editProductInputsMessage.image}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editProductInputs.category}
                    onChange={(e) =>
                      setEditProductInputs({
                        ...editProductInputs,
                        category: e.target.value,
                      })
                    }
                  />
                  {checkProductCategory && (
                    <div className="text-danger m-2 fw-bold">
                      {editProductInputsMessage.category}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editProductInputs.price}
                    onChange={(e) =>
                      setEditProductInputs({
                        ...editProductInputs,
                        price: e.target.value,
                      })
                    }
                  />
                  {checkProductPrice && (
                    <div className="text-danger m-2 fw-bold">
                      {editProductInputsMessage.price}
                    </div>
                  )}
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editProductInputs.description}
                    onChange={(e) =>
                      setEditProductInputs({
                        ...editProductInputs,
                        description: e.target.value,
                      })
                    }
                  />
                  {checkProductDescription && (
                    <div className="text-danger m-2 fw-bold">
                      {editProductInputsMessage.description}
                    </div>
                  )}
                </div>
                <button
                  className="btn btn-primary mb-5"
                  onClick={validateInputs}
                >
                  Edit Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
