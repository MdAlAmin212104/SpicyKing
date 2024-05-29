import React from "react";
import cooking from "../../../../assets/image/cooking.jpg";
import menu from "../../../../assets/image/deliciousFood.png";
import { motion } from "framer-motion";

import { Parallax, Background } from "react-parallax";
import { animation } from "../../../../utility/Animation";

const DeliciousFood = () => {
  return (
    <div className="my-10">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={cooking}
        bgImageAlt="the dog"
        strength={-200}
      >
        {/*  */}
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-90"></div>
          <div className="grid lg:grid-cols-2 gap-6">
          
          <motion.div
            variants={animation("right", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-left text-[#380B0B]"
          >
            
            <p className="text-6xl mt-24 ml-8 text-white font-bold">
            Fresh Taste At A Great Price, Only For <span className="text-[#f93]">Delicious Food Lover.</span>
            </p>
          </motion.div>
          <motion.div
            variants={animation("left", 0.1)}
            initial={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img src={menu} alt="" className="" />
          </motion.div>
        </div>
        </div>
        
      </Parallax>
    </div>
  );
};

export default DeliciousFood;
