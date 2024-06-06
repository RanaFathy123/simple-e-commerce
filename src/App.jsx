import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import AdminPageNotFound from "./pages/admin/AdminPageNotFound";
import Layout from "./Routes/Layout";
import AdminLayout from "./Routes/AdminLayout";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  const [ifUserIdChanged, setIfUserIdChanged] = useState(false);
  const [userLogged, setUserLogged] = useState({});
  const [ifUserChanged, setIfUserChanged] = useState(false);
  const [ifProductChanged, setIfProductChanged] = useState(false);

  const getUsers = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:3000/users",
      });
      const usersData = response.data;
      setUsers(usersData);
    } catch (err) {
      console.log(err);
    }
  };
  const getProducts = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      });
      const productsData = response.data;
      setProducts(productsData);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUserId = () => {
    if (localStorage.s) {
      const updatedUserId = localStorage.s;
      setUserId(updatedUserId);
    } else {
      setUserId("");
    }
  };
  const getUserLogged = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/users/${userId}`,
      });
      const userLoggedData = response.data;
      setUserLogged(userLoggedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProducts();
  }, [ifProductChanged]);
  useEffect(() => {
    getUsers();
  }, [ifUserChanged]);

  useEffect(() => {
    getUserLogged();
  }, [userId, ifUserChanged]);

  useEffect(() => {
    updateUserId();
  }, [ifUserIdChanged]);

  return (
    <div>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout
              products={products}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
              userId={userId}
              setUserId={setUserId}
              ifUserIdChanged={ifUserIdChanged}
              setIfUserIdChanged={setIfUserIdChanged}
              users={users}
              userLogged={userLogged}
              ifUserChanged={ifUserChanged}
              setIfUserChanged={setIfUserChanged}
            />
          }
        />
        <Route
          path="/admin/*"
          element={
            localStorage.t == "ghnj54kk" ? (
              <AdminLayout
                products={products}
                users={users}
                setUsers={setUsers}
                ifUserChanged={ifUserChanged}
                setIfUserChanged={setIfUserChanged}
                ifProductChanged={ifProductChanged}
                setIfProductChanged={setIfProductChanged}
                userLogged={userLogged}
              />
            ) : (
              <AdminPageNotFound />
            )
          }
        />
      </Routes>
    </div>
  );
};

export default App;
