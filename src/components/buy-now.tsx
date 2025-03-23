import { Input } from "./ui/input";
import { Label } from "./ui/label";
import ProductImage from "../assets/book-image.jpeg"

import {
  Dialog,
  // DialogClose,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Props = { TriggerComponent: React.ReactNode };

export default function BuyNow({ TriggerComponent }: Props) {
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("");

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


  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  }, []);

  // handlePayment Function
  const handlePayment = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/createOrder`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ coupon }),
        },
      );

      const data = await res.json();
      handlePaymentVerify(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  //   handlePaymentVerify Function
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

  // For Verifying Coupon
  const applyCouponHandler = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/checkCoupon`,
        {
          method: "POST",
          body: JSON.stringify({ coupon }),
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const data = await response.json();
      setCouponMessage(data.message);
    } catch {
      setCouponMessage("Error While validating coupon");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>{TriggerComponent}</DialogTrigger>
      <DialogContent className="w-[900px] bg-gray-200 max-w-full">
  {/* <DialogHeader>
    <DialogTitle>Buy Now</DialogTitle>
    <DialogDescription>
      Anyone who has this coupon will be able to get a discount.
    </DialogDescription>
  </DialogHeader> */}

  <div className="flex space-x-4">
    {/* Left Section - You can place any custom content here */}
    <div className="w-3/5">
    <h3 className="font-medium text-sm xl:text-lg mb-3">Shipping Address</h3>
    <div className="border rounded-md p-5 bg-gray-50">
      <div className="mb-3">
        <label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</label>
        <input
          id="fullName"
          type="text"
          className="border border-slate-200 text-sm rounded-md px-3 py-3 w-full mt-1 focus:outline-none"
          placeholder="Your Full Name"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="contactNumber" className="text-sm font-medium text-gray-700">Contact Number</label>
        <input
          id="contactNumber"
          type="text"
          className="border border-slate-200 text-sm rounded-md px-3 py-3 w-full mt-1 focus:outline-none"
          placeholder="Your Contact Number"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email ID</label>
        <input
          id="email"
          type="email"
          className="border border-slate-200 text-sm rounded-md px-3 py-3 w-full mt-1 focus:outline-none"
          placeholder="Your Email ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
        <textarea
          id="address"
          className="border border-slate-200 text-sm rounded-md px-3 py-3 w-full mt-1 focus:outline-none"
          placeholder="Your Address"
        ></textarea>
      </div>
    </div>
  </div>

    {/* Right Section - Existing coupon input and actions */}
    <div className="w-2/5">
      {/* <div className="grid gap-2">
        <Label htmlFor="link" className="sr-only">
          Coupon Code
        </Label>
        <div className="flex items-center space-x-2">
          <Input
            id="link"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="w-full"
          />
          <button onClick={applyCouponHandler} className="text-sm text-green-600">
            Check
          </button>
        </div>
        <h2 className="text-xs text-red-600">{couponMessage}</h2>
      </div> */}

      {/* Product Section */}
      <h2 className="font-medium text-sm xl:text-lg mb-3">Order Summary</h2>
    <div className="border rounded-md p-5 mb-2 bg-gray-50 flex items-start justify-between">
      <img src={ProductImage} alt="Product" className="w-12 h-auto object-cover mb-4" />
      <div>
        <h4 className="font-medium text-sm mb-[2px]">Book: ItsMyIndia</h4>
        <p className="text-xs text-gray-500 mb-4">Quantity: 1</p>
      </div>
      <p className="text-lg font-semibold">₹475</p>
    </div>


    {/* Coupon Section */}
    <div className="grid gap-2 mb-3 border rounded-md p-5 bg-gray-50">
      <Label htmlFor="coupon" className="sr-only">Coupon Code</Label>
      {/* <div className="flex items-center space-x-2">
        <Input
          id="coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="w-full"
          placeholder="Enter Coupon Code"
        />
        <button onClick={applyCouponHandler} className="text-sm text-green-600">
          Apply
        </button>
      </div> */}
      {/* Coupon Section */}
    <div className="grid gap-2 mb-2">
      <Label htmlFor="coupon" className="sr-only">Coupon Code</Label>
      <div>
      <h2 className="text-xs pb-2">Do not have coupon? Click 'By Now' to proceed.</h2>
      <div className="flex items-center space-x-2">
        <Input
          id="coupon"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="w-full"
          placeholder="Enter Coupon Code"
        />
        <button onClick={applyCouponHandler} className="text-sm text-green-600">
          Apply
        </button>
      </div></div>
      <h2 className="text-xs text-red-600">{couponMessage}</h2>
    </div>

    

    
    
      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>₹475</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Shipping Charge</span>
        <span>₹19.75</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Coupon Discount</span>
        <span className="font-semif">-₹71.25</span>
      </div>
      <div className="flex justify-between text-lg font-semibold">
        <span>Total Amount</span>
        <span>₹403.75</span>
      </div>
    </div>

    {/* Order Button */}
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={handlePayment}
        className="text-sm px-6 py-3 rounded-md bg-[#afc584] font-semibold text-white capitalize hover:bg-[#b8ce8d] sm:ml-0 sm:mr-auto w-full"
      >
        Place Order
      </button>
    </div>

      {/* <div className="flex items-center space-x-2 mt-6">
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <button
              type="button"
              className="bg-gray-200 text-black text-sm px-6 py-2 rounded-full"
            >
              Close
            </button>
          </DialogClose>
        </DialogFooter>
        <button
          type="button"
          onClick={handlePayment}
          className="text-sm px-6 py-2 rounded-full bg-[#afc584] font-semibold text-white capitalize hover:bg-[#b8ce8d] sm:ml-0 sm:mr-auto"
        >
          Buy Now
        </button>
      </div> */}
    </div>
  </div>
</DialogContent>

    </Dialog>
  );
}
