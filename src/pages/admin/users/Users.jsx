import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../../components/admin/SideBar";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Users = ({ users, setUsers, ifUserChanged, setIfUserChanged }) => {
  const makeAdmin = (obj) => {
    let updatedUsers = users.map((user) => {
      if (user.id == obj.id) {
        if (obj.role == "member") {
          user.role = "admin";
        } else {
          user.role = "member";
        }
      }
      return user;
    });
    axios({
      method: "patch",
      url: `http://localhost:3000/users/${obj.id}`,
      data: {
        role: obj.role,
      },
    })
      .then((res) => res.data)
      .catch((err) => console.log(err));
    setIfUserChanged(!ifUserChanged);
    setUsers(updatedUsers);
  };
  const deleteUser = (obj) => {
    Swal.fire({
      title: `Do you want to save the changes ${obj.firstname}`,
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Delete",
      denyButtonText: `Don't Delete`,
      icon: "question",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: `http://localhost:3000/users/${obj.id}`,
        })
          .then((response) => response.data)
          .catch((err) => console.log(err));
        setIfUserChanged(!ifUserChanged);
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
            <Link to="/admin/adduser">
              <button className="btn btn-primary mt-5 mb-3">Add User</button>
            </Link>
            <h3 className="text-center m-3">Users</h3>
            <div className="row  container" style={{ height: "100vh" }}>
              <div className="container">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">User Name</th>
                        <th scope="col">Role</th>
                        <th scope="col" className="text-center">
                          Operation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td>
                            <p className="fw-normal mb-1">{user.username}</p>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{user.role}</p>
                          </td>
                          <td>
                            <div className="d-flex justify-content-evenly ">
                              <Link to={`/admin/profile/${user.id}`}>
                                <button
                                  type="button"
                                  className="btn btn-sm btn-primary"
                                  style={{ marginRight: "0.5em" }}
                                >
                                  View
                                </button>
                              </Link>
                              <Link to={`/admin/edituser/${user.id}`}>
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
                                onClick={() => deleteUser(user)}
                              >
                                Delete
                              </button>
                              <button
                                type="button"
                                className={
                                  user.role == "admin"
                                    ? "btn btn-sm btn-secondary"
                                    : "btn btn-sm btn-success"
                                }
                                style={{ marginRight: "0.5em" }}
                                onClick={() => makeAdmin(user)}
                              >
                                {user.role == "admin"
                                  ? "Remove Admin"
                                  : "Make Admin"}
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

export default Users;
