import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Registration } from "../service/API";

function Register() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  

  const Register = async (e) => {
    e.preventDefault();
    try {
      await Registration(
        username,
        password,
        name,
        email,
        phone_number,
        address, 
        image
      );
      navigate("/login");
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error);
      }
    }
  };

  return (
    <div className="flex flex-col item-center justify-center min-h-screen py-2 ">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 ">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-violet-400 pb-5">Lala</span>
              <b>Rent</b>
            </div>
            <div className="py-10">
              <h2 className="test-3xl font-bold text-violet-400 mb-2">
                Registration
              </h2>
              <div className="border-2 w-10 border-violet-400 inline-block mb-2"></div>
              <p className="mb-5 text-red-600">{error}</p>
              <div className="flex flex-col item-center">
                <form >
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      onChange={(e) => setUserName(e.target.value)}
                      value={username}
                      name="floating_username"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_username"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Username
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="password"
                      name="floating_password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="floating_password"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_password"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_name"
                      id="floating_name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>

                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="texty"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="email"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="number"
                      name="address"
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      for="floating_last_name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone Number
                    </label>
                  </div>

                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_phone"
                      id="floating_phone"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                    <label
                      for="floating_phone"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Address
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-6 group">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      for="file_input"
                    >
                      Upload file
                    </label>
                  </div>
                  {/* <div class="relative z-0 w-full mb-6 group"></div>
                    <input
                      class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      aria-describedby="file_input_help"
                      id="file_input"
                      type="file"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <p
                      class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                      id="file_input_help"
                    >
                      SVG, PNG, JPG or GIF (MAX. 800x400px).
                    </p> */}

                  <div class="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_phone"
                      id="floating_phone"
                      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                      required
                    />
                    <label
                      for="floating_phone"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Image
                    </label>
                  </div>

                  <button
                    onClick={Register}
                    type="submit"
                    class="bg-violet-700 hover:bg-violet-800 text-white transitionfocus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Register;
