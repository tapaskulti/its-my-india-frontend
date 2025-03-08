import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import RyanImage from "../../../assets/ryan-image.png";

const ACADEMICS = [
  "Ph.D. from University of California, Santa Cruz (UCSC)",
  "MBA from San Jose State University (SJSU)",
  "Master’s Degree from Indian Institute of Technology, Kanpur (IITK)",
  "Fulbright Specialist for the U.S. Department of State Fulbright Program",
  "Fellow of the Damon Runyon Walter-Winchell Foundation",
  // "Contributor to esteemed institutions such as UC Berkeley, National University of Singapore (Silicon Valley Campus), and Mahatma Gandhi University, Kerala",
  "Academic activities as an educator and/or mentor at multiple institutions including University of California (UC) Santa Cruz, UC Berkeley Extension, the National University of Singapore (Silicon Valley Campus), and Mahatma Gandhi University."
];

export default function AuthorSection() {
  return (
    <div className="bg-white py-16">
      <section id="moto" className="mx-4 flex md:mx-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
          <div className="flex w-full flex-col-reverse flex-wrap-reverse items-center justify-center gap-8 sm:flex-row">
            
            <div className="flex-1">
              <div className="relative mx-auto max-w-80 flex-1 md:min-w-48 xl:min-w-64">
                <img src={RyanImage} alt="Ryan Image" />
                <p className="absolute inset-x-0 -bottom-10 p-2 text-center text-lg font-medium text-slate-950">
                  Dr. Ryan Baidya
                </p>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-left text-lg font-semibold">
                Academic & Professional Background
              </h3>
              <ul className="space-y-2">
                {ACADEMICS.map((ACADEMIC, index) => (
                  <li key={index} className="flex items-start gap-x-2">
                    <ArrowRight className="min-w-4 max-w-4" />
                    <p>{ACADEMIC}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            to={"/about-author"}
            className="mt-16 mx-auto flex w-full max-w-64 items-center justify-center rounded-full bg-[#afc584] px-12 py-3 font-semibold capitalize text-white hover:bg-[#b8ce8d]"
          >
            Know More
          </Link>
        </div>
      </section>
    </div>
  );
}
