// import { Button } from "@mui/material";
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleDarkMode, addUser, removeUser } from './redux/liveChatSlice';

// function App() {
//   const dispatch = useDispatch();
//   const mode = useSelector((state) => state.liveChat.mode);
//   const userInfo = useSelector((state) => state.liveChat.userInfo);
//   const background = useSelector( ( state ) => state.liveChat.background );
//   console.log(mode);
//   console.log(userInfo);
//   console.log(background);
//   return (
//     <>
//       <Button onClick={() => dispatch(toggleDarkMode())}>Click Me</Button>
//     </>
//   );
// }

// export default App;

import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainContainer from "./components/MainContainer";
import ChatContainer from "./components/chat/ChatContainer";
import OnlineUsersGroup from "./components/chat/OnlineUsersGroup";
import GroupList from "./components/chat/GroupList";
import CreateGroup from "./components/chat/CreateGroup";
import ChatWelcome from "./components/chat/ChatWelcome";
import NotFound404 from "./components/NotFound404";

const App = () => {
  const background = useSelector( ( state ) => state.liveChat.background );
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      errorElement: <NotFound404 />,
      children: [
        { index: true, element: <MainContainer /> },
        { path: "about", element: <C /> },
        {
          path: "items",
          children: [
            { index: true, element: <Items /> },
            { path: ":id", element: <ItemDetails /> },
          ],
        },
      ],
    },
  ]);
  return (
    <>
      <div style={{ backgroundColor: background }} className="app-container">
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
