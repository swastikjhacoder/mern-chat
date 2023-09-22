import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Group = () => {
  const { color } = useSelector((state) => state.liveChat);
  const props = { name: "Group Name" };
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group"
      style={{ color: color, border: `1px solid ${color}` }}
    >
      <p className="g-title">{props.name}</p>
    </motion.div>
  );
};

export default Group;
