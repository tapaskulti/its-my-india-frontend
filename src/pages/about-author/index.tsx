import RyanImage5 from "../../assets/ryan-image4.jpg"
// import { Share2, User } from "lucide-react";

export default function AboutAuthor() {
  return (
    <div className="bg-white py-16">
      <section id="moto" className="mx-4 flex md:mx-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
          <div className="flex w-full flex-col-reverse flex-wrap-reverse items-center justify-center gap-8 sm:flex-row">            
            <div className="">
              <div className="relative mx-auto flex-1">
                <img src={RyanImage5} alt="Ryan Image" />
                <p className="absolute inset-x-0 -bottom-10 p-2 text-center text-lg font-medium text-slate-950">
                  Dr. Ryan Baidya
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-left text-lg">
              <span className="text-xl font-semibold">Ryan Baidya:  an educator and mentor</span><br /><br />
              Dr. Baidya is a writer and an art enthusiast who has authored numerous articles on contemporary social issues in the USA, India, and Japan. He has also written several books, including the widely beloved "She Is” and “Ichi-go Ichi-e”. In his writings, he explores the possibilities of easing various forms of social inequality through education and structural changes, a view that is prevalent throughout his work.<br /><br />
              </h3>
            </div>
          </div>

          <div className="text-base mt-6">
          Professionally, he is an entrepreneur, educator, and mentor. Dr. Baidya has been involved with esteemed academic institutions such as the University of California, Santa Cruz; Colorado University, Boulder; University of California Berkeley extension program; National Singapore University, Silicon Valley campus; and Mahatma Gandhi University, Kerala.<br /><br />
His academic achievements include earning a doctoral degree (Ph.D.) from the University of California, Santa Cruz (UCSC), an MBA from San Jose State University, California (SJSU), and a Master's Degree from the Indian Institute of Technology, Kanpur (IITK). Dr. Baidya was recognized as a fellow of the Damon Runyon Walter-Winchell Foundation and served as a Fulbright specialist for the US Department of State Fulbright Program.

          </div>

          {/* <div className="text-base mt-10">
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
          </div> */}










          
        </div>
      </section>
    </div>
  );
}
