import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import Shop from "../pages/shop/Shop";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import MainCart from "../pages/cart/MainCart";
import Footer from "../components/Footer";
import PageNotFound from "../pages/PageNotFound";
import UserProfile from "../pages/user/UserProfile";
import EditUserProfile from "../pages/user/EditUserProfile";

const Layout = ({
  products,
  cartProducts,
  setCartProducts,
  userId,
  setUserId,
  ifUserIdChanged,
  setIfUserIdChanged,
  users,
  userLogged,
  ifUserChanged,
  setIfUserChanged,
}) => {
  return (
    <div>
      <Header
        cartProducts={cartProducts}
        userId={userId}
        setUserId={setUserId}
        ifUserIdChanged={ifUserIdChanged}
        setIfUserIdChanged={setIfUserIdChanged}
        userLogged={userLogged}
        setCartProducts={setCartProducts}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={
            <SignUp
              users={users}
              ifUserChanged={ifUserChanged}
              setIfUserChanged={setIfUserChanged}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              userId={userId}
              setUserId={setUserId}
              ifUserIdChanged={ifUserIdChanged}
              setIfUserIdChanged={setIfUserIdChanged}
              users={users}
            />
          }
        />
        <Route
          path="/profile"
          element={<UserProfile userLogged={userLogged} />}
        />
        <Route
          path="/edit/userprofile/:userId"
          element={
            <EditUserProfile
              userLogged={userLogged}
              ifUserChanged={ifUserChanged}
              setIfUserChanged={setIfUserChanged}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <MainCart
              cartProducts={cartProducts}
              setCartProducts={setCartProducts}
            />
          }
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
