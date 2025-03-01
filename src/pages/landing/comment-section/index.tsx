import React from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const DATA = [
  {
    name: "Dr. Ramesh Pandey",
    designation: "CEO-Retd, Biotech",
    location: "New Brunswick, New Jersey",
    comment:
      "It is simply a WOW.  At my age (84+ years) I did not wonder what was hidden from us for the past 75+ years. It is must read and must-have book for all Bharatiyas/Indians.",
  },
  {
    name: "Uday Kumar Koppolu",
    designation: "CEO, Global Helping Hands",
    location: "Ongole, AP",
    comment:
      "…This was a good book, I liked it a lot. The writing was captivating.  I recommend every fellow citizen to read this book not only for themselves but also for their children's future.",
  },
  {
    name: "Sai Prasad Venkatachalam",
    designation: "CEO, Sai Aashraya Foundation",
    location: "Bengaluru, Karnataka",
    comment:
      "This book clearly showed that our Constitutional democracy is not secular, or socialist. The author rightly pointed out that the constitution in its current form is not up to the task of moving the nation forward as the citizens aspire for. It is a must-read book.",
  },
];

export default function CommentSection() {
  const [idx, setIdx] = React.useState(0);
  return (
    <div className="bg-slate-100 py-16">
      <section id="moto" className="mx-4 md:mx-8">
        <div className="mx-auto max-w-3xl">
          <h3 className="mb-4 text-center text-2xl font-semibold text-slate-900 md:mb-8 md:text-4xl">
            What Our Readers Say
          </h3>

          <div className="flex items-center">
            <div
              className="hover:cursor-pointer"
              onClick={() =>
                setIdx((p) => (p - 1 < 0 ? DATA.length - 1 : p - 1))
              }
            >
              <ChevronLeft />
            </div>
            <div className="flex-1" aria-hidden="true" />
            <div>
              <motion.div className="max-w-96 h-80 rounded-lg bg-white p-8 shadow-sm">
                <p className="mb-8 text-center">
                  <Quote className="inline size-3 -translate-y-1/2 rotate-180 fill-black" />
                  &nbsp;
                  {DATA[idx].comment}
                  <Quote className="inline size-3 -translate-y-1/2 fill-black" />
                  &nbsp;
                </p>

                <div className="text-center">
                  <h4 className="text-base font-bold">{DATA[idx].name}</h4>
                  <p className="text-sm text-gray-600">
                    {DATA[idx].designation}
                  </p>
                  <p className="text-xs font-bold">{DATA[idx].location}</p>
                </div>
              </motion.div>
            </div>
            <div className="flex-1" aria-hidden="true" />
            <div
              className="hover:cursor-pointer"
              onClick={() => setIdx((p) => (p + 1) % DATA.length)}
            >
              <ChevronRight />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
