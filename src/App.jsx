import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignIn";

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
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
