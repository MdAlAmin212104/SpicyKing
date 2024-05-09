import { Link } from 'react-router-dom';
import hero1 from '../../assets/image/hero1.jpg';
import hero2 from '../../assets/image/hero2.jpg';
import hero3 from '../../assets/image/hero3.jpg';
import hero4 from '../../assets/image/hero4.jpg';
const Hero = () => {
     
      return (
            <div className="carousel w-full rounded-3xl my-8">
                  <div id="slide1" className="carousel-item relative w-full">
                        
                        <div className="hero min-h-screen" style={{backgroundImage: `url(${hero1})`}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div>
                              <h1 className='text-2xl md:text-8xl font-bold bg-[#ffff0080] p-4 rounded-3xl text-black'>Spicy King Restaurant</h1>
                              <p className='md:text-4xl bg-[#008000] font-bold text-white lg:w-[500px] mx-auto rounded-xl mt-5 p-4'>20% discounts for take away</p>
                              <Link to='foods' className="btn bg-[teal] mt-4 text-white text-xl">Order Now</Link>
                        </div>
                        </div>
                        </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                  </div>
                  </div> 
                  <div id="slide2" className="carousel-item relative w-full">
                  <div className="hero min-h-screen" style={{backgroundImage: `url(${hero2})`}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div>
                              <h1 className='text-2xl md:text-8xl font-bold bg-[#ffff0080] p-4 rounded-3xl text-black'>Spicy King Restaurant</h1>
                              <p className='md:text-4xl bg-[#008000] font-bold text-white lg:w-[500px] mx-auto rounded-xl mt-5 p-4'>20% discounts for take away</p>
                              <Link to='foods' className="btn bg-[teal] mt-4 text-white text-xl">Order Now</Link>
                        </div>
                        </div>
                        </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                  </div>
                  </div> 
                  <div id="slide3" className="carousel-item relative w-full">
                  <div className="hero min-h-screen" style={{backgroundImage: `url(${hero3})`}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div>
                              <h1 className='text-2xl md:text-8xl font-bold bg-[#ffff0080] p-4 rounded-3xl text-black'>Spicy King Restaurant</h1>
                              <p className='md:text-4xl bg-[#008000] font-bold text-white lg:w-[500px] mx-auto rounded-xl mt-5 p-4'>20% discounts for take away</p>
                              <Link to='foods' className="btn bg-[teal] mt-4 text-white text-xl">Order Now</Link>
                        </div>
                        </div>
                        </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                  </div>
                  </div> 
                  <div id="slide4" className="carousel-item relative w-full">
                  <div className="hero min-h-screen" style={{backgroundImage: `url(${hero4})`}}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                        <div>
                              <h1 className='text-2xl md:text-8xl font-bold bg-[#ffff0080] p-4 rounded-3xl text-black'>Spicy King Restaurant</h1>
                              <p className='md:text-4xl bg-[#008000] font-bold text-white lg:w-[500px] mx-auto rounded-xl mt-5 p-4'>20% discounts for take away</p>
                              <Link to='foods' className="btn bg-[teal] mt-4 text-white text-xl">Order Now</Link>
                        </div>
                        </div>
                        </div>
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                  </div>
                  </div>
            </div>
      );
};

export default Hero;