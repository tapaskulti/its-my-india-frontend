import { CheckCheck } from "lucide-react";
import article01 from '../../assets/article01.jpg'
import article02 from '../../assets/article02.jpg'
import article03 from '../../assets/article03.jpg'
import article04 from '../../assets/article04.jpg'
import article05 from '../../assets/article05.jpg'
import article06 from '../../assets/article06.jpg'
import article07 from '../../assets/article07.jpg'
import article08 from '../../assets/article08.jpg'
import article09 from '../../assets/article09.jpg'
import article010 from '../../assets/article010.jpg'
import article011 from '../../assets/article011.jpg'
import article012 from '../../assets/article012.jpg'
import article013 from '../../assets/article013.jpg'
import article014 from '../../assets/article014.jpg'
import article015 from '../../assets/article015.jpg'
import article016 from '../../assets/article016.jpg'
import article017 from '../../assets/article017.jpg'
import article018 from '../../assets/article018.jpg'
import article019 from '../../assets/article019.jpg'
import article020 from '../../assets/article020.jpg'
import article021 from '../../assets/article021.jpg'


export default function Articles() {
  return (
    <div className="bg-white py-16">
      <section id="moto" className="mx-4 flex md:mx-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8">
        <h2 className="text-2xl">Articles</h2>
            <div className="w-full flex justify-between space-x-3 mt-5">            
              <div className="text-base">
                <div className="flex items-start justify-between space-x-4 mt-5 text-base">
                  <div className="my-4 leading-7">
                    <h2 className="font-medium pb-1">Must-Read Articles</h2>
                    <div className="flex items-start space-x-2">
                      <CheckCheck className="w-5 h-auto pt-0.5" />
                      <span>The Flaws of India’s Current Constitution</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCheck className="w-5 h-auto pt-0.5" />
                      <span>Why India Needs a New Penal Code</span>
                    </div>

                    <div className="flex items-start space-x-2">
                      <CheckCheck className="w-5 h-auto pt-0.5" />
                      <span>The Role of Indigenous Governance in Modern Democracy</span>
                    </div>

                    <div className="flex items-start space-x-2">
                      <CheckCheck className="w-5 h-auto pt-0.5" />
                      <span>Lessons from Other Democracies: How They Reformed Their Constitutions</span>
                    </div>              
                  </div>

                  <div className="my-4 leading-7">
                    <h2 className="font-medium pb-1">Comparative Studies & Research</h2>
                    <div className="flex items-start space-x-2">
                      <CheckCheck className="w-5 h-auto pt-0.5" />
                      <span>How the U.S. and India Differ in Constitutional Amendments</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCheck className="w-5 h-auto pt-0.5" />
                      <span>The Colonial Influence on Judicial and Law Enforcement Systems</span>
                    </div>

                    <div className="flex items-start space-x-2">
                      <CheckCheck className="w-5 h-auto pt-0.5" />
                      <span>Why a New Constitution is the Key to a Developed Bharat</span>
                    </div>     
                  </div>

                  {/* <div className="my-4 leading-8">
                    <h2 className="font-medium pb-1">Download Whitepapers & Research Reports</h2>
                    
                  </div> */}

                </div>

                <div className="mt-5 px-6 py-2 border border-gray-300 rounded-md">

                  {/* ************ article 1 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/from-colonial-legacy-indigenous-identity-redefining-indias-constitution" className="w-1/3" target="_blank">
                      <img src={article01} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/from-colonial-legacy-indigenous-identity-redefining-indias-constitution" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">From Colonial Legacy to Indigenous Identity: Redefining India's Constitution</a>
                        <h2 className="leading-6 pt-2">Ryan Baidya, Ph.D., MBA, Takshila Foundation, San Jose, argues that India's Constitution, rooted in colonial frameworks, positions the state above the people, echoing colonial governance. He advocates re-imagining the Constitution to reflect India's indigenous values and sovereignty, as it was neither directly approved by the people nor fully aligned with democratic principles.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">Myind</h2>
                        <a href="https://myind.net/Home/viewArticle/decolonise-india-re-imagining-a-new-constitution-for-india" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Decolonise India: Re-imagining a New Constitution for India</a>
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
                        <a href="https://educationpost.in/news/opinion/restoring-balance-addressing-the-injustices-of-indias-constitution#google_vignette" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Restoring Balance: Addressing the Injustices of India’s Constitution</a>
                        <h2 className="leading-6 pt-2">The Indian Constitution, through various amendments, has allegedly created imbalances favoring minority communities over the Hindu majority. Key concerns include religious freedoms under Articles 25, 28, and 30, the government's control over Hindu temples, and the introduction of secularism in 1975. Reform is urged to ensure equal rights for all, preserve Hindu culture, and correct perceived injustices.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">Myind</h2>
                        <a href="https://myind.net/Home/viewArticle/restoring-balance-addressing-the-injustices-of-indias-constitution" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Restoring Balance: Addressing the Injustices of India’s Constitution</a>
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
                        <a href="https://medium.com/@eduzakka/simplicity-vs-complexity-the-hidden-costs-and-rewards-of-constitutional-design-bd7da0412d9e" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Simplicity vs. Complexity: The Hidden Costs and Rewards of Constitutional Design</a>
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
                        <a href="https://educationpost.in/news/opinion/reforming-indian-penal-code-ipc-democratic-india" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Reforming the Indian Penal Code (IPC) for a Democratic India: A Change to Serve Indians, not just to Rule Them</a>
                        <h2 className="leading-6 pt-2">Reforming the Indian Penal Code (IPC) for a Democratic India: A Change to Serve Indians, not just to Rule Them.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">Myind</h2>
                        <a href="https://myind.net/Home/viewArticle/reforming-the-indian-penal-code-ipc-for-a-democratic-india-a-change-to-serve-indians-not-just-to-rule-them" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">A change to serve indians not just to rule them.</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 5 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/india-ought-to-celebrate-december-30-as-true-independence-day" className="w-1/3" target="_blank">
                      <img src={article05} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/india-ought-to-celebrate-december-30-as-true-independence-day" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">India, Ought to Celebrate December 30, as a True Independence Day</a>
                        <h2 className="leading-6 pt-2">Ryan Baidya suggests December 30, 1943, should be India’s true Independence Day. On this date, Subhas Chandra Bose’s Azad Hind Government declared sovereignty by raising the flag in the Andaman and Nicobar Islands. This date signifies genuine political freedom, </h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">eSamskriti</h2>
                        <a href="https://www.esamskriti.com/e/History/Indian-History/Why-India-must-celebrate-December-30-as-its-Independence-Day-instead-of-August-15-1.aspx" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Why India must Celebrate December 30 as its Independence Day instead of August 15</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 6 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/india-ought-to-celebrate-december-30-as-true-independence-day" className="w-1/3" target="_blank">
                      <img src={article06} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/india-ought-to-celebrate-december-30-as-true-independence-day" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Reclaiming Dharma: India’s Responsibility to Protect Hindus in Bangladesh</a>
                        <h2 className="leading-6 pt-2">“Today, as the torchbearer of the Indic civilization, India must ask itself: does it not have a moral and historical obligation to protect the Hindus of Bangladesh and other regions once part of Bharat? If necessary, should it not be prepared to use its armed forces to ensure their survival and dignity? If India is willing and able to protect Sanatan Dharma outside her forced-made and cunningly architected boundaries, only then can she ensure its protection and flourishing within those boundaries,” writes Ryan Baidya.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/reclaiming-dharma-indias-responsibility-to-protect-hindus-in-bangladesh" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Reclaiming Dharma: India’s Responsibility to Protect Hindus in Bangladesh</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 7 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/why-sanatan-hindu-cannot-avoid-politics" className="w-1/3" target="_blank">
                      <img src={article07} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/why-sanatan-hindu-cannot-avoid-politics" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Why Sanatan-Hindu Cannot Avoid Politics</a>
                        <h2 className="leading-6 pt-2">“In ‘Why Sanatan-Hindu Cannot Avoid Politics,’ the Author argues that politics is inescapable for Sanatan (Hindu) citizens, despite their reluctance to engage in it. Political decisions impact every facet of daily life, including taxes, education, healthcare, and personal freedoms. While many educated Sanatan individuals feel ashamed or brainwashed into avoiding political discourse due to historical, cultural, and social conditioning, the author asserts that disengagement from politics is not a neutral act. It often tacitly endorses the status quo and allows others to shape the nation's future. The narrative explores how Sanatan citizens are unconsciously involved in politics, why they have distanced themselves from it, and the importance of conscious political participation to safeguard their cultural and religious rights. The narrative calls for a reclamation of politics as a moral duty (Dharma), encouraging Sanatan citizens to engage constructively at both local and national levels to strengthen India’s democratic fabric and protect their values,” writes Ryan Baidya.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/why-sanatan-hindu-must-take-active-part-role-in-politics" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Why sanatan hindu must take active part role in politics</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 8 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/historical-amnesia-consequences-importance-of-true-history#google_vignette" className="w-1/3" target="_blank">
                      <img src={article08} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/historical-amnesia-consequences-importance-of-true-history#google_vignette" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Historical Amnesia and its Consequences: The Importance of True History</a>
                        <h2 className="leading-6 pt-2">Ryan Baidya, representing the Takshila Foundation in San Jose, California, USA, discusses how trees' resilience in storms and adverse conditions parallels the importance of deep roots for stability and anchorage. This analogy underscores the significance of understanding true history for societal strength and resilience.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/itihasamtrue-history" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">All Itihasam is history, all history is not Itihasam</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 9 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/historical-amnesia-consequences-importance-of-true-history#google_vignette" className="w-1/3" target="_blank">
                      <img src={article09} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/historical-amnesia-consequences-importance-of-true-history#google_vignette" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Itihasam True  Story</a>
                        <h2 className="leading-6 pt-2">History by definition is the facts of a time, and the fact is always true (the way it happened). However, that truth is not always, decoded as it happened. Writers, historians, and contemporary pundits do their best to decode facts from the information and materials with the admixture of composite influences of economic, social, political, and individual beliefs.</h2>
                      </div>
                      {/* <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/itihasamtrue-history" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">All Itihasam is history, all history is not Itihasam</a>
                      </div> */}
                    </div>
                  </div>

                  {/* ************ article 10 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/the-columnists/she-screams-justice-and-deterrence-of-rape" className="w-1/3" target="_blank">
                      <img src={article010} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/the-columnists/she-screams-justice-and-deterrence-of-rape" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">SHE SCREAMS Justice and Deterrence of Rape</a>
                        <h2 className="leading-6 pt-2">Not a single day passes by without a report of rape at somewhere in India. Thanks to digital media tools and apps, we now get to see our faces clearly every moment wherever, whenever.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/beti-bachao-how-to-deter-and-prevent-rape" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Beti Bachao: How to Deter and Prevent Rape</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 11 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/tibet-india-must-rescind-its-interim-recognition-of-tibet-as-being-part-of-china" className="w-1/3" target="_blank">
                      <img src={article011} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/tibet-india-must-rescind-its-interim-recognition-of-tibet-as-being-part-of-china" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Tibet: India must Rescind its Interim Recognition of Tibet as being part of China</a>
                        <h2 className="leading-6 pt-2">One usually thinks of the recent history of Buddhism arriving from India to Tibet.  However, the harmonious relationship between India and Tibet runs farther and deeper and predates the time of the Gautama Buddha.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/india-must-rescind-its-interim-recognition-oftibet-as-being-part-of-china" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">India must rescind its interim recognition of tibet as being part of china</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 12 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/today-we-lived-embracing-the-power-present" className="w-1/3" target="_blank">
                      <img src={article012} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/dharma-vs-religion-vedic-scriptures-takshila-foundation-ryan-baidya" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Dharma is Closely Related to the Concepts of Duty & Human Service</a>
                        <h2 className="leading-6 pt-2">Dharma is the natural order underlying existence.  It is both why things are as they are and the path to understanding them.  The eternal principles of dharma form the basis of the philosophers, beliefs, and practices that originated in the Indian subcontinent. Dharma sustains society</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/understanding-dharma-religion-is-the-start-in-holding-humanity-together" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Understanding Dharma (Religion) is the Start of Holding Humanity Together</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 13 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://myind.net/Home/viewArticle/dussehra-reminds-us-of-the-evils-with-us-and-atrocities-faced-by-the-mother-bharat-mata" className="w-1/3" target="_blank">
                      <img src={article013} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      {/* <div>
                        <a href="https://educationpost.in/news/opinion/dharma-vs-religion-vedic-scriptures-takshila-foundation-ryan-baidya" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Dussehra Reminds us of the Evils with us and Atrocities Faced by the Mother, Bharat-Mata</a>
                        <h2 className="leading-6 pt-2">Dharma is the natural order underlying existence.  It is both why things are as they are and the path to understanding them.  The eternal principles of dharma form the basis of the philosophers, beliefs, and practices that originated in the Indian subcontinent. Dharma sustains society</h2>
                      </div> */}
                      <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/dussehra-reminds-us-of-the-evils-with-us-and-atrocities-faced-by-the-mother-bharat-mata" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Dussehra Reminds us of the Evils with us and Atrocities Faced by the Mother, Bharat-Mata</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 14 ************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/today-we-lived-embracing-the-power-present" className="w-1/3" target="_blank">
                      <img src={article014} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/today-we-lived-embracing-the-power-present" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Today We Lived: Embracing the Power of the Present</a>
                        <h2 className="leading-6 pt-2">"Today We Lived" by Ryan Baidya and Pranab Phauzdar, from the Takshila Foundation, California, emphasizes the importance of living and creating in the present moment. It highlights how historical innovators, from Leonardo da Vinci to Steve Jobs, shaped progress by acting decisively. The article argues that creation leads to true happiness and that "tomorrow is today".</h2>
                      </div>
                      {/* <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/dussehra-reminds-us-of-the-evils-with-us-and-atrocities-faced-by-the-mother-bharat-mata" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Dussehra Reminds us of the Evils with us and Atrocities Faced by the Mother, Bharat-Mata</a>
                      </div> */}
                    </div>
                  </div>

                  {/* ************ article 15************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/do-you-know-your-true-value" className="w-1/3" target="_blank">
                      <img src={article015} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/do-you-know-your-true-value" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Do You Know Your True Value?</a>
                        <h2 className="leading-6 pt-2">True value, according to Ryan Baidya of the Takshila Foundation in San Jose, California, is not determined by the amount of time spent on a task but rather by the years of experience, wisdom, and devotion that go into it. Baidya shows how mastery in any field—whether art or entrepreneurship—should be acknowledged and valued for its lifetime investment by using examples from artists such as Whistler and Picasso.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/do-you-know-your-true-value" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Do You Know Your True Value?</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 16************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/the-pyramid-of-character-a-pathway-to-love-and-trust" className="w-1/3" target="_blank">
                      <img src={article016} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/the-pyramid-of-character-a-pathway-to-love-and-trust" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">The Pyramid of Character: A Pathway to Love and Trust</a>
                        <h2 className="leading-6 pt-2">Ryan Baidya outlines a model where truthfulness forms the base of meaningful relationships, leading to respect, responsibility, dependability, and ultimately, trust. This progression culminates in love, suggesting that deep, transformative connections are built on consistent character traits and actions.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/the-pyramid-of-character-a-pathway-to-love-and-trust" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">The Pyramid of Character: A Pathway to Love and Trust</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 17************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/concept-of-information-knowledge-wisdom-and-vision" className="w-1/3" target="_blank">
                      <img src={article017} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/concept-of-information-knowledge-wisdom-and-vision" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Concept of Information, Knowledge, Wisdom, and Vision</a>
                        <h2 className="leading-6 pt-2">Ryan Baidya of Takshila Foundation, San Jose, California, USA, clarifies "smart," "intelligent," "brilliant," and "wise," highlighting their distinctions. He explores the journey from raw data to wisdom, integrating Indian philosophical concepts and practical applications, emphasizing continuous learning, experience, and reflective practice for personal and professional growth.</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/concept-of-information-knowledge-wisdom-and-vision" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Concept of Information, Knowledge, Wisdom, and Vision</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 18************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/tamaso-ma-jyotirgamaya-from-darkness-to-light-not-just-teach-but-build-souls" className="w-1/3" target="_blank">
                      <img src={article018} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/tamaso-ma-jyotirgamaya-from-darkness-to-light-not-just-teach-but-build-souls" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">Tamaso ma Jyotirgamaya: From Darkness to Light. Not just Teach, but Build Souls.</a>
                        <h2 className="leading-6 pt-2">Light is the Universal symbol of knowledge and understanding. Ancient literature often describes teachers as those whose role is to open minds to the vastness of myths and remove confusions that arise from myopia-ism, thus bringing clarity and light to difficult situations.</h2>
                      </div>
                      {/* <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/concept-of-information-knowledge-wisdom-and-vision" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">Concept of Information, Knowledge, Wisdom, and Vision</a>
                      </div> */}
                    </div>
                  </div>

                  {/* ************ article 19************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/in-the-quest-for-the-purpose-of-education" className="w-1/3" target="_blank">
                      <img src={article019} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/in-the-quest-for-the-purpose-of-education" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">In the Quest for the Purpose of Education</a>
                        <h2 className="leading-6 pt-2">The education bug started growing in me when I was a seventh-grade student. During my middle school days, I used to teach some of my fellow classmates, and later to the junior classes with some honorarium (fancy word for lunch money).</h2>
                      </div>
                      <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/in-the-quest-for-the-purpose-of-education" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">In the Quest for the Purpose of Education</a>
                      </div>
                    </div>
                  </div>

                  {/* ************ article 20************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/a-small-hyphen" className="w-1/3" target="_blank">
                      <img src={article020} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/a-small-hyphen" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">A Small Hyphen</a>
                        <h2 className="leading-6 pt-2">Take the time to identify someone. This shows one’s willingness to learn, and widen the world’s cultural and social views and understanding that leads to recognition.</h2>
                      </div>
                      {/* <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/in-the-quest-for-the-purpose-of-education" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">In the Quest for the Purpose of Education</a>
                      </div> */}
                    </div>
                  </div>

                  {/* ************ article 21************ */}
                  <div className="flex items-start space-x-5 border-b border-gray-200 py-4">
                    <a href="https://educationpost.in/news/opinion/the-power-of-your-voice-why-us-citizens-cannot-avoid-politics" className="w-1/3" target="_blank">
                      <img src={article021} alt="" className="w-full" />
                    </a>
                    <div className="w-3/4 -mt-1.5">
                      <div>
                        <a href="https://educationpost.in/news/opinion/the-power-of-your-voice-why-us-citizens-cannot-avoid-politics" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">The Power of Your Voice: Why US Citizens Cannot Avoid Politics</a>
                        <h2 className="leading-6 pt-2">“The reluctance to engage in political discourse or even vote has become a widespread issue, particularly among Americans. Some people are frustrated with the political system, while others feel disillusioned by the polarized environment. However, by opting out, they may unintentionally endorse the status quo or allow the decisions of others to impact their lives without their consent,” writes Ryan Baidya.</h2>
                      </div>
                      {/* <div className="mt-3">
                        <h2 className="text-lg">MYIND</h2>
                        <a href="https://myind.net/Home/viewArticle/in-the-quest-for-the-purpose-of-education" target="_blank" className="font-medium text-lg text-blue-500 hover:underline hover:text-blue-700">In the Quest for the Purpose of Education</a>
                      </div> */}
                    </div>
                  </div>

                  <div className="py-10">
                    <h2 className="text-2xl pb-3">
                    Various Articles on Medium.com
                    </h2>
                    <a href="https://medium.com/@eduzakka" target="_blank" className="text-lg font-medium text-blue-500 hover:underline hover:text-blue-700">https://medium.com/@eduzakka</a>                        
                    
                  </div>

                </div>
              </div>
            </div>
            
            
            
            </div>
      </section>
    </div>
  );
}
