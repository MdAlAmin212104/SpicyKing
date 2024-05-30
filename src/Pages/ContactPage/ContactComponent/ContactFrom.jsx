import banner1 from "../../../assets/image/banner1.jpg";
import banner2 from "../../../assets/image/banner.jpg";
import banner3 from "../../../assets/image/banner3.jpg";
import banner4 from "../../../assets/image/aboutMan.jpg";
import "animate.css";
import { motion } from "framer-motion";
import { animation } from "../../../utility/Animation";

const ContactFrom = () => {
  return (
    <div className="grid lg:grid-cols-2 h-[800px] md:h-[600px] px-4 my-8">
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
        <section className="p-6 dark:text-gray-800">
          <form
            className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-base-100 h-full"
          >
            <h2 className="w-full text-3xl font-bold leading-tight">
              Contact us
            </h2>
            <div>
              <label htmlFor="name" className="block mb-1 ml-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 ml-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                required=""
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 ml-1">
                Message
              </label>
              <textarea
                id="message"
                type="text"
                placeholder="Message..."
                className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-600 focus:dark:ring-violet-600 hover:dark:ring-violet-600 text-gray-50"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </motion.div>
    </div>
  );
};

export default ContactFrom;
