import React from "react";
import img1 from "../../../../assets/icon/about1.png";
import img2 from "../../../../assets/icon/about2.png";
import img3 from "../../../../assets/icon/about3.png";
import img4 from "../../../../assets/icon/about4.png";
import CountUp from "react-countup";

const AboutCard = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 my-8">
      <div className="card shadow-xl bg-[#c33]">
        <figure className="px-10 pt-10">
          <img src={img1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"><span className="text-3xl font-bold text-white">
            <CountUp end={2000} duration={4.75} /> </span></h2>
          <p className="text-3xl font-bold text-white">Food Item</p>
          
        </div>
      </div>
      <div className="card shadow-xl bg-[#c33]">
        <figure className="px-10 pt-10">
          <img src={img2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"><span className="text-3xl font-bold text-white">
            <CountUp end={500} duration={4.75} /> </span></h2>
          <p className="text-3xl font-bold text-white">Food Item</p>
          
        </div>
      </div>
      <div className="card shadow-xl bg-[#c33]">
        <figure className="px-10 pt-10">
          <img src={img3} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"><span className="text-3xl font-bold text-white">
            <CountUp end={1000} duration={4.75} /> </span></h2>
          <p className="text-3xl font-bold text-white">Food Item</p>
          
        </div>
      </div>
      <div className="card shadow-xl bg-[#c33]">
        <figure className="px-10 pt-10">
          <img src={img4} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"><span className="text-3xl font-bold text-white">
            <CountUp end={600} duration={4.75} /> </span></h2>
          <p className="text-3xl font-bold text-white">Food Item</p>
          
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
