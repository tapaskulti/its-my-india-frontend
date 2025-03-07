import { SquareMousePointer } from "lucide-react";

export default function ContactMedia() {
  return (
    <div className="bg-white py-16">
      <section id="moto" className="mx-4 flex md:mx-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
        <h2 className="text-2xl">The Movement</h2>
            
            <div className="mt-10">
                <h2 className="text-xl pb-2">Join the Conversation</h2>
                Be part of an intellectual revolution that redefines governance in India. Engage with experts, policymakers, and citizens who support constitutional reform.
                                
            </div>

            <div className="w-full text-center mt-2 text-xl font-medium space-y-5 ml-16">
                <div className="flex items-center space-x-3"><SquareMousePointer className="size-5" /> <h2>Online Forums & Discussions</h2></div>
                <div className="flex items-center space-x-3"><SquareMousePointer className="size-5" /> <h2>Webinars & Expert Talks</h2></div>
                <div className="flex items-center space-x-3"><SquareMousePointer className="size-5" /> <h2>Research Papers & Reports</h2></div>
            </div>
            
            <div className="w-full mt-10">
                <h2 className="text-xl pb-2">Petitions & Advocacy</h2>
Demand change by signing petitions that call for constitutional reform. Raise awareness among policymakers and lawmakers.
            </div>
            <div className="w-full text-center mt-2 text-xl font-medium space-y-5 ml-16">
                <div className="flex items-center space-x-3"><SquareMousePointer className="size-5" /> <h2>Sign the Petition</h2></div>
                <div className="flex items-center space-x-3"><SquareMousePointer className="size-5" /> <h2>Write to Your Representatives (MP/MLA)</h2></div>
            </div>

            <div className="w-full mt-10">
                <h2 className="text-xl pb-2">Upcoming Events & Webinars</h2>
            </div>
            <div className="w-full text-center mt-2 text-xl font-medium space-y-5 ml-16">
                <div className="flex items-center space-x-3"><SquareMousePointer className="size-5" /> <h2>Webinar: “Decolonizing India's Constitution” – March 15, 2025</h2></div>
                <div className="flex items-center space-x-3"><SquareMousePointer className="size-5" /> <h2>Book Discussion: “A New Republic for India” – April 5, 2025</h2></div>
            </div>

            <div className="w-full mt-10">
                <h2 className="text-xl pb-2">Subscribe for Updates</h2>
                Subscribe for more updates
            </div>
            {/* <div className="w-full text-center mt-2 text-xl font-medium space-y-5 ml-16">
                <div className="flex items-center space-x-3"><SquareMousePointer className="size-5" /> <h2>Webinar: “Decolonizing India's Constitution” – March 15, 2025</h2></div>
                <div className="flex items-center space-x-3"><SquareMousePointer className="size-5" /> <h2>Book Discussion: “A New Republic for India” – April 5, 2025</h2></div>
            </div> */}

            </div>
      </section>
    </div>
  );
}
