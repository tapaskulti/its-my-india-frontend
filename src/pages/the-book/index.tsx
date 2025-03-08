import { BookOpenText, CheckCheck, MessageCircleQuestion, Trophy } from "lucide-react";
import BuyNow from "../../components/buy-now";


export default function TheBook() {
  return (
    <div className="bg-white py-16">
      <section id="moto" className="mx-4 flex md:mx-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
        <h2 className="text-2xl">The Book</h2>
            <div className="w-full flex justify-between space-x-3 mt-10">
            
            <div className="text-base">                
            A New Democratic Republic Constitution for India<br /><br />
            Decolonizing Governance, Restoring Bharat’s Identity
India’s current Constitution, shaped by colonial-era laws and governance models, has failed to fully empower its citizens. This book critically examines its shortcomings and offers a radical yet necessary proposal for reform.

<div className="mt-5 text-base">


            <div className="leading-8">
            <h2 className="font-medium pb-1">Key Topics Covered:</h2>
              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>The colonial roots of India’s Constitution</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>How governance structures hinder true sovereignty</span>
              </div>

              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>The need for an indigenous constitutional framework</span>
              </div>

              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>Why India’s penal code and justice system require a complete overhaul</span>
              </div>

              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>Proposals for a truly democratic, people-centric governance model</span>
              </div>
            </div>

            <div className="my-4 leading-8">
              <h2 className="font-medium pb-1">Table of Contents:</h2>
              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>What is India?</span>
              </div>
              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>The Birth of the Indian Republic & Its Constitution</span>
              </div>

              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>The Actual Date of Sovereignty</span>
              </div>

              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>The Influence of British Laws on India’s Governance</span>
              </div>

              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>Indigenous Governance & the Vedic System</span>
              </div>

              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>The Case for a New Constitution</span>
              </div>

              <div className="flex items-center space-x-2">
                <BookOpenText className="w-5 h-auto" />
                <span>Healing Bharat through Constitutional Renewal</span>
              </div>
            </div>

            <div>
              <h2 className="flex items-center space-x-2 text-gray-800"><Trophy className="w-5" /><BuyNow
                            TriggerComponent={
                              <button
                                type="button"
                                className="text-black font-medium sm:ml-0 sm:mr-auto hover:underline"
                              >
                                Order Your Copy Now 
                              </button>
                            }
                          />&nbsp; to Explore the Full Vision.</h2>
            </div>

            <div className="text-2xl pt-20 pb-8 text-center">A New Constitution for India</div>

            <div className="my-4 leading-8">
              <h2 className="font-medium pb-1">Why need changes?</h2>
              <div className="flex items-center space-x-2">
                <CheckCheck className="w-5 h-auto" />
                <span>The current Constitution still reflects British-era governance, suppressing India’s true potential.</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCheck className="w-5 h-auto" />
                <span>Laws like the Indian Penal Code (IPC) were designed to rule over subjects, not serve citizens.</span>
              </div>

              <div className="flex items-center space-x-2">
                <CheckCheck className="w-5 h-auto" />
                <span>Bureaucratic and judicial inefficiencies have led to corruption, delayed justice, and restricted civil liberties.</span>
              </div>              
            </div>

            <div className="my-4 leading-8">
              <h2 className="font-medium pb-1">Proposed Reforms</h2>
              <div className="flex items-center space-x-2">
                <CheckCheck className="w-5 h-auto" />
                <span>A New Constitution based on Bharat’s cultural and historical ethos</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCheck className="w-5 h-auto" />
                <span>A revised Penal Code (Bharatiya Nyaya Sanhita) that serves justice, not colonial control</span>
              </div>

              <div className="flex items-center space-x-2">
                <CheckCheck className="w-5 h-auto" />
                <span>A Police-of-Police System for accountability and transparency</span>
              </div>

              <div className="flex items-center space-x-2">
                <CheckCheck className="w-5 h-auto" />
                <span>Term limits and restructuring of governance to prevent corruption</span>
              </div>

              <div className="flex items-center space-x-2">
                <CheckCheck className="w-5 h-auto" />
                <span>A new election process that ensures true democracy</span>
              </div>              
            </div>

            <div className="my-4 leading-8">
              <h2 className="font-medium pb-1">The Time to Act is Now</h2>
              <div className="flex items-center space-x-2">
                <CheckCheck className="w-5 h-auto" />
                <span>Join the movement to demand a new Constitution for Bharat!</span>
              </div>
            </div>


            </div>

            </div>
            
            </div>
            
            
            
            </div>
      </section>
    </div>
  );
}
