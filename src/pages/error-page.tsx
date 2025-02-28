import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8">
      <h3 className="text-3xl">No Page Found</h3>
      <Link
        to="/"
        className="flex w-full max-w-64 items-center justify-center rounded-full bg-blue-400 px-12 py-3 font-semibold capitalize text-white hover:bg-blue-500"
      >
        Go To Home Page
      </Link>
    </div>
  );
}
