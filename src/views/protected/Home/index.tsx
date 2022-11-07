import { authStateSelector, logout } from "../../../redux/reducers/auth";
import { useCustomDispatch, useCustomSelector } from "../../../redux/untils";

const HomeView = (): JSX.Element => {
  const { user } = useCustomSelector(authStateSelector);
  const dispatch = useCustomDispatch();
  const onLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      Hello {user} <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default HomeView;
