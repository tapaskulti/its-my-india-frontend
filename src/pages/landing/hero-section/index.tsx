import { Toaster } from "react-hot-toast";

import BookImage from "../../../assets/book-img.png";
import BuyNow from "../../../components/buy-now";

export default function HeroSection() {
  return (
    <div className="bg-white py-16">
      <section id="hero" className="mx-4 md:mx-8">
        <div className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-center gap-8 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center md:min-w-96 pt-5">
            <h2 className="mb-8 text-center text-base font-bold sm:text-center md:text-4xl">
              "Declonize India: Re-imagine"
            </h2>
            <h3 className="text-center text-3xl font-bold pb-2 text-slate-600">
              A New Democratic Republic Constitution for India
            </h3>
            <p className="mb-6 leading-7 text-center text-sm font-semibold text-gray-500 sm:mb-12 sm:text-center lg:text-lg">
              The book outlines a roadmap for drafting a Constitution rooted in India’s unique heritage and aspirations. It offers a transformative vision and a pragmatic approach to adopting a new, inclusive Constitution—a journey every Indian must undertake.
            </p>

            <BuyNow
              TriggerComponent={
                <button
                  type="button"
                  className="mx-auto flex w-full max-w-64 items-center justify-center rounded-full bg-[#afc584] px-12 py-3 font-semibold capitalize text-white hover:bg-[#b8ce8d]"
                >
                  buy now
                </button>
              }
            />

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

// {/* <Dialog>
//               <DialogTrigger asChild>
//                 {/* <Button variant="outline">Share</Button> */}
//                 <button
//                   // onClick={handlePayment.bind(null, 10, "1")}
//                   className="mx-auto flex w-full max-w-64 items-center justify-center rounded-full bg-[#b8ce8d] px-12 py-3 font-semibold capitalize text-white hover:bg-[#afc584] sm:ml-0 sm:mr-auto"
//                 >
//                   buy now
//                 </button>
//               </DialogTrigger>
//               <DialogContent className="bg-white sm:max-w-md">
//                 <DialogHeader>
//                   <DialogTitle>Share link</DialogTitle>
//                   <DialogDescription>
//                     Anyone who has this link will be able to view this.
//                   </DialogDescription>
//                 </DialogHeader>
//                 <div className="flex items-center space-x-2">
//                   {/* <div className="grid flex-1 gap-2">
//                     <Label htmlFor="link" className="sr-only">
//                       Link
//                     </Label>
//                     <Input
//                       id="link"
//                       defaultValue="https://ui.shadcn.com/docs/installation"
//                       readOnly
//                     />
//                   </div>
//                   <Button type="submit" size="sm" className="px-3">
//                     <span className="sr-only">Copy</span>
//                     <Copy />
//                   </Button> */}
//                   <Pay />
//                 </div>
//                 <DialogFooter className="sm:justify-start">
//                   <DialogClose asChild>
//                     <button type="button">Close</button>
//                   </DialogClose>
//                 </DialogFooter>
//               </DialogContent>
//             </Dialog> */}
