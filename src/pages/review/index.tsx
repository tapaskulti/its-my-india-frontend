// import { Link } from "react-router-dom";

import { CheckCheck, Star } from "lucide-react";
import ReviewImg from "../../assets/review-image.jpg"



export default function Review() {
    return (      
    <div className="bg-white py-16">
      <section id="moto" className="mx-4 flex md:mx-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
        <h2 className="text-2xl text-slate-900">A Review of the Book</h2>

        <div className="flex items-start space-x-5 mt-10">
          <img src={ReviewImg} alt="" className="w-80 h-auto border-8 border-double border-slate-300 rounded-xl" />
          <div>
            <h2 className="text-xl font-medium">Reviewed by G.S. Satya, San Jose, CA, USA</h2>
            <span className="text-xs leading-3">L to R: Ryan Baidya, Dr. R. Balasubramaniam, & G.S. Satya ( September 2024, Stanford University, CA )</span>
            <h2 className="pt-3">Dr. Ryan Baidya's monumental work, New Democratic Republic Constitution for India, is a timely and thought-provoking proposal for a revised and reimagined constitution for India, also known as Bharat. In this book, Dr. Baidya presents a comprehensive framework that covers:
            </h2>
            <br />
            <div>
              <div className="flex items-center space-x-2">
                <Star className="size-4 text-slate-600" /><h2 className="text-slate-600">The historical context and perspective of the existing constitution.</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="size-4 text-slate-600" /><h2 className="text-slate-600">A critical analysis of its creation.</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="size-4 text-slate-600" /><h2 className="text-slate-600">The omissions and commissions in the document.</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="size-4 text-slate-600" /><h2 className="text-slate-600">Its relationship—or lack thereof—with Sanatana Samskruti (our ancient culture).</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="size-4 text-slate-600" /><h2 className="text-slate-600">Appropriate changes for a modern, rapidly evolving world.</h2>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="size-4 text-slate-600" /><h2 className="text-slate-600">A roadmap for India's future as a global leader.</h2>
              </div>
            </div>
          </div>
        </div>
          <div className="">
            <h2 className="font-normal">As a proud Indo-American who has spent 85 years traversing both India and the United States, I bring to this review a unique blend of perspectives. My first 24 years were spent growing up in Bharat, and I’ve since lived in the United States for over 60 years. I cherish and uphold my Bharatiya values and beliefs, which form the bedrock of my thoughts.
            </h2>            

            <div className="bg-slate-100 px-6 py-10 rounded-lg my-10">                
                <h2 className="text-lg font-semibold pb-2">The foundation of my thinking stems from three sources:</h2>
                <div className="flex items-center space-x-3">
                    <CheckCheck className="size-5" /><h2>My parents and ancestors, who laid the foundation of my values.</h2>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCheck className="size-5" /><h2>Teachers in my middle and high school years.</h2>
                </div>
                <div className="flex items-center space-x-3">
                    <CheckCheck className="size-5" /><h2>Heroes such as Bharat Ratna Sir M. Vishveshwaraya, Nobel Laureate Sir C. V. Raman, and Bharat Ratna Rajagopalachari.</h2>
                </div>
            </div>

            <h2 className="font-normal">These individuals, along with my interactions with Prime Ministers Nehru, Indira Gandhi, and Vajpayee in the 1950s and 1960s, shaped my understanding of India's potential. However, it wasn’t until I met Rev. Martin Luther King Jr. and Coretta Scott King in Bengaluru that I truly understood the power of constitutional reform.
                <br />
                <br />
                In 1960, I had the privilege of meeting Dr. King at the Indian Institute of World Culture. His impassioned speech about the American Civil Rights Movement and his belief in Gandhian principles left an indelible mark on me. His meeting with my guru, D.V. Gundappa (DVG), further strengthened his commitment to non-violence, which later led to the Civil Rights Act of 1964 in the U.S. This encounter taught me that a nation's Constitution is a living document, one that must evolve with its people's values and needs.
                <br />
                <br />
                With this extensive life experience, I approached Dr. Baidya’s book. In A New Democratic Republic Constitution for India, he astutely identifies the deep colonial influences embedded within India’s existing constitution. He argues that this constitution, in its current form, is neither truly democratic nor secular in the genuine sense. More crucially, it fails to reflect the values of Bharat’s millennia-old Vedic traditions.
                <br />
                <br />
                Dr. Baidya makes a compelling case for a complete overhaul of the constitution. He advocates for a document that honors Bharatiya Vedic values while simultaneously addressing the realities of the Information Age and the rise of artificial intelligence. His argument is clear: India’s current constitution is not a fixed document, as evidenced by the nearly 100 amendments it has undergone, far surpassing the 26 amendments of the U.S. Constitution.
                <br />
                <br />
                One of Dr. Baidya’s most persuasive recommendations is the formation of a Constitution Review Committee, representative of Bharat’s diverse population. He emphasizes the importance of inviting input from a broad spectrum of citizens to ensure that the new constitution truly reflects the aspirations of all Bharatiyas.
                <br />
                <br />
                To combat corruption, Dr. Baidya proposes the creation of an independent "Police of the Police" system at both the federal and state levels. This system, coupled with term limits for policing authorities, would act as a safeguard against the corruption that plagues India’s current institutions.                
            </h2>
            <br />
            <h2 className="font-semibold">In conclusion, borrowing from the words of Dr. Martin Luther King Jr.:<br />
                <span className="italic text-slate-600 font-normal">“My fellow Bharatiyas, this proposed new constitution by Dr. Ryan Baidya is a marvelous ideal—a call to action that empowers you to rise as the Vishwa Guru (global leader) you are destined to be.”</span>
            </h2><br /><br />
            <div>
                <h2 className="font-semibold">Om Shanti.<br />G.S. Satya</h2>
                <h2 className="font-normal italic pt-3"><span className="font-semibold">G.S. Satya,</span> formerly known as Gadasalli Satyanarayana, previously served as the President of AutoSense International. Upon retiring from his active role in the automotive industry, he has since dedicated himself to various social activities, contributing to community and social welfare initiatives. His shift from corporate leadership to social engagement highlights his commitment to making a positive impact beyond the business world.</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
  }
  