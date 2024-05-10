import React from 'react';
import './App.css';
import {Side} from "./components/Sider";
import {Sidebar} from "./components/Sidebar";
import {Main} from "./components/Main";
import {Wallet} from "./components/Wallet";
import {Settings} from "./components/Setting";
import {Routes, Route} from "react-router-dom";
import {Profile} from "./components/Profile";
import {Comment} from "./components/Comment";

function App() {
  return (
    <div className={"App"}>
      <Side/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="home" element={<Main/>}/>
        <Route path="explore" element={<Main/>}/>
        <Route path="wallet" element={<Wallet/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="profile" element={<Profile/>}/>
        {/*<Route path="*" element={<ErrorPage/>}/>*/}
      </Routes>
      {/*<Sidebar/>*/}
      <Comment/>
    </div>
  );
}

export default App;
