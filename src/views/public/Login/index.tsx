import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useCustomDispatch, useCustomSelector } from "../../../redux/untils";
import { isLoggedSelector, login, setLoginState } from "../../../redux/reducers/auth";


export default function LoginView(): JSX.Element {
  const isLogged = useCustomSelector(isLoggedSelector);
  const dispatch = useCustomDispatch();
  const onLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(login());
  };
  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged === "true") {
      dispatch(setLoginState(true));
    } else{
        dispatch(setLoginState(false));
    }
  }, []);
  if (isLogged) return <Navigate to={"/"} />;
  return (
    <div>
      <button onClick={onLogin}>LOGIN</button>
    </div>
  );
}
