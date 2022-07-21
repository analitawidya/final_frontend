import { useState } from "react"; 
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";



const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
      const navigate = useNavigate();
      const isLogin = Cookies.get("refreshToken");

      const Logout = async () => {
        try {
          await axios.delete("http://localhost:8000/logout");
          navigate("/");
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
          }
        }
      };

  return (
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div class="container-lg flex flex-wrap justify-between items-center mx-auto">
        <Link as={Link} to="/">
          <div className="text-left font-bold ml-10">
            <span className="text-violet-400 text-4xl">Lala</span>
            <b className="text-4xl">Rent</b>
          </div>
        </Link>
        <nav>
          <section className="MOBILE-MENU flex lg:hidden">
            <div
              className="HAMBURGER-ICON space-y-2"
              onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>

            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              {" "}
              <div
                className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
              >
                <svg
                  className="h-8 w-8 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </div>
              {isLogin ? (
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/">Home</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/admin">Admin</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/profile">Profile</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a onClick={Logout}>Logout</a>
                  </li>
                </ul>
              ) : (
                <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/">Home</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/login">Login</a>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <a href="/register">Register</a>
                  </li>
                </ul>
              )}
            </div>
          </section>

          {isLogin ? (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <ul className="DESKTOP-MENU hidden space-x-8 lg:flex mt-4">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/admin">Admin</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li></li>
              </ul>
              <button
                className="DESKTOP-MENU hidden space-x-8 lg:flex mt-2 bg-violet-700 hover:bg-violet-800 text-white transitionfocus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-10"
                onClick={Logout}
                type="submit"
                
              >
                Logout
              </button>
            </div>
          ) : (
            <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          )}
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
      </div>
    </nav>
  );
};

export default Header;
