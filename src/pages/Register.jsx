import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const Register = () => {
  const { user, createUser } = useAuthContext();

  const navigator = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        navigator("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-8">Register</h1>
      <Link to={"/login"} className="flex items-center justify-center mb-8">
        <button className="btn btn-success">Login</button>
      </Link>
      <form
        onSubmit={handleRegister}
        className="max-w-2xl mx-auto border border-accent py-12 px-16 rounded-xl"
      >
        <div>
          <label className="text-xl block mb-3 font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input input-accent w-full"
            placeholder="Name"
          />
        </div>
        <div className="mt-5">
          <label className="text-xl block mb-3 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input input-accent w-full"
            placeholder="@Email"
          />
        </div>
        <div className="mt-5">
          <label
            className="text-xl block mb-3 font-semibold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="input input-accent w-full"
            placeholder="Password"
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-accent w-full mt-6"
        />
      </form>
    </div>
  );
};

export default Register;
