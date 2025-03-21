import { BookOpen, Globe, Mail, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Motto() {
  return (
    <div className="bg-slate-100 py-16">
      <section id="moto" className="mx-4 md:mx-8">
        {/* Header */}
        <div className="mx-auto mb-6 max-w-6xl text-center text-lg font-bold md:mb-8 md:text-xl xl:text-2xl">
          Every generation of Indians faces a moment when they must defend the
          nation from internal and external adversaries.{" "}
          <span className="italic">
            That moment is <b className="text-red-500">now</b>
          </span>
          .
        </div>

        {/* Message */}
        <div className="mx-auto mb-4 max-w-6xl text-center text-base md:mb-8 md:text-lg">
          India, that is Bharat, has reached a pivotal crossroads. The
          Constitution, once a beacon of democracy, still carries the remnants
          of colonial rule, limiting India's true sovereignty and progress. This
          book presents a bold and necessary proposal—a new Constitution that
          aligns with Bharat’s indigenous values, history, and aspirations.
        </div>

        {/* Pleade */}
        <div className="mb-4 text-center text-sm xl:text-base">
          Join us in rethinking the future of India’s governance.{" "}
          <span className="font-semibold text-black">
            Will you be part of the change?
          </span>
        </div>

        {/* Icons Grid */}
        <div className="mt-16 mx-auto flex max-w-6xl flex-wrap gap-4 md:gap-8">
          <a href="https://www.amazon.in/dp/B0DPC6273H" target="_blank" className="flex flex-grow w-1/3 flex-1 flex-col items-center justify-center gap-4 bg-white hover:bg-white/70 hover:shadow-lg hover:scale-110 transition transform p-4 py-8 shadow-sm">
            <div>
              <BookOpen className="size-10 text-orange-600" />
            </div>
            <p className="font-medium text-slate-600">ebook on Amazon</p>
          </a>
          <Link to="/its-my-india" className="flex flex-grow min-w-1/3 flex-1 flex-col items-center justify-center gap-4 bg-white   p-4 py-8 hover:shadow-lg hover:scale-110 transition transform shadow-sm">
          
            
              <div className="flex justify-center">
                <Globe className="size-10 text-green-600" />
              </div>
              <p className="font-medium text-slate-600">ItsMyIndia</p>
            
          
          </Link>
          <div className="cursor-pointer flex flex-grow w-1/3 flex-1 flex-col items-center justify-center gap-4 bg-white hover:bg-white/70 hover:shadow-lg hover:scale-110 transition transform p-4 py-8 shadow-sm">
            <div>
              <Mail className="size-10 text-blue-600" />
            </div>
            {/* <p className="font-medium text-slate-600">ItsMyIndia</p> */}
            <a href="mailto:info@takshilafound.org">info@takshilafound.org</a>
          </div>          
        </div>
      </section>
    </div>
  );
}
