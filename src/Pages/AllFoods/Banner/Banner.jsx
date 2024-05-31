import banner from '../../../assets/image/AllFoods.jpg'

const Banner = () => {
      return (
            <div className="hero h-[600px]" style={{backgroundImage: `url(${banner})`}}>
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                        <div className="">
                              <h1 className="mb-5 md:text-8xl font-bold">Welcome to Spicy King</h1>
                              <p className="mb-5 md:w-[700px] mx-auto">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                              <button className="btn btn-primary">Order Now</button>
                        </div>
                  </div>
            </div>
      );
};

export default Banner;