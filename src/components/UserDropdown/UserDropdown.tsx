/* eslint-disable prefer-const */
/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useUser } from "../../context/UserContext";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Dispatch, UnknownAction } from "redux";
import { setAccount } from "../Login/userSlice";
import { useSelector } from "react-redux";
import { State } from "../../redux/store/store";

export const fetchUserProfile = async (dispatch: Dispatch<UnknownAction>) => {
  let headers = {
    "Accept": "application/json",
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Credentials': 'true'
    
};
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(
      "http://localhost:8888/api/v1/profile/users/my-profile",
      {
        headers: {
          ...headers,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (response.status == 200) {
      console.log(response);
      dispatch(setAccount({ account: response.data.result }));
    }
  } catch (error) {
    console.error("Failed to fetch user profile", error);
  }
};

const UserDropdown: React.FC = () => {
  const { logout } = useUser();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { account } = useSelector((state: State) => state.user);

  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    fetchUserProfile(dispatch);
  }, []);

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-2 focus:outline-none"
        onClick={toggleDropdown}
      >
        <FaUserCircle className="text-3xl text-primary" />
        <span className="text-sm dark:text-white text-primary">
          {account ? `${account.firstName} ${account.lastName}` : "User"}
        </span>
      </button>
      {dropdownOpen && (
        <div className="absolute dark:text-primary right-[-10px] mt-2 w-40 bg-white rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log("Edit Profile")}
            >
              Edit Profile
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={logout}
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;

