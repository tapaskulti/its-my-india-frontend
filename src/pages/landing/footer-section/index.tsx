import { Mail, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
// import FacebookIcon from "../../../assets/svg/facebook-icon";
// import TwitterIcon from "../../../assets/svg/twitter-icon";
// import YoutubeIcon from "../../../assets/svg/youtube-icon";
// import LinkedInIcon from "../../../assets/svg/linkedin-icon";



export default function FooterSection() {

  return (

        <div className="bg-slate-200 pt-6">
      <section id="moto" className="mx-4 md:mx-8">
        <div className="mx-auto max-w-6xl text-sm font-normal text-black">
          
          

            <div className="flex justify-center text-center">
                <ul className="lg:flex lg:items-center lg:space-x-3 space-y-3 lg:space-y-0">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="about-author">About Author</Link></li>
                    <li><Link to="/the-project">The Project</Link></li>
                    <li><Link to="/the-book">The Book</Link></li>
                    <li><Link to="/articles">Articles</Link></li>
                    <li><Link to="/review">Review</Link></li>
                    <li><Link to="/contact-media">Contacts & Media</Link></li>
                </ul>
            </div>
            <div className="pt-10">
                <h3 className="text-left text-sm mb-3 text-black">
                    For inquiries, collaborations, or media requests, contact us at:
                </h3>
                <div className="">
                  <div className="md:flex md:items-center md:space-x-5 space-y-3 md:space-y-0">
                    <div className="flex items-center my-2"><PhoneCall className="lg:w-6 lg:h-4 w-5 h-4" /><h2>India: +91 77991 12264</h2></div>
                    <div className="flex items-center"><PhoneCall className="lg:w-6 lg:h-4 w-5 h-4" /><h2>USA: +1-408-230-1553</h2></div>
                  </div>
                  
                  <div className="flex items-center mt-2.5 md:mt-0">
                    <Mail className="lg:w-6 lg:h-4 w-5 h-4" />
                    <h2>
                      <a href="mailto:info@takshilafound.org" className="hover:text-slate-600">info@takshilafound.org</a>
                    </h2>
                  </div>
              </div>
            </div>
                <div>
                
                {/* <div className="mt-6">
                    <h2 className="mb-2">Follow Us on Social Media</h2>
                    <div className="flex space-x-5 text-sm">
                        <a href=""><FacebookIcon className="lg:w-6 lg:h-4 w-5 h-4 text-gray-200 hover:text-gray-500" /></a>
                        <a href=""><TwitterIcon className="lg:w-6 lg:h-4 w-5 h-4 text-gray-200 hover:text-gray-500" /></a>
                        <a href=""><LinkedInIcon className="lg:w-6 lg:h-4 w-5 h-4 text-gray-200 hover:text-gray-500" /></a>
                        <a href=""><YoutubeIcon className="lg:w-5 lg:h-5 w-5 h-4 text-gray-200 hover:text-gray-500" /></a>
                    </div>
                </div> */}

            </div>


          
        </div>
        
      </section>
      <div className="border border-slate-300 mt-4 py-3 text-center">&copy; copyright 2025. All Rgiths Reserved.</div>
    </div>
    

  );
}
