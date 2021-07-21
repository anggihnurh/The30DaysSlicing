import { useState } from "react";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="py-10">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="w-2/12 flex items-center">
            <div className="w-10 h-10 bg-gray-500 rounded-sm flex items-center justify-center mr-4 shadow-2xl">
              E
            </div>
            Epictetus
          </div>
          <div className="w-8/12">
            <ul className="space-x-14 flex items-center">
              <li>
                <a href="#" className="hover:underline">
                  UI Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Front End
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Back End
                </a>
              </li>
              <li className="relative">
                <a
                  className="hover:underline cursor-pointer flex items-center"
                  onClick={() => setDropdown(!dropdown)}
                >
                  Lainnya
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 rounded">
                    <li>
                      <a href="#" className=" py-3 px-4 flex border-b/0 ">
                        Internet
                      </a>
                    </li>
                    <li>
                      <a href="#" className=" py-3 px-4 flex border-b/0 ">
                        Books
                      </a>
                    </li>
                    <li>
                      <a href="#" className=" py-3 px-4 flex border-b/0 ">
                        Open Source
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="w-2/12">
            <input
              className="bg-gray-700 py-2 px-6 w-full rounded-full bg-search pl-12"
              placeholder="Search"
            ></input>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
