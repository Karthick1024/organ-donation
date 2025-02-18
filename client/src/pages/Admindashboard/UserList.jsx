import React, { useState } from "react";
import "./css/userlist.css";

const dummyUsers = [
    { id: 1, username: "JohnDoe", age: 28, gender: "Male", mobile: "9876543210" },
    { id: 2, username: "JaneSmith", age: 32, gender: "Female", mobile: "8765432109" },
    { id: 3, username: "MichaelBrown", age: 40, gender: "Male", mobile: "7654321098" },
];

const UserList = () => {
    const [users, setUsers] = useState(dummyUsers);

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
        alert("User deleted successfully!");
    };

    return (
        <div className="user-list-container">
            <h2>Registered Users</h2>
            <table className="user-list-table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Mobile Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="user-list-row">
                            <td>{user.username}</td>
                            <td>{user.age}</td>
                            <td>{user.gender}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
