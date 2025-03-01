import BookImage from "../../../assets/book-img.png";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function HeroSection() {
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
    <div className="bg-white py-16">
      <section id="hero" className="mx-4 md:mx-8">
        <div className="mx-auto flex max-w-3xl flex-col-reverse items-center justify-center gap-8 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center md:min-w-96">
            <h2 className="mb-8 text-center text-base font-bold sm:text-left md:text-lg">
              "A New Democratic Republic for India"
            </h2>
            <h3 className="text-center text-xl font-bold sm:text-left">
              Decolonize India:
            </h3>
            <p className="mb-6 text-center text-sm font-semibold text-gray-500 sm:mb-12 sm:text-left lg:text-base">
              A New Freedom Day, A New Constitution, A New Bharat
            </p>
            <button
              onClick={handlePayment.bind(null, 10, "1")}
              className="mx-auto flex w-full max-w-64 items-center justify-center rounded-full bg-[#b8ce8d] px-12 py-3 font-semibold capitalize text-white hover:bg-[#afc584] sm:ml-0 sm:mr-auto"
            >
              buy now
            </button>
            <Toaster />
          </div>
          <div className="max-w-96 flex-1">
            <img src={BookImage} alt="Book Image" />
          </div>
        </div>
      </section>
    </div>
  );
}
