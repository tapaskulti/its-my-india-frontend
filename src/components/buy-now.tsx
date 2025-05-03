import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import ProductImage from "../assets/book-image.jpeg";

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  // SelectValue,
} from "./ui/select";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Props = { TriggerComponent: React.ReactNode };

export default function BuyNow({ TriggerComponent }: Props) {
  const [coupon, setCoupon] = useState("");
  const [couponMessage, setCouponMessage] = useState("");

  const [name, setName] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [mail, setMail] = React.useState("");
  const [address, setAdress] = React.useState("");

  const [isNameCorrect, setIsNameCorrect] = React.useState(false);
  const [isContactCorrect, setIsContactCorrect] = React.useState(false);
  const [isMailCorrect, setIsMailCorrect] = React.useState(false);
  const [isAddressCorrect, setIsAdressCorrect] = React.useState(false);

  const [discoutPercentage, setDiscountPercentage] = useState(0);

  const shippingCharges = [110, 315, 540];
  const [shippingCharge, setShippingCharge] = React.useState(
    shippingCharges[0],
  );

  const subTotal = +import.meta.env.VITE_BOOK_NOW;
  const couponDiscount = (subTotal * discoutPercentage) / 100;
  const totalAmount = +(subTotal - couponDiscount).toFixed(2) + +shippingCharge;

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
    // const payload = {
    //   name,
    //   contact,
    //   mail,
    //   address,
    // };

    try {
      
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/createOrder`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ coupon, shippingCharge }),
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
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "Dr. Ryan Baidya", // Payment to Name
      description: "",
      order_id: data.id,
      handler: async (response: any) => {
        try {
          const res = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/verifyPayment`,
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
            await fetch(
              `${import.meta.env.VITE_BACKEND_URL}/sendDetails?payment-id=${response.razorpay_payment_id}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  customerName: name,
                  customerEmail: mail,
                  customerAddress: address,
                  contactNo: contact,
                  shippingCharge,
                }),
              },
            );
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
      console.log("Printed");
      console.log( `${import.meta.env.VITE_BACKEND_URL}/checkCoupon` , "<-----")
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/checkCoupon`,
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
      const discountPercentage = Number(data.discountPercentage);
      if (!isNaN(discountPercentage))
        setDiscountPercentage(+data.discountPercentage);
      else setDiscountPercentage(0);
    } catch {
      setCouponMessage("Error while validating coupon");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{TriggerComponent}</DialogTrigger>
      <DialogContent className="w-[900px] max-w-full bg-gray-200">
        <div className="flex space-x-4">
          {/* Left Section - You can place any custom content here */}
          <div className="w-3/5">
            <h3 className="mb-3 text-sm font-medium xl:text-lg">
              Shipping Address
            </h3>
            <div className="rounded-md border bg-gray-50 p-5">
              <div className="mb-3">
                <label
                  htmlFor="fullName"
                  className="text-sm font-medium text-gray-700"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (e.target.value.length > 0) {
                      setIsNameCorrect(true);
                    } else {
                      setIsNameCorrect(false);
                    }
                  }}
                  id="fullName"
                  type="text"
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-3 text-sm focus:outline-none"
                  placeholder="Your Full Name"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="contactNumber"
                  className="text-sm font-medium text-gray-700"
                >
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="contactNumber"
                  type="text"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                    if (e.target.value.length > 0) {
                      setIsContactCorrect(true);
                    } else {
                      setIsNameCorrect(false);
                    }
                  }}
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-3 text-sm focus:outline-none"
                  placeholder="Your Contact Number"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={mail}
                  onChange={(e) => {
                    setMail(e.target.value);
                    if (e.target.value.length > 0) {
                      setIsMailCorrect(true);
                    } else {
                      setIsMailCorrect(false);
                    }
                  }}
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-3 text-sm focus:outline-none"
                  placeholder="Your Email ID"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-700"
                >
                  Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => {
                    setAdress(e.target.value);
                    if (e.target.value.length > 0) {
                      setIsAdressCorrect(true);
                    } else {
                      setIsAdressCorrect(false);
                    }
                  }}
                  className="mt-1 w-full rounded-md border border-slate-200 px-3 py-3 text-sm focus:outline-none"
                  placeholder="Your Address"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Right Section - Existing coupon input and actions */}
          <div className="w-2/5">
            {/* Product Section */}
            <h2 className="mb-3 text-sm font-medium xl:text-lg">
              Order Summary
            </h2>
            <div className="mb-2 flex items-start justify-between rounded-md border bg-gray-50 p-5">
              <img
                src={ProductImage}
                alt="Product"
                className="mb-4 h-auto w-12 object-cover"
              />
              <div>
                <h4 className="mb-[2px] text-sm font-medium">
                  Book: ItsMyIndia
                </h4>
                <p className="mb-4 text-xs text-gray-500">Quantity: 1</p>
              </div>
              <p className="text-lg font-semibold">₹{subTotal}</p>
            </div>

            {/* Coupon Section */}
            <div className="mb-3 grid gap-2 rounded-md border bg-gray-50 p-5">
              <Label htmlFor="coupon" className="sr-only">
                Coupon Code
              </Label>
              {/* Coupon Section */}
              <div className="mb-2 grid gap-2">
                <Label htmlFor="coupon" className="sr-only">
                  Coupon Code
                </Label>
                <div>
                  <h2 className="pb-2 text-xs">
                    Do not have coupon? Click 'Place Order' to proceed.
                  </h2>
                  <div className="flex items-center space-x-2">
                    <Input
                      id="coupon"
                      value={coupon}
                      onChange={(e) => setCoupon(e.target.value)}
                      className="w-full"
                      placeholder="Enter Coupon Code"
                    />
                    <button
                      onClick={applyCouponHandler}
                      className="text-sm text-green-600"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <h2 className="text-xs text-red-600">{couponMessage}</h2>
              </div>

              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{subTotal}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Shipping Charge</span>
                {/* <Select
                  value={shippingCharge.toString()}
                  onValueChange={(val) => setShippingCharge(Number(val))}
                >
                  <SelectTrigger className="w-24">
                    {shippingCharge}
                  </SelectTrigger>
                  <SelectContent align="end" className="bg-white">
                    <SelectItem value={shippingCharges[0].toString()}>
                      Rs 110 (5-7 days){" "}
                    </SelectItem>
                    <SelectItem value={shippingCharges[1].toString()}>
                      Rs 315 (5-6 days){" "}
                    </SelectItem>
                    <SelectItem value={shippingCharges[2].toString()}>
                      Rs 540 (2-3 days)
                    </SelectItem>
                  </SelectContent>
                </Select> */}
                <div className="space-y-2">
  {shippingCharges.map((charge, index) => (
    <label key={charge} className="flex items-center space-x-2 text-sm">
      <input
        type="radio"
        name="shipping"
        value={charge}
        checked={shippingCharge === charge}
        onChange={() => setShippingCharge(charge)}
        className="accent-[#5f63b8]"
      />
      <span>
        Rs {charge}{" "}
        {index === 0
          ? "(5-7 days)"
          : index === 1
          ? "(5-6 days)"
          : "(2-3 days)"}
      </span>
    </label>
  ))}
</div>

              </div>
              <div className="flex justify-between text-sm">
                <span>Coupon Discount</span>
                <span className="font-semif">-₹{couponDiscount}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>Total Amount</span>
                <span>₹{totalAmount}</span>
              </div>
            </div>

            {/* Order Button */}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handlePayment}
                disabled={
                  !isNameCorrect ||
                  !isMailCorrect ||
                  !isContactCorrect ||
                  !isAddressCorrect
                }
                className="w-full rounded-md bg-[#afc584] px-6 py-3 text-sm font-semibold capitalize text-white hover:bg-[#b8ce8d] disabled:cursor-not-allowed disabled:bg-gray-500 sm:ml-0 sm:mr-auto"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
