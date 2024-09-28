// api/auth.ts
import axios from "axios";
import Cookies from "js-cookie";
import { LoginInput, LoginResponse } from "../redux/type";


// API call for login
export const login = async (loginInput: LoginInput): Promise<LoginResponse["result"]> => {
  const response = await axios.post<LoginResponse>("http://localhost:8080/identity/auth/login", loginInput);
  
  if (response.data.code === 0) {
    return response.data.result; // Return the accessToken, refreshToken, and type
  } else {
    throw new Error(response.data.message); // Throw error if login fails
  }
};

// API call for refreshing access token
export const refreshAccessToken = async (): Promise<LoginResponse["result"]> => {
  const refreshToken = Cookies.get("refreshToken");
  if (!refreshToken) {
    throw new Error("No refresh token available");
  }

  const response = await axios.post<LoginResponse>("http://localhost:8080/identity/auth/refresh-token", {
    token: refreshToken,
  });

  if (response.data.code === 0) {
    return response.data.result;
  } else {
    throw new Error("Failed to refresh token");
  }
};
