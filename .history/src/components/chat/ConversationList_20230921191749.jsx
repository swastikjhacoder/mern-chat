import React from "react";

const ConversationList = () => {
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
    return (
        <>
            {
                conversations
        }
        </>
  );
};

export default ConversationList;
