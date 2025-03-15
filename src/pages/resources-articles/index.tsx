import { CheckCheck } from "lucide-react";
import article01 from '../../assets/article01.jpg'
import article02 from '../../assets/article02.jpg'
import article03 from '../../assets/article03.jpg'
import article04 from '../../assets/article04.jpg'
import article05 from '../../assets/article05.jpg'


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

                <div className="mt-16 px-6 py-2 border border-gray-300 rounded-md">

                  {/* ************ article 1 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/from-colonial-legacy-indigenous-identity-redefining-indias-constitution" className="w-1/3" target="_blank">
                      <img src={article01} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/from-colonial-legacy-indigenous-identity-redefining-indias-constitution" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">From Colonial Legacy to Indigenous Identity: Redefining India's Constitution</a>
                        <h2 className="leading-6 pt-2">Ryan Baidya, Ph.D., MBA, Takshila Foundation, San Jose, argues that India's Constitution, rooted in colonial frameworks, positions the state above the people, echoing colonial governance. He advocates re-imagining the Constitution to reflect India's indigenous values and sovereignty, as it was neither directly approved by the people nor fully aligned with democratic principles.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">Myind</h2>
                        <a href="https://myind.net/Home/viewArticle/decolonise-india-re-imagining-a-new-constitution-for-india" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Decolonise India: Re-imagining a New Constitution for India</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 2 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/restoring-balance-addressing-the-injustices-of-indias-constitution#google_vignette" className="w-1/3" target="_blank">
                      <img src={article02} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/restoring-balance-addressing-the-injustices-of-indias-constitution#google_vignette" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Restoring Balance: Addressing the Injustices of India’s Constitution</a>
                        <h2 className="leading-6 pt-2">The Indian Constitution, through various amendments, has allegedly created imbalances favoring minority communities over the Hindu majority. Key concerns include religious freedoms under Articles 25, 28, and 30, the government's control over Hindu temples, and the introduction of secularism in 1975. Reform is urged to ensure equal rights for all, preserve Hindu culture, and correct perceived injustices.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">Myind</h2>
                        <a href="https://myind.net/Home/viewArticle/restoring-balance-addressing-the-injustices-of-indias-constitution" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Restoring Balance: Addressing the Injustices of India’s Constitution</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 3 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://medium.com/@eduzakka/simplicity-vs-complexity-the-hidden-costs-and-rewards-of-constitutional-design-bd7da0412d9e" className="w-1/3" target="_blank">
                      <img src={article03} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://medium.com/@eduzakka/simplicity-vs-complexity-the-hidden-costs-and-rewards-of-constitutional-design-bd7da0412d9e" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Simplicity vs. Complexity: The Hidden Costs and Rewards of Constitutional Design</a>
                        <h2 className="leading-6 pt-2">Simplicity is often misunderstood as a shortcut, a way to bypass complexity. Yet, simplicity, when achieved in its truest form, is the result of meticulous effort and profound understanding. The design ethos of legendary figures like Picasso and Steve Jobs reflects this. So, too, do the contrasting designs of the constitutions of India and the United States — one complex and layered, the other seemingly simple yet deeply impactful.</h2>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 4 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/reforming-indian-penal-code-ipc-democratic-india" className="w-1/3" target="_blank">
                      <img src={article04} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/reforming-indian-penal-code-ipc-democratic-india" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Reforming the Indian Penal Code (IPC) for a Democratic India: A Change to Serve Indians, not just to Rule Them</a>
                        <h2 className="leading-6 pt-2">Reforming the Indian Penal Code (IPC) for a Democratic India: A Change to Serve Indians, not just to Rule Them.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">Myind</h2>
                        <a href="https://myind.net/Home/viewArticle/reforming-the-indian-penal-code-ipc-for-a-democratic-india-a-change-to-serve-indians-not-just-to-rule-them" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">A change to serve indians not just to rule them.</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 5 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/reforming-indian-penal-code-ipc-democratic-india" className="w-1/3" target="_blank">
                      <img src={article05} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/reforming-indian-penal-code-ipc-democratic-india" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">India, Ought to Celebrate December 30, as a True Independence Day</a>
                        <h2 className="leading-6 pt-2">Reforming the Indian Penal Code (IPC) for a Democratic India: A Change to Serve Indians, not just to Rule Them.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">Myind</h2>
                        <a href="https://myind.net/Home/viewArticle/reforming-the-indian-penal-code-ipc-for-a-democratic-india-a-change-to-serve-indians-not-just-to-rule-them" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">A change to serve indians not just to rule them.</a>
                      </div>
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
