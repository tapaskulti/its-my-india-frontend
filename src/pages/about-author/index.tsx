import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
import RyanImage2 from "../../assets/ryan-image2.png"
import { Share2, User } from "lucide-react";

export default function AboutAuthor() {
  return (
    <div className="bg-white py-16">
      <section id="moto" className="mx-4 flex md:mx-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
          <div className="flex w-full flex-col-reverse flex-wrap-reverse items-center justify-center gap-8 sm:flex-row">            
            <div className="flex-1">
              <div className="relative mx-auto max-w-80 flex-1 md:min-w-48 xl:min-w-64">
                <img src={RyanImage2} alt="Ryan Image" />
                <p className="absolute inset-x-0 -bottom-10 p-2 text-center text-lg font-medium text-slate-950">
                  Dr. Ryan Baidya
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-left text-lg">
              <span className="text-xl font-semibold">About the Author</span><br /><br />
Ryan Baidya, Ph.D., MBA<br />
An Educator, Entrepreneur, and Advocate for Constitutional Reform
Dr. Ryan Baidya is a writer, mentor, and entrepreneur with a deep passion for justice, governance, and societal reform. He has authored several books and articles on contemporary social issues, education, and structural transformation in governance.<br /><br />

              </h3>
            </div>
          </div>
<div className="text-base mt-10">
<span className="font-semibold leading-10">Academic & Professional Background:</span><br />
•	Ph.D. from University of California, Santa Cruz (UCSC)<br />
•	MBA from San Jose State University (SJSU)<br />
•	Master’s Degree from Indian Institute of Technology, Kanpur (IITK)<br />
•	Fulbright Specialist for the U.S. Department of State Fulbright Program<br />
•	Fellow of the Damon Runyon Walter-Winchell Foundation<br />
•	Contributor to esteemed institutions such as UC Berkeley, National University of Singapore (Silicon Valley Campus), and Mahatma Gandhi University, Kerala<br />
Dr. Baidya’s work challenges outdated frameworks and proposes solutions that can help India reclaim its position as a true sovereign democracy.<br />
<div className="flex space-x-2 items-center font-semibold mt-6"><Share2 className="size-4" /> <span>Follow Dr. Baidya on Social Media</span></div>
<div className="flex space-x-2 items-center font-semibold"><User className="size-4" /> <span>Contact for Speaking Engagements</span></div>
</div>










          
        </div>
      </section>
    </div>
  );
}
