import React, { useState } from "react";
import AddServices from "../DashBoard/Add";
import Services from "../Services/Services";
import ManageOrder from "./ManageOrder";
import "./AdminDashBoard.css";

const AdminDashBoard = () => {
    const [control, setControl] = useState("addServices");


    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h6>Dashboard</h6>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("add")}
                                        className="admin-menu p-2"
                                    >
                                        Add Services
                                    </li>

                                    <li
                                        onClick={() => setControl("services")}
                                        className="admin-menu p-2"
                                    >
                                        All Services
                                    </li>
                                    <li
                                        onClick={() => setControl("manageOrder")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Bookings
                                    </li>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-9  text-center">


                            {control === "services" && <Services></Services>}
                            {control === "manageOrder" && <ManageOrder></ManageOrder>}
                            {control === "add" && <AddServices></AddServices>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashBoard;
