import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { RootState } from "../redux/store/store";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const destination = useSelector((state: RootState) => state.destinations.destext)

  if (!destination) {
    toast.error("Vui lòng nhập đầy đủ thông tin trước khi tiếp tục!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
    });
    return <Navigate to="/" replace />;
  }

  return children; 
};

export default ProtectedRoute;
