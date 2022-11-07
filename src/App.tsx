import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateLayout from "./views/protected";
import HomeView from "./views/protected/Home";
import LoginView from "./views/public/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <HomeView />,
      },
      {
        path: "/home",
        element: <HomeView />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginView />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
