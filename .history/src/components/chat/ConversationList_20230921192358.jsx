import React from "react";

const ConversationList = ({props}) => {
    return (
      <>
        <p className="con-icon">{props.name[0]}</p>
        <p className="con-title">{props.name}</p>
        <p className="con-lastMessage">{props.lastMessage}</p>
        <p className="con-title">{props.timeStamp}</p>
      </>
    );
};

export default ConversationList;
