import { Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.liveChat.mode);
  const userInfo = useSelector((state) => state.liveChat.userInfo);
  console.log(liveChat);
  return (
    <>
      <Button>Click Me</Button>
    </>
  );
}

export default App;
