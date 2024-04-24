import { useState } from "react";
import { FaPen } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import API_URL from "../utils/api";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${API_URL}/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
              Swal.fire({
                title: "Deleted!",
                text: "Your account has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="border py-12 px-16 rounded-xl border-accent">
      <div>
        <Link to="/">
          <button className="btn btn-warning mb-8">New User</button>
        </Link>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>@Email</th>
                <th>Gender</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.gender}</td>
                  <td>{user?.status}</td>
                  <td>
                    <Link to={`/update/${user._id}`}>
                      <button className="bg-purple-600 p-2 rounded mr-4">
                        <FaPen className="text-2xl text-black" />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="p-2 bg-red-700 rounded text-black"
                    >
                      <MdDeleteSweep className="text-2xl" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
