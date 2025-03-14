import { Input } from "./ui/input";
import { Label } from "./ui/label";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
      <DialogContent className="bg-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Input Coupon</DialogTitle>
          <DialogDescription>
            Anyone who has this coupon will be able to get discount.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="flex flex-col items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <div className="flex items-center space-x-2">
                <Input
                id="link"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="w-40"
              />

            <button onClick={applyCouponHandler} className="text-sm text-green-600">Check Coupon</button>
              </div>
              <h2 className="text-xs text-red-600">{couponMessage}</h2>
              
            </div>
            <div className="flex items-center space-x-2 w-full my-6">
            <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <button type="button" className="bg-gray-200 text-black text-sm px-6 py-2 rounded-full">Close</button>
          </DialogClose>
        </DialogFooter>
              <button
              type="button"
              onClick={handlePayment}
              className="text-sm px-6 py-2 rounded-full bg-[#afc584] font-semibold text-white capitalize hover:bg-[#b8ce8d] sm:ml-0 sm:mr-auto"
            >
              buy now
            </button>
            </div>
          </div>
        </div>
        
      </DialogContent>
    </Dialog>
  );
}
