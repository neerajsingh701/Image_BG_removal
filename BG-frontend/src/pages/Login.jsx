import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const { handleLogin } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="max-w-md mx-auto mt-20 mb-20 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 cursor-pointer text-white py-2 rounded hover:bg-blue-700  hover:scale-105 transition-all duration-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
