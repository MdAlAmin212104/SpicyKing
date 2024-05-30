import React from "react";
import SectionTitle from "../../../../Shared/SectionTitle/SectionTitle";
import chef1 from "../../../../assets/image/chef1.png";
import chef2 from "../../../../assets/image/chef2.png";
import chef3 from "../../../../assets/image/chef3.png";
import chef4 from "../../../../assets/image/chef4.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ChefSection = () => {
  return (
    <div className="my-6">
      <SectionTitle
        subHeading="Team Member"
        heading="Professional"
        colorHeading="Chef"
      />
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 my-8">
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={chef1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Mathij Sen Deo</h2>
                <p>
                  It is a long established fact that a reader BBQ food Chicken
                </p>
                <div className="grid grid-flow-col gap-4">
                  <a>
                    <FaFacebook />
                  </a>
                  <a>
                    <FaTwitter />
                  </a>
                  <a>
                    <FaInstagram />
                  </a>
                  <a>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={chef2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Malina Weissa</h2>
                <p>
                  It is a long established fact that a reader BBQ food Chicken
                </p>
                <div className="grid grid-flow-col gap-4">
                  <a>
                    <FaFacebook />
                  </a>
                  <a>
                    <FaTwitter />
                  </a>
                  <a>
                    <FaInstagram />
                  </a>
                  <a>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={chef3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Tonmoy Khan</h2>
                <p>
                  It is a long established fact that a reader BBQ food Chicken
                </p>
                <div className="grid grid-flow-col gap-4">
                  <a>
                    <FaFacebook />
                  </a>
                  <a>
                    <FaTwitter />
                  </a>
                  <a>
                    <FaInstagram />
                  </a>
                  <a>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={chef4} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Mathja Semo</h2>
                <p>
                  It is a long established fact that a reader BBQ food Chicken
                </p>
                <div className="grid grid-flow-col gap-4">
                  <a>
                    <FaFacebook />
                  </a>
                  <a>
                    <FaTwitter />
                  </a>
                  <a>
                    <FaInstagram />
                  </a>
                  <a>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 my-8">
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={chef1} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Mathij Sen Deo</h2>
                <p>
                  It is a long established fact that a reader BBQ food Chicken
                </p>
                <div className="grid grid-flow-col gap-4">
                  <a>
                    <FaFacebook />
                  </a>
                  <a>
                    <FaTwitter />
                  </a>
                  <a>
                    <FaInstagram />
                  </a>
                  <a>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={chef2} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Malina Weissa</h2>
                <p>
                  It is a long established fact that a reader BBQ food Chicken
                </p>
                <div className="grid grid-flow-col gap-4">
                  <a>
                    <FaFacebook />
                  </a>
                  <a>
                    <FaTwitter />
                  </a>
                  <a>
                    <FaInstagram />
                  </a>
                  <a>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={chef3} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Tonmoy Khan</h2>
                <p>
                  It is a long established fact that a reader BBQ food Chicken
                </p>
                <div className="grid grid-flow-col gap-4">
                  <a>
                    <FaFacebook />
                  </a>
                  <a>
                    <FaTwitter />
                  </a>
                  <a>
                    <FaInstagram />
                  </a>
                  <a>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
            <div className="card bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img src={chef4} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Mathja Semo</h2>
                <p>
                  It is a long established fact that a reader BBQ food Chicken
                </p>
                <div className="grid grid-flow-col gap-4">
                  <a>
                    <FaFacebook />
                  </a>
                  <a>
                    <FaTwitter />
                  </a>
                  <a>
                    <FaInstagram />
                  </a>
                  <a>
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ChefSection;
