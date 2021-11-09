import Dropdown from "@restart/ui/esm/Dropdown";
import React, { useEffect, useState } from "react";
import { DropdownButton, Table } from "react-bootstrap";

const ManageOrder = () => {
    const [bookings, setBookings] = useState([]);

    const [status, setStatus] = useState("");
    const [control, setControl] = useState(false);
    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    console.log(status);
    useEffect(() => {
        fetch("http://hidden-tundra-68704.herokuapp.com/allBookings")
            .then((res) => res.json())
            .then((data) => setBookings(data));
    }, []);

    // const status = "apporved";
    const handleUpdate = (id) => {
        fetch(`http://hidden-tundra-68704.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };
    const handleDelete = (id) => {
        fetch(`http://hidden-tundra-68704.herokuapp.com/deleteBooking/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id);
    };

    return (
        <div className="container">
            <h1>All Bookings {bookings.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Title</th>
                        <th>Event description</th>
                        <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {bookings?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.description}</td>
                            <td>{pd.image}</td>
                            <td>
                                {/* <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={pd.status}
                                /> */}
                                <DropdownButton id="dropdown-basic-button" title="Status" onChange={handleStatus}

                                    defaultValue={pd.status}>
                                    <Dropdown.Item value="pending">pending</Dropdown.Item>
                                    <Dropdown.Item value="apporved">apporved</Dropdown.Item>

                                </DropdownButton>
                            </td>
                            <button className="btn bg-danger p-2" onClick={() => handleDelete(pd?._id)}>Delete</button>
                            <button
                                onClick={() => handleUpdate(pd._id)}
                                className="btn bg-success p-2"
                            >
                                Update
                            </button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageOrder;
