import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import API_URL from "../utils/api";

const UpdateUser = () => {
  const user = useLoaderData();
  const { _id, name, email, gender, status } = user;

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const status = e.target.status.value;

    const updatedUser = { name, email, gender, status };

    fetch(`${API_URL}/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "SUCCESS!",
            text: "Your account has been updated!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="max-w-2xl mx-auto py-12 px-16 border border-accent rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-4">Update Users</h1>
      <p className="text-center mb-10">
        Use the below form to update your account
      </p>
      <div className="flex items-center justify-between">
        <Link to="/">
          <button className="btn btn-primary mb-8">New Users</button>
        </Link>
        <Link to="/users">
          <button className="btn btn-primary mb-8">All Users</button>
        </Link>
      </div>
      <form autoComplete="true" onSubmit={handleUpdateUser}>
        {/* Row */}
        <div>
          <label className="block text-xl font-semibold mb-3" htmlFor="name">
            Name
          </label>
          <input
            autoComplete="true"
            type="text"
            name="name"
            id="name"
            placeholder="Enter Name"
            defaultValue={name}
            className="input input-accent w-full focus:border-none"
          />
        </div>
        {/* Row */}
        <div className="mt-5">
          <label className="block text-xl font-semibold mb-3" htmlFor="email">
            Email
          </label>
          <input
            autoComplete="true"
            type="text"
            name="email"
            id="email"
            placeholder="Enter Email"
            defaultValue={email}
            className="input input-accent w-full focus:border-none"
          />
        </div>
        {/* Row */}
        <div className="flex items-center gap-5 mt-8">
          <p className="block text-xl font-semibold ">Gender</p>
          <label className="flex items-center gap-2 font-medium" htmlFor="male">
            Male
            <input
              type="radio"
              name="gender"
              id="male"
              value="Male"
              defaultChecked={gender === "Male"}
              className="radio radio-accent"
            />
          </label>
          <label
            className="flex items-center gap-2 font-medium "
            htmlFor="female"
          >
            Female
            <input
              type="radio"
              name="gender"
              id="female"
              value="Female"
              defaultChecked={gender === "Female"}
              className="radio radio-accent"
            />
          </label>
        </div>
        {/* Row */}
        <div className="flex items-center gap-5 mt-8">
          <p className="block text-xl font-semibold ">Status</p>
          <label
            className="flex items-center gap-2 font-medium"
            htmlFor="active"
          >
            Active
            <input
              type="radio"
              name="status"
              id="active"
              value="Active"
              defaultChecked={status === "Active"}
              className="radio radio-accent"
            />
          </label>
          <label
            className="flex items-center gap-2 font-medium "
            htmlFor="inactive"
          >
            Inactive
            <input
              type="radio"
              name="status"
              id="inactive"
              value="Inactive"
              defaultChecked={status === "Inactive"}
              className="radio radio-accent"
            />
          </label>
        </div>
        <button
          type="submit"
          className="btn btn-accent w-full mt-6 text-xl font-semibold"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
