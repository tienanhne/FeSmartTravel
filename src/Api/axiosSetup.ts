import axios from "axios";
import Cookies from "js-cookie";
import { refreshAccessToken } from "./auth";

// Function to set up Axios interceptors and Authorization header
export const axiosSetup = () => {
  const accessToken = localStorage.getItem("accessToken");
  
  if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  // Axios interceptor for token expiration
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const data = await refreshAccessToken();
          localStorage.setItem("accessToken", data.accessToken);
          originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`;
          return axios(originalRequest);  // Retry original request with new token
        } catch (err) {
          // If refresh fails, clear tokens and redirect
          localStorage.removeItem("accessToken");
          Cookies.remove("refreshToken");
          window.location.href = "/login";
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
  );
};
