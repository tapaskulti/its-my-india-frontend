import { PhoneCall } from "lucide-react";
import FacebookIcon from "../../assets/svg/facebook-icon";
import TwitterIcon from "../../assets/svg/twitter-icon";
import YoutubeIcon from "../../assets/svg/youtube-icon";


export default function ContactMedia() {
  return (
    <div className="bg-white py-16">
      <section id="moto" className="mx-4 flex md:mx-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
        <h2 className="text-2xl">Get in Touch</h2>
            <div className="w-full flex justify-between space-x-3 mt-10">
            
            <div className="text-base">                
                For inquiries, collaborations, or media requests, contact us at:<br /><br />
                <div className="flex items-center my-3 text-sm"><PhoneCall className="lg:w-6 lg:h-4 w-5 h-4" /><h2>India: +91 77991 12264</h2></div>
<div className="flex items-center text-sm"><PhoneCall className="lg:w-6 lg:h-4 w-5 h-4" /><h2>USA: +1-408-230-1553</h2></div>
<div className="mt-5 text-base">
            Comments/Feedback<br />
Email: <a href="mailto:info@takshilafound.org" className="font-medium">info@takshilafound.org</a>

            </div>

            </div>
            <div>
                Follow Us on Social Media<br /><br />
                <div className="flex space-x-5 text-sm">
                    <a href=""><div className="flex items-center font-medium space-x-1 bg-gray-50 size-8 rounded-full border border-gray-200 hover:border-none justify-center"><FacebookIcon className="lg:w-6 lg:h-4 w-5 h-4 text-gray-500" /></div></a>
                    <a href=""><div className="flex items-center font-medium space-x-1 bg-gray-50 size-8 rounded-full border border-gray-200 hover:border-none justify-center"><TwitterIcon className="lg:w-6 lg:h-4 w-5 h-4 text-gray-500" /></div></a>
                    <a href=""><div className="flex items-center font-medium space-x-1 bg-gray-50 size-8 rounded-full border border-gray-200 hover:border-none justify-center"><FacebookIcon className="lg:w-6 lg:h-4 w-5 h-4 text-gray-500" /></div></a>
                    <a href=""><div className="flex items-center font-medium space-x-1 bg-gray-50 size-8 rounded-full border border-gray-200 hover:border-none justify-center"><YoutubeIcon className="lg:w-5 lg:h-5 w-5 h-4 text-gray-500" /></div></a>
                </div>
            </div>
            </div>
            <div>
            Book Dr. Baidya for Speaking Engagements
Interested in hosting a talk on constitutional reform? Reach out to book Dr. Baidya for lectures, interviews, and panel discussions.<br /><br />

<h2 className="text-center mt-16 text-xl font-medium">Read the Book | Join the Petition | Share the Message<br /><br />
<span className="font-normal text-base">“A nation’s constitution is not a fixed document—it evolves with its people.”</span></h2>

            </div>
            
            <div className="w-full flex items-center justify-evenly text-center">
            <div>
              <h2 className="text-lg font-medium">USA</h2>
4425 Fortran Dr, <br />Suite 112
San Jose, <br />CA 95134</div>
<div>
<h2 className="text-lg font-medium">India</h2>
Uday Kumar Koppulu<br />
Ongole,<br />
AP, India</div>

            </div>
            </div>
      </section>
    </div>
  );
}
