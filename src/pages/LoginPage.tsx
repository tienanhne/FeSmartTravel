/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useUser } from "../context/UserContext";
import LoginForm from "../components/Login/LoginForm";
import RegisterForm from "../components/Login/RegisterForm";
import ForgetPassword from "../components/Login/ForgetPassowrd";
import { IoCloseOutline } from "react-icons/io5";
import { LoginInput } from "../redux/type";
import { login } from "../Api/auth";
import { useDispatch } from "react-redux";
import { fetchUserProfile } from "../components/UserDropdown/UserDropdown";

const LoginPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [forget, setForget] = useState(false);
  const { setOrderPopup } = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { mutate: loginUser, isLoading } = useMutation(
    async (loginData: LoginInput) => await login(loginData),
    {
      onSuccess: async (data) => {
        localStorage.setItem("accessToken", data.accessToken);
        Cookies.set("refreshToken", data.refreshToken, { expires: 7 });
        await fetchUserProfile(dispatch);

        setOrderPopup(false);
        navigate("/");
      },
      onError: (error: any) => {
        alert(error.message || "Login failed. Please try again.");
      },
    }
  );

  const handleLogin = (email: string, password: string) => {
    loginUser({ email, password });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const toggleForgetPassword = () => {
    setForget(!forget);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-300 bg-opacity-20 z-50">
      <div
        className="relative w-full max-w-md p-6 space-y-8 bg-white shadow-lg rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <IoCloseOutline
            className="text-2xl cursor-pointer text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            onClick={() => setOrderPopup(false)}
          />
        </div>
        {!forget ? (
          <>
            <h2 className="text-2xl font-bold text-center">
              {isLogin ? "Đăng Nhập" : "Đăng Ký"}
            </h2>
            <div className="relative w-full h-80 overflow-hidden">
              <div
                className="absolute inset-0 w-full h-full flex transition-transform duration-500 transform"
                style={{
                  transform: isLogin ? "translateX(0)" : "translateX(-100%)",
                }}
              >
                <div className="w-full flex-shrink-0">
                  <LoginForm
                    onLogin={handleLogin}
                    onForgotPassword={toggleForgetPassword}
                  />
                </div>
                <div className="w-full flex-shrink-0">
                  <RegisterForm />
                </div>
              </div>
            </div>
            <button
              onClick={toggleForm}
              className="w-full px-4 py-2 font-bold text-secondary rounded-md focus:outline-none transition-all"
            >
              {isLogin ? "Đăng Ký" : "Tôi đã có tài khoản"}
            </button>
          </>
        ) : (
          <ForgetPassword onCancel={toggleForgetPassword} />
        )}
      </div>
    </div>
  );
};

export default LoginPage;
