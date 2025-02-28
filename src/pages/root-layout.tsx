import { Outlet } from "react-router";
import Navbar from "./landing/navbar";
import FooterSection from "./landing/footer-section";

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <header>
      <nav className="h-24"><Navbar /></nav>
      </header>
      <Outlet />
      <footer><FooterSection /></footer>
    </div>
  );
}
