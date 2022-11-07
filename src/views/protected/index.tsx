import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { authStateSelector, setLoginState } from "../../redux/reducers/auth";
import { useCustomDispatch, useCustomSelector } from "../../redux/untils";

const PrivateLayout = (): JSX.Element => {
  const { isLogged } = useCustomSelector(authStateSelector);
  const dispatch = useCustomDispatch();
  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged === "true") {
      dispatch(setLoginState(true));
    }
  }, []);
  if (!isLogged) return <Navigate to={"/login"} />;
  return <Outlet />;
};

export default PrivateLayout;
