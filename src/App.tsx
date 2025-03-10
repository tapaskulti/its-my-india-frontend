import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import LandingPage from "./pages/landing";
import ErrorPage from "./pages/error-page";
import RootLayout from "./pages/root-layout";
import AboutAuthor from "./pages/about-author";
import ContactMedia from "./pages/contact-media";
import TheMovement from "./pages/the-movement"
import TheBook from "./pages/the-book";
import ResourcesArticles from "./pages/resources-articles";

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
      { path: "the-book", element: <TheBook /> },
      { path: "resources-articles", element: <ResourcesArticles /> },
      { path: "success", element: <>Success</> },
      { path: "cancel", element: <>Failed</> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
