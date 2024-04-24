import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const Login = () => {
  const { loginUser, googleLogin } = useAuthContext();
  const navigator = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        navigator("/");
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        navigator("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-8">Login</h1>
      <Link to={"/register"} className="flex items-center justify-center mb-8">
        <button className="btn btn-success">Register</button>
      </Link>
      <form
        onSubmit={handleLogin}
        className="max-w-2xl mx-auto border border-accent py-12 px-16 rounded-xl"
      >
        <div>
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
          value="Login"
          className="btn btn-accent w-full mt-6"
        />
      </form>
      <div className="max-w-xl mx-auto">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-accent w-full mt-6"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
