
import React, {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="row-example" />
      <div className="row-example" />
      <div className="row-example" />
    </motion.div>
  );
}

const Item = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  console.log(isOpen);
  return (
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
  );
}



export default Item;