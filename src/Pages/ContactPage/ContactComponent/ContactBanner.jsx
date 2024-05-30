import banner from "../../../assets/image/contact.jpg";

const ContactBanner = () => {
  return (
    <div
      className="hero h-[600px]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-[800px]">
          <h1 className="mb-5 text-5xl font-bold uppercase">Contact Us</h1>
          <p className="mb-5">
            Our team is composed of talented professionals who are passionate
            about what they do. From engineers and designers to customer service
            representatives, each member of our team plays a crucial role in our
            success.
          </p>
          <button className="btn w-[200px] btn-success">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
