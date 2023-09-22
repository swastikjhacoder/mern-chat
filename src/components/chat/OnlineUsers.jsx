import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const OnlineUsers = () => {
  const { color } = useSelector((state) => state.liveChat);
  const props = { name: "Online User" };
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="online-user"
      style={{ color: color, border: `1px solid ${color}` }}
    >
      <p className="ou-icon">{props.name[0]}</p>
      <p className="ou-title">{props.name}</p>
    </motion.div>
  );
};

export default OnlineUsers;
