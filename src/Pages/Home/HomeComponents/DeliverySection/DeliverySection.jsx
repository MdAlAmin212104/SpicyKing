import React from "react";
import banner from "../../../../assets/image/delivery.png";
import man from "../../../../assets/image/Hero/deliveryman.png";
import { motion } from "framer-motion"
import { animation } from "../../../../utility/Animation";


const DeliverySection = () => {
  return (
    <div className="flex gap-4 bg-[#fff8ee] py-12 rounded-3xl">
      <motion.div
        variants={animation('right', 0.1)}
        initial = {'hidden'}
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
       className="w-full">
        <img src={banner} alt="" className="w-full" />
      </motion.div>
      <motion.div
        variants={animation('left', 0.1)}
        initial = {'hidden'}
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
       className="ml-8">
        <h1 className="canvas text-[#c33] text-5xl my-4 font-bold">Delivery</h1>
        <h2 className="text-5xl font-bold">
          A Moments Of Delivered <br />{" "}
          <span className="text-[#c33]">On Right Time & Place </span>
        </h2>
        <p className="mt-8">
          Food Khan is a restaurant, bar and coffee roastery located on a busy
          corner site in Farringdon's Exmouth Market. With glazed frontage on
          two sides of the building, overlooking the market and a bustling
          London inteon.
        </p>

        <div className="lg:flex md:flex justify-start gap-4 my-12 space-y-4">
          <img src={man} alt="" className="-mt-4" />
          <div>
            <p className="text-[#2a435d]">Delivery Order Num.</p>
            <p className="text-[#f93] text-2xl font-bold">123-456789062</p>
          </div>
          <button className="capitalize btn text-white bg-red-600 border-none ml-8 text-xl font-semibold">
            Try it now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DeliverySection;
