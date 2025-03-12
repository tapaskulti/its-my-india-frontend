import { Link } from "react-router-dom";

import RyanImage3 from "../../assets/ryan-image3.jpg";


export default function ItsMyIndia() {
  return (
    <div className="bg-white py-16">
      <section id="moto" className="mx-4 flex md:mx-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
        <h2 className="text-2xl">Welcome to <span className="font-medium text-[#FF9933]">ItsMYIndia</span></h2>
          <div className="">
            <h2 className="text-xl font-normal">At ItsMYIndia, we believe in the power of re-imagining and reclaiming our constitutional ethos to truly reflect the values, diversity, and aspirations of India. Our mission is to catalyze a national conversation on decolonizing our governance structures and fostering a constitution that is truly by the people, of the people, and for the people of India.<br />
            <br />

            About the Book: <span className="font-semibold">"Decolonize India: Re-imagine a Democratic Republic Constitution for India"</span>
            </h2><br />
            <br />

            <h2 className="py-2">In this groundbreaking work, Dr. Narayan Baidya invites readers to embark on a journey of constitutional renewal. Drawing from a deep well of historical insights, cultural values, and the unmet aspirations of our nation, "Decolonize India" serves as both a critique and a beacon for those who dream of a more equitable, just, and flourishing India. The book argues passionately for a constitution that reflects India's unique identity, unshackled from remnants of colonial rule.</h2>

            <div className="bg-slate-100 px-6 py-16 rounded-lg my-6">
                <div>
                    <h2 className="text-xl font-semibold">Join the Movement</h2>
                    <h2 className="text-xl pt-2">ItsMYIndia is more than just a platform; it's a movement. We invite thinkers, leaders, activists, and citizens from every corner of India to join us in shaping a constitution that stands as a true testament to our times and our people. Engage with us through articles, discussions, and community consultations that aim to make this vision a reality.
                    </h2>
                </div>

                <div className="py-10">
                    <h2 className="text-xl font-semibold">Why "ItsMYIndia"?</h2>
                    <h2 className="text-xl pt-2">Because it's your India. It's my India. It’s our India. This platform and the conversations here are about taking ownership of our collective future, honoring our past, and creating a foundation for generations to come. Together, let's dream big and build an India that we can all be proud of.
                    </h2>
                </div>

                <div>
                    <h2 className="text-xl font-semibold">Get Involved</h2>
                    <h2 className="text-xl pt-2">Explore the book, participate in discussions, and contribute your voice to a monumental shift in how we govern and see ourselves. Your insights, experiences, and visions are crucial as we tread the path of rewriting what’s possible for our nation.
                    </h2>
                </div>                
            </div>

            <h2 className="text-xl italic text-right font-medium text-[#138808]">Thank you !!!</h2>
            
          </div>
        </div>
      </section>
    </div>
  );
}
