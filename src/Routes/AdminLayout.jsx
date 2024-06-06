import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Products from "../pages/admin/products/Products";
import AdminHeader from "../components/admin/AdminHeader";
import Users from "./../pages/admin/users/Users";
import AddProduct from "./../pages/admin/products/AddProduct";
import EditProduct from "./../pages/admin/products/EditProduct";
import EditUser from "./../pages/admin/users/EditUser";
import AdminPageNotFound from "../pages/admin/AdminPageNotFound";
import ProductDetails from "../pages/admin/products/ProductDetails";
import UserProfile from "../pages/admin/users/UserProfile";
import AddUser from "../pages/admin/users/AddUser";

const AdminLayout = ({
  products,
  users,
  setUsers,
  ifProductChanged,
  setIfProductChanged,
  ifUserChanged,
  setIfUserChanged,
}) => {
  return (
    <div>
      <AdminHeader />
      <Routes>
        <Route
          path="/"
          element={<AdminDashboard products={products} users={users} />}
        />
        <Route
          path="/products"
          element={
            <Products
              products={products}
              ifProductChanged={ifProductChanged}
              setIfProductChanged={setIfProductChanged}
            />
          }
        />
        <Route
          path="/addproduct"
          element={
            <AddProduct
              ifProductChanged={ifProductChanged}
              setIfProductChanged={setIfProductChanged}
            />
          }
        />
        <Route
          path="/editproduct/:productId"
          element={
            <EditProduct
              ifProductChanged={ifProductChanged}
              setIfProductChanged={setIfProductChanged}
            />
          }
        />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route
          path="/users"
          element={
            <Users
              users={users}
              setUsers={setUsers}
              ifUserChanged={ifUserChanged}
              setIfUserChanged={setIfUserChanged}
            />
          }
        />
        <Route
          path="/adduser"
          element={
            <AddUser
              ifUserChanged={ifUserChanged}
              setIfUserChanged={setIfUserChanged}
            />
          }
        />
        <Route
          path="/edituser/:userId"
          element={
            <EditUser
              ifUserChanged={ifUserChanged}
              setIfUserChanged={setIfUserChanged}
            />
          }
        />
        <Route path="/profile/:userId" element={<UserProfile />} />
        <Route path="*" element={<AdminPageNotFound />} />
      </Routes>
    </div>
  );
};

export default AdminLayout;
