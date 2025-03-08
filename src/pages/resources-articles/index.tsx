import { BookOpenText, CheckCheck, Trophy } from "lucide-react";
import BuyNow from "../../components/buy-now";


export default function ResourcesArticles() {
  return (
    <div className="bg-white py-16">
      <section id="moto" className="mx-4 flex md:mx-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
        <h2 className="text-2xl">Resources & Articles</h2>
            <div className="w-full flex justify-between space-x-3 mt-10">            
              <div className="text-base">
                <div className="mt-5 text-base">
                  <div className="my-4 leading-8">
                    <h2 className="font-medium pb-1">Must-Read Articles</h2>
                    <div className="flex items-center space-x-2">
                      <CheckCheck className="w-5 h-auto" />
                      <span>The Flaws of India’s Current Constitution</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCheck className="w-5 h-auto" />
                      <span>Why India Needs a New Penal Code</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <CheckCheck className="w-5 h-auto" />
                      <span>The Role of Indigenous Governance in Modern Democracy</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <CheckCheck className="w-5 h-auto" />
                      <span>Lessons from Other Democracies: How They Reformed Their Constitutions</span>
                    </div>              
                  </div>

                  <div className="my-4 leading-8">
                    <h2 className="font-medium pb-1">Comparative Studies & Research</h2>
                    <div className="flex items-center space-x-2">
                      <CheckCheck className="w-5 h-auto" />
                      <span>How the U.S. and India Differ in Constitutional Amendments</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCheck className="w-5 h-auto" />
                      <span>The Colonial Influence on Judicial and Law Enforcement Systems</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <CheckCheck className="w-5 h-auto" />
                      <span>Why a New Constitution is the Key to a Developed Bharat</span>
                    </div>     
                  </div>

                  <div className="my-4 leading-8">
                    <h2 className="font-medium pb-1">Download Whitepapers & Research Reports</h2>
                    
                  </div>

                </div>
              </div>
            </div>
            
            
            
            </div>
      </section>
    </div>
  );
}
