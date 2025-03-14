import { createBrowserRouter, RouterProvider } from "react-router";

// Pages
import LandingPage from "./pages/landing";
import ErrorPage from "./pages/error-page";
import RootLayout from "./pages/root-layout";
import AboutAuthor from "./pages/about-author";
import ContactMedia from "./pages/contact-media";
import TheProject from "./pages/the-project"
import TheBook from "./pages/the-book";
import Review from "./pages/review";
import ResourcesArticles from "./pages/resources-articles";
import ItsMyIndia from "./pages/its-my-india";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about-author", element: <AboutAuthor /> },
      { path: "contact-media", element: <ContactMedia /> },
      { path: "the-project", element: <TheProject /> },
      { path: "the-book", element: <TheBook /> },
      { path: "its-my-india", element: <ItsMyIndia /> },
      { path: "resources-articles", element: <ResourcesArticles /> },
      { path: "review", element: <Review /> },
      { path: "success", element: <>Success</> },
      { path: "cancel", element: <>Failed</> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
