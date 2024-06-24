import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import {Side} from "./components/Sider";
import {Main} from "./components/Main";
import {Settings} from "./components/Setting";
import {Routes, Route} from "react-router-dom";
import {Profile} from "./components/Profile";
import {Comment} from "./components/Comment";
import {useAuth} from "./utils/useAuth";
import {userApi} from "./actors/user";
import {updateProfile, useProfileStore} from "./redux";
import {Sidebar} from "./components/Sidebar";
import {updateSelectPost, useSelectPostStore} from "./redux/features/SelectPost";
import {ProfileModal} from "./components/Modal/Profile";

function App() {

  const selectPost = useSelectPostStore()
  const {principal, isAuth} = useAuth()
  const scrollContainerRef = useRef(null);

  const [open, setOpen] = useState(false)
  const profile = useProfileStore()
  useEffect(() => {
    const t = setTimeout(() => {
      if (isAuth) {
        if (!("id" in profile)) setOpen(true)
        else setOpen(false)
      }
    }, 2000)

    return () => {
      clearTimeout(t)
    }

  }, [profile, isAuth])

  useEffect(() => {
    if (principal) {
      userApi.getProfile(principal).then(e => {
        if (e) {
          updateProfile(e)
        }
      })
    }
  }, [principal])

  useEffect(() => {
    window.addEventListener("click", (e) => {
      // @ts-ignore
      const className = e.target.className as any
      try {
        if (typeof className !== "string") return 0
        if (className.includes("post_main") ||
          className.includes("author") || className.includes("tweet")
          || className.includes("img_list") || className.includes("post_bottom") || className.includes("comment")) {

        } else {
          updateSelectPost({})
        }
      } catch (e) {
        console.log(e)
      }

    })

    return () => {
      window.removeEventListener("click", () => {
      })
    }
  }, [])

  const scrollToTop = () => {
    console.log(scrollContainerRef.current)
    if (scrollContainerRef.current) {
      //@ts-ignore
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth' // 使用平滑滚动
      });
    }
  };

  return (
    <div className={"App"}>
      <ProfileModal setOpen={setOpen} open={open} canClose={false}/>
      <Side scrollToTop={scrollToTop}/>
      <Routes>
        <Route path="/" element={<Main scrollContainerRef={scrollContainerRef}/>}/>
        <Route path="home" element={<Main scrollContainerRef={scrollContainerRef}/>}/>
        <Route path="explore" element={<Main scrollContainerRef={scrollContainerRef}/>}/>
        {/*<Route path="wallet" element={<Wallet/>}/>*/}
        <Route path="settings" element={<Settings/>}/>
        <Route path="profile/:id" element={ <Profile scrollContainerRef={scrollContainerRef} scrollToTop={scrollToTop}/>}/>
        {/*<Route path="*" element={<ErrorPage/>}/>*/}
      </Routes>
      {"comment" in selectPost ?
        <Comment comments={selectPost.comment}/>
        : <Sidebar/>
      }

    </div>
  );
}

export default App;