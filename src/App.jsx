import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import VideoDetails from "./components/VideoDetails";
import ChannelDetail from "./components/ChannelDetail";
import SearchDetails from "./components/SearchDetails";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  const [mainVideoId, setmainVideoId] = useState("6mx2pSvnbhU");
  const [channelId, setchannelId] = useState("UCBVjMGOIkavEAhyqpxJ73Dw");
  const [searchedText, setsearchedText] = useState("movie");

  return (
    <Router>
      <div className="">
        <Navbar setsearchedText={setsearchedText} />
      </div>
      <div className="flex bg-black">
        <div className="hidden md:block"><SideBar /></div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                mainVideoId={mainVideoId}
                setmainVideoId={setmainVideoId}
                setchannelId={setchannelId}
              />
            }
          />
          <Route
            path="/VideoDetails"
            element={
              <VideoDetails
                mainVideoId={mainVideoId}
                setmainVideoId={setmainVideoId}
                setchannelId={setchannelId}
              />
            }
          />
          <Route
            path="/ChannelDetail"
            element={
              <ChannelDetail
                channelId={channelId}
                setmainVideoId={setmainVideoId}
              />
            }
          />
          <Route
            path="/SearchDetails"
            element={
              <SearchDetails
                searchedText={searchedText}
                setmainVideoId={setmainVideoId}
                setchannelId={setchannelId}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
