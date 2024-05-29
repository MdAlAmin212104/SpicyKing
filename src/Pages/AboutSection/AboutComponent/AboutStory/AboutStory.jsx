import banner1 from "../../../../assets/image/banner1.jpg";
import banner2 from "../../../../assets/image/banner.jpg";
import banner3 from "../../../../assets/image/banner3.jpg";
import banner4 from "../../../../assets/image/aboutMan.jpg";
import "animate.css";
import { motion } from "framer-motion";

import { animation } from "../../../../utility/Animation";

const AboutStory = () => {
  return (
    <div className="grid lg:grid-cols-2 h-[800px] md:h-[600px] px-4">
      <motion.div
        variants={animation("right", 0.1)}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="lg:grid grid-cols-2 gap-4 hidden relative"
      >
        <img src={banner1} alt="" className="absolute top-[150px] w-40" />
        <img src={banner2} alt="" className="absolute left-[180px] top-6" />
        <img src={banner3} alt="" className="absolute bottom-0" />
        <img src={banner4} alt="" className="absolute right-[70px] bottom-0" />
      </motion.div>
      <motion.div
        variants={animation("left", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className="text-[#2a435d] text-5xl font-black">
          The Story About Food Khan, Only For
          <span className="text-[#c33]">
            Hungry <br /> People.
          </span>{" "}
        </h1>
        <p className="text-[#2a435d] my-8">
          Food is a restaurant, bar and coffee roastery located on a busy corner
          site in Farringdon's Exmouth Market. With glazed.
        </p>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="History"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <h2 className="text-xl">FoodKhan is Bangladeshi’s own fast food restaurants chain offering Burgers, French fries, Milkshakes, Smoothies and so much more.</h2>
            <p className="text-4xl my-4"><span className="text-[#c33] canvas ">-   Tonmoy</span> Head Of Chef</p>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Journey"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <h2 className="text-xl">FoodKhan is Bangladeshi’s own fast food restaurants chain offering Burgers, French fries, Milkshakes, Smoothies and so much more. We are known for our delicious taste, superior quality</h2>
            <p className="text-4xl my-4"><span className="text-[#c33] canvas ">-   Tonmoy</span> Head Of Chef</p>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Experience"
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <h2 className="text-xl">Food Khan is a restaurant, bar and coffee roasters located on a busy corner site in Farrington's Exmouth Market.</h2>
            <p className="text-4xl my-4"><span className="text-[#c33] canvas ">-   Tonmoy</span> Head Of Chef</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutStory;
