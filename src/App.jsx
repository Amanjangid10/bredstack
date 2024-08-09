import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignIn";
import Modal from "./components/Modal";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/modal",
      element: <Modal />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
