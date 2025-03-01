
import { Link } from "react-router-dom";



export default function Navbar() {

  return (

        <div className="mx-auto flex justify-between max-w-3xl py-10">
            <h2 className="text-lg text-gray-600">Dr. Ryan Baidya</h2>
            <ul className="flex space-x-6 justify-between items-start text-gray-600 text-sm">
                <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
                <li><Link to="/about-us" className="hover:text-gray-900">About Author</Link></li>
                <li><Link to="/the-movement" className="hover:text-gray-900">The Movement</Link></li>
                <li><Link to="the-book" className="hover:text-gray-900">The Book</Link></li>
                <li><Link to="contacts-media" className="hover:text-gray-900">Contacts & Media</Link></li>
            </ul>
        </div>
  );
}
