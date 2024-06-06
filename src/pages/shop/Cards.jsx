import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaCartPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Cards = ({ product, cartProducts, setCartProducts }) => {
  const addToCart = (obj) => {
    let updatedProducts = [
      ...cartProducts,
      { ...obj, items: 1, disapleButton: true },
    ];
    let check = cartProducts.some((product) => {
      return obj.title == product.title;
    });
    if (!check) {
      setCartProducts(updatedProducts);
    } else {
      let updatedProducts = cartProducts.map((product) => {
        if (obj.title == product.title) {
          product.disapleButton = false;
          product.items++;
        }
        return product;
      });
      setCartProducts(updatedProducts);
    }
  };
  const deleteItem = (obj) => {
    let updatedProducts = cartProducts.filter((product) => {
      return obj.title != product.title;
    });
    setCartProducts(updatedProducts);
  };
  return (
    <Card style={{ width: "18rem" }} className="col-lg-3 col-md-4 col-sm-6">
      <Card.Img
        variant="top"
        src={product.image}
        className="m-auto p-2"
        style={{ width: "10rem", height: "10em" }}
      />
      <Card.Body>
        <Card.Title style={{ height: "2.5em" }} className="overflow-hidden">
          {product.title}
        </Card.Title>
        <Card.Text style={{ height: "4.9em" }} className="overflow-hidden">
          {product.description}
        </Card.Text>
        <div className="d-flex justify-content-between ">
          <Button
            variant="primary"
            style={{ fontSize: "1.2em" }}
            onClick={() => addToCart(product)}
          >
            <FaCartPlus />
          </Button>
          <Button
            variant="danger"
            style={{ fontSize: "1.2em" }}
            onClick={() => deleteItem(product)}
          >
            <MdDelete />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Cards;
