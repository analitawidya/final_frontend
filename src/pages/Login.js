import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginAPI } from "../service/API";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();

    try {
      await LoginAPI(username, password);
      navigate("/");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }
    }
  };
  return (
    <div className="flex flex-col item-center justify-center min-h-screen py-2 ">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center ">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-xl">
          <div className="w-3/5 p-5 flex-1 lg:flex justify-end items-end">
            <div className="text-left font-bold">
              <span className="text-violet-400">Lala</span>
              <b>Rent</b>
            </div>
            <div className="py-10 pr-10">
              <h2 className="test-3xl font-bold text-violet-400 mb-2">
                Login Section
              </h2>
              <div className="border-2 w-10 border-violet-400 inline-block mb-2"></div>
              <p className="mb-5 text-red-600">{error}</p>
              <div className="flex flex-col item-center">
                <form>
                  <div class="mb-6">
                    <label
                      for="username"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    onClick={Login}
                    type="submit"
                    class="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="hidden flex-1 lg:flex justify-end items-end">
            <div className=" bg-green-500 text-white  py-36 px-12 ">
              <p>Get Ready</p>
              <p>To</p>
              <p>Advertise Your Property</p>
              <div className="border-2 w-10 border-white inline-block mb-2"></div>
              <div className="mb-1">
                <Link
                  className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-1 rounded-lg transition"
                  to="/register"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
