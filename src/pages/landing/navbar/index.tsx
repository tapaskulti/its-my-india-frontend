import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For icons
import BuyNow from "../../../components/buy-now";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // const loadScript = (src: string) => {
  //   return new Promise((resolve) => {
  //     const script = document.createElement("script");
  //     script.src = src;
  //     script.onload = () => {
  //       resolve(true);
  //     };
  //     script.onerror = () => {
  //       resolve(false);
  //     };
  //     document.body.appendChild(script);
  //   });
  // };

  // // handlePayment Function
  // const handlePayment = async (amount: number, itemName: string) => {
  //   try {
  //     const res = await fetch(
  //       `${import.meta.env.VITE_BACKEND_URL}/api/createOrder`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           amount,
  //           bookId: itemName,
  //         }),
  //       },
  //     );

  //     const data = await res.json();
  //     handlePaymentVerify(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // handlePaymentVerify Function
  // const handlePaymentVerify = async (data: any) => {
  //   const options = {
  //     key: import.meta.env.RAZORPAY_KEY_ID,
  //     amount: data.amount,
  //     currency: data.currency,
  //     name: "Dr. Ryan Baidya", // Payment to Name
  //     description: "",
  //     order_id: data.id,
  //     handler: async (response: any) => {
  //       try {
  //         const res = await fetch(
  //           `${import.meta.env.VITE_BACKEND_URL}/api/verifyPayment`,
  //           {
  //             method: "POST",
  //             headers: {
  //               "content-type": "application/json",
  //             },
  //             body: JSON.stringify({
  //               razorpay_order_id: response.razorpay_order_id,
  //               razorpay_payment_id: response.razorpay_payment_id,
  //               razorpay_signature: response.razorpay_signature,
  //             }),
  //           },
  //         );

  //         const verifyData = await res.json();

  //         if (verifyData.message) {
  //           toast.success(verifyData.message);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     },
  //     theme: {
  //       color: "#5f63b8",
  //     },
  //   };
  //   const rzp1 = new (window as any).Razorpay(options);
  //   rzp1.open();
  // };

  // useEffect(() => {
  //   loadScript("https://checkout.razorpay.com/v1/checkout.js");
  // }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-slate-100 shadow-sm z-50">
      <div className="mx-auto flex max-w-6xl justify-between py-5 px-4 lg:px-0">
        {/* Logo */}
        <Link to="/its-my-india">
          <h2 className="text-2xl font-medium text-slate-600">ItsMyIndia</h2>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-6 text-sm text-gray-900">
          <li>
            <Link to="/" className="hover:text-[#7e9452]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about-author" className="hover:text-[#7e9452]">
              About Author
            </Link>
          </li>
          <li>
            <Link to="/the-project" className="hover:text-[#7e9452]">
              The Project
            </Link>
          </li>
          <li>
            <Link to="/the-book" className="hover:text-[#7e9452]">
              The Book
            </Link>
          </li>
          <li>
            <Link to="/resources-articles" className="hover:text-[#7e9452]">
              Resources & Articles
            </Link>
          </li>
          <li>
            <Link to="/review" className="hover:text-[#7e9452]">
              Review
            </Link>
          </li>
          <li>
            <Link to="/contact-media" className="hover:text-[#7e9452]">
              Contacts & Media
            </Link>
          </li>
          <li>
            <Toaster />
            <BuyNow
              TriggerComponent={
                <button className="rounded-lg bg-[#afc584] px-2 py-2 text-sm text-white hover:bg-[#b8ce8d]">
                  Buy Now
                </button>
              }
            />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden bg-slate-100 shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4 text-gray-900">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-author" onClick={() => setIsOpen(false)}>
                About Author
              </Link>
            </li>
            <li>
              <Link to="/the-project" onClick={() => setIsOpen(false)}>
                The Project
              </Link>
            </li>
            <li>
              <Link to="/the-book" onClick={() => setIsOpen(false)}>
                The Book
              </Link>
            </li>
            <li>
              <Link to="/resources-articles" onClick={() => setIsOpen(false)}>
                Resources & Articles
              </Link>
            </li>
            <li>
              <Link to="/review" onClick={() => setIsOpen(false)}>
                Review
              </Link>
            </li>
            <li>
              <Link to="/contact-media" onClick={() => setIsOpen(false)}>
                Contacts & Media
              </Link>
            </li>
            <li>
              <BuyNow
                TriggerComponent={
                  <button
                    className="rounded-lg bg-[#afc584] px-3 py-2 text-sm text-white hover:bg-[#b8ce8d]"
                    onClick={() => setIsOpen(false)}
                  >
                    Buy Now
                  </button>
                }
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
