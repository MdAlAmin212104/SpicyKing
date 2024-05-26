import React from "react";
import comingSoon from "../../../../assets/image/coming.png";
import { motion } from "framer-motion"
import { animation } from "../../../../utility/Animation";
import Timer from "../../../../components/Timer/Timer";

const ComingSoon = () => {
    const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div className="lg:flex my-8 pl-4 bg-[#FFF8EE] gap-9">
        <img src={comingSoon} alt="" className="lg:w-2/4" />
      <div className="text-left text-[#380B0B]">
        <motion.div
          variants={animation("down", 0.1)}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mt-32 w-full"
        >
          <h5 className="text-[#c33] md:text-5xl text-2xl canvas font-bold">
          Coming Soon
          </h5>
          <h2 className="md:text-5xl text-3xl font-black mt-5 heading-16">
          Coming Soon SPICY CHICKEN PIZZA  <span className="text-[#c33]">Food</span>
          </h2>
        </motion.div>
        <p className="text-2xl my-4">Feel Hunger! Order Your Favourite Food.</p>
        <Timer expiryTimestamp={time}/>
        <button className='bg-[#c33] font-bold btn border-none mt-10 text-white uppercase'>Order Now</button>
      </div>
    </div>
  );
};

export default ComingSoon;
