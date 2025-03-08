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
    name: "Giriraj Jain",
    // designation: "Silicon Valley, California",
    location: "Silicon Valley, California",
    comment:
      "I was pleasantly surprised.  Thank you for putting the foundation together for a case for renewal of the Constitution."
  },
  {
    name: "G.S. Satya",
    designation: "Visionary Entrepreneur",
    location: "Silicon Valley, California",
    comment:
      `Dr. Ryan Baidya's monumental work, New Democratic Republic Constitution for India, is a timely and thought-provoking proposal for a revised and reimagined constitution for India, also known as Bharat. In this book, Dr. Baidya presents a comprehensive framework that covers:
1.	The historical context and perspective of the existing constitution.
2.	A critical analysis of its creation.
3.	The omissions and commissions in the document.
4.	Its relationship—or lack thereof—with Sanatana Samskruti (our ancient culture).
5.	Appropriate changes for a modern, rapidly evolving world.
6.	A roadmap for India's future as a global leader.
….. borrowing from the words of Dr. Martin Luther King Jr.: “My fellow Bharatiyas, this proposed new constitution by Dr. Ryan Baidya is a marvelous ideal—a call to action that empowers you to rise as the Vishwa Guru (global leader) you are destined to be.”
`
  },
  {
    name: "Uday Kumar Koppolu",
    designation: "CEO, Global Helping Hands",
    location: "Ongole, AP",
    comment:
      "…This was a good book, I liked it a lot. The writing was captivating.  I recommend every fellow citizen to read this book not only for themselves but also for their children's future.",
  },
  {
    name: "Bivhash Chakraborty",
    designation: "Retd. Ariforce",
    location: "Durgapur, WB",
    comment:
      "I am not a reader-type of person, but this book kept me going.  We were kept in the dark for so long…",
  },
  {
    name: "Pranab Phauzdar",
    designation: "Artist",
    location: "Kolkata",
    comment:
      "Beautifully knitted the facts and the situations to shed light on the issues that most us of never knew….",
  },
  {
    name: "Sai Prasad Venkatachalam",
    designation: "CEO, Sai Aashraya Foundation",
    location: "Bengaluru, Karnataka",
    comment:
    `… This book clearly showed that our Constitutional democracy is not secular, or socialist.    The author rightly pointed out that the constitution in its current form is not up to the task of moving the nation forward as the citizens aspire for. It is a must-read book.`,
  },
  {
    name: "Tapas Chandra",
    designation: "Entrepreneur, Software Engineer",
    location: "Kolkata, WB",
    comment:
    `Dr. Baidya’s book on the Indian Constitution and its deficiencies is a compelling work and written in plain English for easy to understand by every Aam Admi.  He raised critical questions about the nature of the founding document of the nation and argued that the Constitution requires a comprehensive review. This is a timely book and it would benefit the nation if it inspired debates and dialogues for periodic constitutional review process.`,
  },
  {
    name: "Popat Tantod",
    designation: "High school teacher",
    location: "Meghalaya",
    comment:
      "I enjoyed the book very much, and I would recommend this book to anyone who cares for our country’s future…",
  },
  {
    name: "Bhavin Vaidya",
    // designation: "High school teacher",
    location: "Silicon Valley California",
    comment:
      "We had been taught so much wrong about the genesis of our system of democracy.  It is a book that should be taught in high schools and colleges so that the new generation learn the truth earlier and demand for rightful system for their generation.",
  },
];

export default function CommentSection() {
  const [idx, setIdx] = React.useState(0);
  return (
    <div className="bg-slate-100 py-16">
      <section id="moto" className="mx-4 md:mx-8">
        <div className="mx-auto max-w-6xl">
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
              <motion.div className="max-w-[30rem] h-80 rounded-lg bg-white p-8 shadow-sm">
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
