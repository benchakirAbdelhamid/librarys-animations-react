import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FramerMotion = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const handleCursor = (e) => {
      // console.log(e.clientX , e.clientY)
      setX(e.clientX - 20);
      setY(e.clientY - 20);
    };
    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);

  const text = "th ieiiwj w ojqojq foqp kfpkq f dqffqe";
  const pVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition : {
        staggerChildren : 0.05,
      }
    },
  };
  const spanVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  return (
    <div>
      <motion.p variants={pVariants} initial="hidden" animate="visible">
        {text.split("").map((char, index) => (
          <motion.span variants={spanVariants} key={index}>
            {char}
          </motion.span>
        ))}
      </motion.p>
      <motion.div
        animate={{
          x: x,
          y: y,
        }}
        className="cursor"
      ></motion.div>

      {/* animate */}
      <motion.button
        animate={{ x: 100, y: 50, opacity: 0.6, backgroundColor: "red" }}
      >
        FramerMotion
      </motion.button>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* initial transition */}
      <motion.button
        initial={{ x: 50, rotate: 180 }}
        transition={{ duration: 1 }}
        animate={{
          x: 100,
          rotate: 10,
          y: 50,
          opacity: 0.6,
          backgroundColor: "red",
        }}
      >
        FramerMotion
      </motion.button>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/*exit + AnimatePresence =>  9bal ikhtifaa ghadi dir animation */}
      <AnimatePresence>
        {show && (
          <motion.button
            exit={{ opacity: 0, x: 200 }}
            //   initial={{x : 50 , rotate:180}}
            transition={{ duration: 1 }}
            // animate={{ x: 100,rotate:10, y: 50, opacity: 0.6, backgroundColor: "red" }}
          >
            FramerMotion
          </motion.button>
        )}
      </AnimatePresence>
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* transition */}
      <motion.button
        initial={{ x: 100 }}
        transition={{ duration: 1 }}
        animate={{ x: -100 }}
      >
        FramerMotion
      </motion.button>
      <br />
      <br />
      <motion.button
        initial={{ x: 100 }}
        transition={{ duration: 1, delay: 1 }}
        animate={{ x: -100 }}
      >
        FramerMotion delay
      </motion.button>
      <br />
      <br />
      <motion.button
        initial={{ x: 100 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 120,
          mass: 5, // number dyal chhal min mara tharak
          damping: 5, // time dyal haraka
        }}
        animate={{ x: -100 }}
      >
        FramerMotion type
      </motion.button>
      <br />
      <br />
      <motion.button
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ x: 0, opacity: 1 }}
      >
        FramerMotion
      </motion.button>
      {/* event */}
      <br />
      <br />
      <motion.button
        initial={{ x: 100 }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 200,
          mass: 0.5,
          damping: 5,
        }}
        whileHover={{ scale: 1.1 }} // fi hover
        whileTap={{ scale: 0.9 }} // fi click
        // whileDrag={{scale:1.2}}
        // drag='x'
        whileInView={{ x: 0, scale: 1.5 }}
        animate={{ x: -100 }}
      >
        FramerMotion event
      </motion.button>
      <br />
      <br />
      <motion.input
        type="text"
        whileFocus={{ scale: 1.1 }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 200,
          mass: 0.5,
          damping: 5,
        }}
      ></motion.input>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <motion.button
        initial={{ x: 100 }}
        transition={{
          duration: 2,
          type: "spring",
          stiffness: 200,
          mass: 0.5,
          damping: 5,
        }}
        whileHover={{ scale: 1.1 }} // fi hover
        whileTap={{ scale: 0.9 }} // fi click
        // whileDrag={{scale:1.2}}
        // drag='x'
        whileInView={{ x: 0, scale: 1.5 }} // mli naswal liha fi scroll dir animation
      >
        whileInView
      </motion.button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default FramerMotion;
