import banner1 from "../../../../assets/image/banner1.jpg";
import banner2 from "../../../../assets/image/banner.jpg";
import banner3 from "../../../../assets/image/banner3.jpg";
import banner4 from "../../../../assets/image/banner4.png";
import cake from "../../../../assets/image/cake.png";
import 'animate.css';

import CountUp from "react-countup";

const Banner = () => {
  return (
    <div className="grid lg:grid-cols-2 h-[800px] md:h-[600px] px-4">
      <div className="lg:grid grid-cols-2 gap-4 hidden relative animate__animated animate__backInRight" >
        <img src={banner1} alt="" className="absolute top-[150px] w-40" />
        <img src={banner2} alt="" className="absolute left-[180px] top-6" />
        <img src={banner3} alt="" className="absolute bottom-0" />
        <div className="absolute right-[135px] bottom-[146px] bg-red-600 p-8 w-52 text-center h-32 pt-0">
          <img src={banner4} alt="" />
          <span className="text-3xl font-bold text-white">
            <CountUp end={2000} duration={4.75} /> +{" "}
          </span>
          <p className="text-white font-bold">Food Item</p>
        </div>
      </div>
      <div className="animate__animated animate__backInLeft">
        <h1 className="text-[#2a435d] text-5xl font-black">
          Fresh Taste At A Great Price, Only For
          <span className="text-[#c33]">
            Hungry <br /> People.
          </span>{" "}
        </h1>
        <p className="text-[#2a435d] my-8">
          Food is a restaurant, bar and coffee roastery located on a busy corner
          site in Farringdon`s Exmouth Market. With glazed.
        </p>
        <div className="bg-base-100 shadow-xl p-6 relative flex gap-4">
          <div className="avatar">
            <p className="bg-[#c33] text-white font-bold h-[40px] rounded-3xl w-[42px] flex items-center pl-2 absolute -top-4 left-4">15%</p>
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={cake} />
            </div>
          </div>
          <div>
          <h1 className="text-[#2a435d] text-2xl font-bold">Garlic Burger Parties</h1>
          <p className="text-[#2a435d]">It is a long established fact that a reader BBQ food Chicken.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
