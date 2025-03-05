
import { Link } from "react-router-dom";



export default function Navbar() {

  return (

        <div className="mx-auto flex justify-between max-w-6xl py-7">
            <h2 className="text-xl text-gray-600 font-medium">Dr. Ryan Baidya</h2>
            <ul className="flex space-x-8 justify-between items-center text-gray-900 text-sm">
                <li><Link to="/" className="hover:text-[#7e9452]">Home</Link></li>
                <li><Link to="/about-us" className="hover:text-[#7e9452]">About Author</Link></li>
                <li><Link to="/the-movement" className="hover:text-[#7e9452]">The Movement</Link></li>
                <li><Link to="the-book" className="hover:text-[#7e9452]">The Book</Link></li>
                <li><Link to="contacts-media" className="hover:text-[#7e9452]">Contacts & Media</Link></li>
                <li><button className="bg-[#b8ce8d] px-2 py-2 text-sm rounded-lg text-white hover:bg-[#afc584]">Buy Now</button></li>
            </ul>
        </div>
  );
}
