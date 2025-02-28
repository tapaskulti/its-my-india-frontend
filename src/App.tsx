import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import LandingPage from "./pages/landing";
import ErrorPage from "./pages/error-page";
import RootLayout from "./pages/root-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "success", element: <>Success</> },
      { path: "cancel", element: <>Failed</> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
