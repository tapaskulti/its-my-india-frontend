
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";



export default function Navbar() {
  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // handlePayment Function
  const handlePayment = async (amount: number, itemName: string) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/createOrder`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            amount,
            bookId: itemName,
          }),
        },
      );

      const data = await res.json();
      handlePaymentVerify(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // handlePaymentVerify Function
  const handlePaymentVerify = async (data: any) => {
    const options = {
      key: import.meta.env.RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Dr. Ryan Baidya", // Payment to Name
      description: "",
      order_id: data.id,
      handler: async (response: any) => {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/verifyPayment`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            },
          );

          const verifyData = await res.json();

          if (verifyData.message) {
            toast.success(verifyData.message);
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#5f63b8",
      },
    };
    const rzp1 = new (window as any).Razorpay(options);
    rzp1.open();
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  return (

        <div className="mx-auto flex justify-between max-w-6xl py-7">
            <h2 className="text-xl text-gray-600 font-medium">Dr. Ryan Baidya</h2>
            <ul className="flex space-x-8 justify-between items-center text-gray-900 text-sm">
                <li><Link to="/" className="hover:text-[#7e9452]">Home</Link></li>
                <li><Link to="/about-us" className="hover:text-[#7e9452]">About Author</Link></li>
                <li><Link to="/the-movement" className="hover:text-[#7e9452]">The Movement</Link></li>
                <li><Link to="the-book" className="hover:text-[#7e9452]">The Book</Link></li>
                <li><Link to="contacts-media" className="hover:text-[#7e9452]">Contacts & Media</Link></li>
                <li><button onClick={handlePayment.bind(null, 10, "1")} className="bg-[#b8ce8d] px-2 py-2 text-sm rounded-lg text-white hover:bg-[#afc584]">Buy Now</button><Toaster /></li>
            </ul>
        </div>
  );
}
