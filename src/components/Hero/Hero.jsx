import { Link } from "react-router-dom";

import hero1 from "../../assets/image/Hero/pizzaImg.png";
import man from "../../assets/image/Hero/deliveryman.png";
import hero2 from "../../assets/image/Hero/burger2.png";
import man3 from "../../assets/image/Hero/man3.png";
import hero3 from "../../assets/image/Hero/img3.png";
// import hero4 from "../../assets/image/hero4.jpg";
const Hero = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="lg:flex justify-stretch gap-9 bg-[#131313] text-white p-6">
          <div className="w-full mt-8 lg:ml-12">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-black">
              ENJOY OUR <br /> DELICIOUS
              <span className="text-[#f93]">FOOD</span>
            </h1>
            <div className="my-12">
              <button className="btn bg-transparent text-white border-dotted border-2 rounded-r-none border-r-0 lg:text-2xl font-bold p-2">
                Buy One. Get One
              </button>
              <button className="btn bg-red-600 border-none rounded-none lg:text-3xl font-bold text-white">
                FREE ❯
              </button>
            </div>
            <h3 className="lg:text-2xl md:text-xl font-bold">
              Price : <span className="text-[#f93] text-4xl">$20.40</span>
            </h3>
            <div className="lg:flex md:flex justify-start gap-4 my-12 space-y-4">
              <img src={man} alt="" className="-mt-4" />
              <div>
                <p>Delivery Order Num.</p>
                <p className="text-[#f93] text-2xl font-bold">123-456789062</p>
              </div>
              <button className="capitalize btn bg-red-600 border-none ml-8 text-white text-xl font-semibold">
                Try it now
              </button>
            </div>
          </div>
            <div className="lg:p-32 md:p-24">
            <img src={hero1} className="w-full" />
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
      <div className="lg:flex justify-stretch gap-9 bg-[#fff8ee] text-white p-6">
          <div className="w-full mt-8 lg:ml-12">
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-black text-[#2a435d]">
            ENJOY OUR <br /> CHICKEN  <span className="text-[#c33]">BURGER</span> <br /> FAST FOOD
            </h1>
            <p className="text-[#2a435d] text-2xl font-bold my-8">Bacon-Potatos-Bbq Sauce</p>
            <div className="flex gap-4">
                  <button className="btn bg-red-700 text-2xl font-bold text-white">Order Now</button>
                  <h3 className="lg:text-2xl md:text-xl text-[#2a435d] font-bold">
                  Price : <span className="text-[#f93] text-4xl">$20.40</span>
                  </h3>
            </div>
            
            <div className="lg:flex md:flex justify-start gap-4 my-12 space-y-4">
              <img src={man} alt="" className="-mt-4" />
              <div>
                <p className="text-[#2a435d]">Delivery Order Num.</p>
                <p className="text-[#f93] text-2xl font-bold">123-456789062</p>
              </div>
              <button className="capitalize btn bg-red-600 border-none ml-8 text-white text-xl font-semibold">
                Try it now
              </button>
            </div>
          </div>
            <div className="lg:p-32 md:p-24">
            <img src={hero2} className="w-full" />
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
      <div className="lg:flex justify-stretch gap-9 bg-[#fff8ee] text-white p-6">
          <div className="w-full mt-8 lg:ml-12">
            <div className="flex text-[#063] gap-4 text-2xl font-black my-8">
                  <img src={man3} alt="" />
                  <div className="mt-4">
                        <p className="canvas">Chef Recommendation</p>
                        <p className="text-[#2a435d]">Serve Drink Passion</p>
                  </div>
            </div>
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-black text-[#2a435d]">
            SNACK TIME <br />HEALS <span className="text-[#063]"> ALL WOUNDS</span> </h1>
            <div className="flex gap-4 my-8">
                  <button className="btn bg-[#063] text-2xl font-bold text-white">Order Now</button>
                  <h3 className="lg:text-2xl md:text-xl text-[#2a435d] font-bold">
                  Price : <span className=" text-4xl">$20.40</span>
                  </h3>
            </div>
            
            <div className="lg:flex md:flex justify-start gap-4 my-12 space-y-4">
              <img src={man} alt="" className="-mt-4" />
              <div>
                <p className="text-[#2a435d]">Delivery Order Num.</p>
                <p className="text-[#f93] text-2xl font-bold">123-456789062</p>
              </div>
              <button className="capitalize btn bg-red-600 border-none ml-8 text-white text-xl font-semibold">
                Try it now
              </button>
            </div>
          </div>
            <div className="lg:p-32 md:p-24">
            <img src={hero3} className="w-full" />
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
