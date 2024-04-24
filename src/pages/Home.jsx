import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import API_URL from "../utils/api";
const Home = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const email = e.target.email.value;
    const gender = e.target.gender.value;
    const status = e.target.status.value;

    const newUser = { name, email, gender, status };

    fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "SUCCESS!",
            text: "Data Inserted Successfully!",
            icon: "success",
          });
        }
        form.reset();
      });
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-16 border border-accent rounded-xl">
      <h1 className="text-4xl font-bold text-center mb-4">New User</h1>
      <p className="text-center mb-10">
        Use the below form to create a new account
      </p>
      <Link to="/users">
        <button className="btn btn-primary mb-8">All Users</button>
      </Link>
      <form onSubmit={handleAddUser}>
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
              defaultChecked
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
              defaultChecked
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

export default Home;
