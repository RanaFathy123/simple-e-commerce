import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SideBar from "../../../components/admin/SideBar";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const { userId } = useParams();

  const getUserProfile = async () => {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:3000/users/${userId}`,
      });
      const data = response.data;
      setUserProfile(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <SideBar />

        <section
          className="col-md-10 vh-100"
          style={{ backgroundColor: "#f4f5f7" }}
        >
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-lg-6 mb-4 mb-lg-0">
                <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                  <div className="row g-0">
                    <div
                      className="col-md-4  text-center"
                      style={{
                        borderTopLeftRadius: ".5rem",
                        borderBottomLeftRadius: ".5rem",
                      }}
                    >
                      <img
                        src={userProfile.image}
                        alt="Avatar"
                        className="img-fluid my-5"
                        style={{ width: "90px" }}
                      />
                      <h5>{`${userProfile.firstname} ${userProfile.lastname}`}</h5>                     
                    </div>
                    <div className="col-md-8">
                      <div className="card-body p-4">
                        <h6>Information</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-7 mb-3">
                            <h6>Email</h6>
                            <p className="text-muted">{userProfile.email}</p>
                          </div>
                          <div className="col-5 mb-3">
                            <h6>Phone</h6>
                            <p className="text-muted">{userProfile.phonenumber}</p>
                          </div>
                        </div>
                        <h6>More Information</h6>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                          <div className="col-6 mb-3">
                            <h6>City</h6>
                            <p className="text-muted">{userProfile.city}</p>
                          </div>
                          <div className="col-6 mb-3">
                            <h6>Gender</h6>
                            <p className="text-muted">{userProfile.gender}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;
