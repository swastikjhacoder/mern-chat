import React from "react";
import { IconButton } from "@mui/material";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import Group from "./Group";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const GroupList = () => {
  const { background, color } = useSelector((state) => state.liveChat);
    return (
      <>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              ease: "anticipate",
              duration: "0.3",
            }}
            className="list-container"
          ></motion.div>
        </AnimatePresence>
      </>
    );
};

export default GroupList;
