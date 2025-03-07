import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import LandingPage from "./pages/landing";
import ErrorPage from "./pages/error-page";
import RootLayout from "./pages/root-layout";
import AboutAuthor from "./pages/about-author";
import ContactMedia from "./pages/contact-media";
import TheMovement from "./pages/the-movement"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about-author", element: <AboutAuthor /> },
      { path: "contact-media", element: <ContactMedia /> },
      { path: "the-movement", element: <TheMovement /> },
      { path: "success", element: <>Success</> },
      { path: "cancel", element: <>Failed</> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
