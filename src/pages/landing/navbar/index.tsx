import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import BuyNow from "../../../components/buy-now";

export default function Navbar() {
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
    <div className="mx-auto flex max-w-6xl justify-between py-7">
      <h2 className="text-xl font-medium text-gray-600">Dr. Ryan Baidya</h2>
      <ul className="flex items-center justify-between space-x-6 text-sm text-gray-900">
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
          <Link to="/the-movement" className="hover:text-[#7e9452]">
            The Movement
          </Link>
        </li>
        <li>
          <Link to="the-book" className="hover:text-[#7e9452]">
            The Book
          </Link>
        </li>
        <li>
          <Link to="resources-articles" className="hover:text-[#7e9452]">
            Resources & Articles
          </Link>
        </li>
        <li>
          <Link to="contact-media" className="hover:text-[#7e9452]">
            Contacts & Media
          </Link>
        </li>
        <li>
          <Toaster />
          <BuyNow
            TriggerComponent={
              <button
                // onClick={handlePayment.bind(null, 10, "1")}
                className="rounded-lg bg-[#b8ce8d] px-2 py-2 text-sm text-white hover:bg-[#afc584]"
              >
                Buy Now
              </button>
            }
          />
        </li>
      </ul>
    </div>
  );
}
