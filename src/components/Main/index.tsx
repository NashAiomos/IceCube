import "./index.scss"

import React, {useEffect, useState} from 'react';
import Icon from "../../Icons/Icon";
import {useLocation, useNavigate} from "react-router-dom";
import {Post as postType} from "../../declarations/feed/feed";
import {Spin, Empty} from "antd";
import {useAuth} from "../../utils/useAuth";
import Feed from "../../actors/feed";
import {rootPostApi} from "../../actors/root_bucket";
import Bucket from "../../actors/bucket";
import {useAllDataStore} from "../../redux";
import {userApi} from "../../actors/user";
import {Profile} from "../../declarations/user/user";
import {shortenString} from "../Sider";

export const Main = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [data, setData] = useState<postType[]>()
  const {userFeedCai, isAuth} = useAuth()
  const {allPost, allFeed} = useAllDataStore()

  const HomeData = React.useMemo(() => {
    if (!allFeed || !allPost) return undefined
    return [...allFeed, ...allPost]
  }, [allFeed, allPost])

  const change = () => {
    if (isAuth === false)
      navigate("/explore")
  }

  const Title = React.useMemo(() => {
    if (location.pathname === "/explore") return "Explore"
    return "Home"
  }, [location])

  useEffect(() => {
    !isAuth && change()
  }, [isAuth, Title])


  const getHomeData = async () => {
    if (!userFeedCai) return 0
    const feedApi = new Feed(userFeedCai)
    await Promise.all([feedApi.getAllPost(), feedApi.getLatestFeed(20)])
  }

  const getExploreData = async () => {
    const bucket = await rootPostApi.getAllAvailableBucket()
    if (bucket.length === 0) return setData([])
    console.log(bucket)
    const bucketApi = new Bucket(bucket[0])
    const res = await bucketApi.getLatestFeed(30)
    console.log(res)
    setData(res)
  }

  useEffect(() => {
    if (Title == "Home") {
      getHomeData()
    } else {
      getExploreData()
    }
  }, [Title, userFeedCai])

  if (Title === "Explore") {
    return <div className={"main_wrap scroll_main"}>
      <div className={"title"}>{Title}</div>
      {data ? data.length === 0 ? <Empty style={{width: "100%"}}/>
        : data.map((v, k) => {
          return <Post post={v}/>
        }) : <Spin spinning={true} style={{width: "100%"}}/>}
    </div>
  }

  return <div className={"main_wrap scroll_main"}>
    <div className={"title"}>{Title}</div>
    {HomeData ? HomeData.length === 0 ? <Empty style={{width: "100%"}}/>
      : HomeData.map((v, k) => {
        return <Post post={v}/>
      }) : <Spin spinning={true} style={{width: "100%"}}/>}
  </div>
}

export const Post = ({post}: { post: postType }) => {
  const [profile, setProfile] = useState<Profile>()
  const principal = post.user

  const getProfile = async () => {
    const res = await userApi.getProfile(principal)
    setProfile(res)
  }
  useEffect(() => {
    getProfile()
  }, [principal])

  return <div className={"post_main"}>
    <div className={"author"}>
      <img style={{borderRadius: "50%"}} className={"avatar"}
           src={profile?.avatar_url ? profile.avatar_url : "img_3.png"} alt=""/>
      <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center"}}>
        <div style={{fontSize: "2rem"}}>{profile?.name}</div>
        <div style={{
          fontSize: "2rem",
          color: "rgba(0,0,0,0.5)"
        }}>{profile ? shortenString(profile.id.toString(), 10) : ""}</div>
      </div>
    </div>
    <div className={"tweet"}>
      {post.content}
      <div className={"img_list"}>
        {post.photo_url.map((v, k) => {
          return <img key={k} src={v} alt=""/>
        })}
      </div>
    </div>
    <div className={"post_bottom"}>
      <span>
      <Icon name={"like"}/>
        {post.like.length}
      </span>
      <span>
      <Icon name={"comment"}/>
        {post.comment.length}
      </span>
      <span>
      <Icon name={"repost"}/>
        {post.repost.length}
      </span>
    </div>
  </div>
}
