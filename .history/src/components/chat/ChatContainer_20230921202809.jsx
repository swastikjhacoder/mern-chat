import React from "react";
import { IconButton } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useSelector } from "react-redux";

const ChatContainer = () => {
  const { background, color } = useSelector((state) => state.liveChat);
  const props = { name: "Test#1", timeStamp: "today" };
  return (
    <>
      <div className="right-sidebar-container">
        <div className="chat-header">
          <div className="chat-header-text">
            <p className="con-title">{props.name}</p>
            <p className="con-timeStamp">{props.timeStamp}</p>
          </div>
          <div className="icon">
            <IconButton>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="chat-message">Message</div>
        <div className="chat-input">Input</div>
      </div>
    </>
  );
};

export default ChatContainer;
