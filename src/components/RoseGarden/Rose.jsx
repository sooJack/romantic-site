import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";


export default function Rose({ index }) {


  return (

    <motion.div

      className="rose"

      initial={{
        scale:0,
        opacity:0,
        y:40
      }}

      animate={{
        scale:1,
        opacity:1,
        y:0
      }}

      transition={{
        duration:.6,
        delay:index * 0.05
      }}

    >

      🌹

      <motion.div

        className="rose-heart"

        animate={{
          scale:[1,1.2,1]
        }}

        transition={{
          repeat:Infinity,
          duration:1.5
        }}

      >

        <FaHeart />

      </motion.div>


    </motion.div>

  );

}
