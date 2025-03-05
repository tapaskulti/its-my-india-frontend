import { Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";



export default function FooterSection() {

  return (

        <div className="bg-[#303c42] pt-16">
      <section id="moto" className="mx-4 md:mx-8">
        <div className="mx-auto max-w-6xl text-xs font-normal text-white">
          
          <div className="flex justify-between items-start">

            <div>
                <ul className="leading-8">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="">About Author</Link></li>
                    <li><Link to="">The Movement</Link></li>
                    <li><Link to="">The Book</Link></li>
                    <li>Contacts & Media</li>
                </ul>
            </div>
            <div>
                <h3 className="text-center text-sm mb-5 text-white/70">
                    For inquiries, collaborations, or media requests, contact us at:
                </h3>
                <div className="flex items-center">
                    <Mail className="lg:w-6 lg:h-4 w-5 h-4" /><h2><a href="mailto:info@takshilafound.org" className="hover:text-white/70">info@takshilafound.org</a><br /></h2>
                </div>
<div className="flex items-center my-3"><PhoneCall className="lg:w-6 lg:h-4 w-5 h-4" /><h2>India: +91 77991 12264</h2></div>
<div className="flex items-center"><PhoneCall className="lg:w-6 lg:h-4 w-5 h-4" /><h2>USA: +1-408-230-1553</h2></div>

            </div>
        </div>

          <div className="py-6 text-center">&copy; copyright 2025. All Rgiths Reserved.</div>
        </div>
        
      </section>
    </div>
    

  );
}
