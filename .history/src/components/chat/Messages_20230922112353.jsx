import React from "react";
import { useSelector } from "react-redux";

const Messages = () => {
  const { background, color } = useSelector((state) => state.liveChat);
  const conversations = [
    {
      name: "Test#1",
      lastMessage: "Last Message #1",
      timeStamp: "today",
    },
    {
      name: "Test#2",
      lastMessage: "Last Message #2",
      timeStamp: "today",
    },
    {
      name: "Test#3",
      lastMessage: "Last Message #3",
      timeStamp: "today",
    },
  ];
  return <div>Messages</div>;
};

export default Messages;
