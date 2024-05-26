import { motion } from "framer-motion"
import { animation } from "../../utility/Animation";


const SectionTitle = ({subHeading, heading, colorHeading}) => {
    return (
        <motion.div
        variants={animation('down', 0.1)}
        initial = {'hidden'}
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}>
        <h5 className="text-[#c33] md:text-4xl text-2xl text-center canvas font-bold">
            {subHeading}
        </h5>
        <h2 className="md:text-5xl text-3xl font-black text-center mt-5 text-[#2a435d]">
            {heading} <span className="text-[#c33]">{colorHeading}</span>
        </h2>
      </motion.div>
    );
};

export default SectionTitle;