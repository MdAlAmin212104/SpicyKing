import React from "react";
import { FaHouse } from "react-icons/fa6";
import { ImMobile } from "react-icons/im";
import { TbTruckDelivery } from "react-icons/tb";

const ContactInfo = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 my-8">
      <div className="card lg:card-side bg-base-100 shadow-xl p-8">
        <figure>
          <ImMobile/>
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">PhoneUs 24/7</h2>
          <p>01707691162</p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-8">
        <figure >
          <FaHouse />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">Get Direction</h2>
          <p className="text-center">Ranachandi, Kishorgong, Nilphamari.</p>
        </div>
      </div>
      <div className="card lg:card-side bg-base-100 shadow-xl p-8">
        <figure>
        <TbTruckDelivery />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">Opening Hour</h2>
          <p className="text-center">Everyday 11.00 PM  11.00 AM</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
