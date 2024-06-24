import "./index.scss"

import React, {ChangeEventHandler, MouseEventHandler, useState} from "react"
import {Modal} from "../index";
import Icon from "../../../Icons/Icon";
import {useAuth} from "../../../utils/useAuth";
import {useDropzone} from "react-dropzone";
import {maxSize} from "../Post";
import {message, notification} from "antd";
import {aApi} from "../../../actors/photo_storage";
import {userApi} from "../../../actors/user";
import {updateProfile, useProfileStore} from "../../../redux";
import {CheckOutlined, CloseOutlined, LoadingOutlined} from "@ant-design/icons";
import {Profile} from "../../../declarations/user/user";
import {getBase64} from "../../../utils/util";

type form_type = {
  ID: string,
  Nam: string,
  Bio: string,
  Education: string,
  Company: string
}
export const ProfileModal = ({open, setOpen, canClose}: { open: boolean, setOpen: Function, canClose: boolean }) => {
  const {principal, userFeedCai} = useAuth()
  const [backFile, setBackFile] = useState<File>()
  const [avatarFile, setAvatarFile] = useState<File>()
  const [api, contextHolder] = notification.useNotification();
  const [form, setForm] = useState<form_type>({
    ID: "",
    Nam: "",
    Bio: "",
    Education: "",
    Company: ""
  })
  const profile = useProfileStore()
  const onChange = (title: keyof form_type, e: any) => {
    const form_1 = form
    form_1[title] = e.target.value
    setForm(form_1)
  }

  const done = async () => {
    if (!principal || !userFeedCai) return 0
    api.info({
      message: 'Edit ing ...',
      key: 'edit',
      duration: null,
      description: '',
      icon: <LoadingOutlined/>
    });
    try {
      setOpen(false)
      const res = await aApi.upload_photo([backFile ?? new File([], ""), avatarFile ?? new File([], "")])
      await userApi.createProfile({
        id: principal,
        avatar_url: res[1],
        name: form.Nam,
        education: form.Education,
        biography: form.Bio,
        company: form.Company,
        feed_canister: [userFeedCai],
        back_img_url: res[0],
        handle: form.ID
      })
      const profile = await userApi.getProfile(principal)
      if (profile) updateProfile(profile)
      api.success({
        message: 'Edit Successful !',
        key: 'edit',
        description: '',
        icon: <CheckOutlined/>
      })
    } catch (e) {
      api.error({
        message: 'Edit failed !',
        key: 'edit',
        description: '',
        icon: <CloseOutlined/>
      })
    }
  }

  return <>
    {contextHolder}
    <Modal setOpen={setOpen} open={open} component={<div className={"login_modal"}>
      <div style={{display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center"}}>
        <div className={"title"}>
          <Icon name={"edit"}/>
          Edit Profile
        </div>
        <div onClick={() => setOpen(false)} style={{cursor: "pointer", display: canClose ? "flex" : "none"}}>❌</div>
      </div>
      <Background setBackFile={setBackFile} profile={profile}/>
      <div style={{width: "100%", display: "flex"}}>
        <Avatar setAvatarFile={setAvatarFile} profile={profile}/>
        <div style={{flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", gap: "1rem"}}>
          <InfoItem onchange={onChange} t={"ID"} value={profile.handle ? profile.handle : ""} flag={true}/>
          <InfoItem onchange={onChange} t={"Nam"} placeholder={"your name"} flag={true}/>
        </div>
      </div>
      <InfoItem onchange={onChange} t={"Bio"}
                placeholder={"your biography"}
                flag={false}/>
      <InfoItem onchange={onChange} t={"Education"} flag={false}/>
      <InfoItem onchange={onChange} t={"Company"} flag={false}/>
      <Done done={done}/>
    </div>}/>
  </>
}

const InfoItem = ({
                    t,
                    value,
                    flag,
                    placeholder, onchange
                  }: { t: keyof form_type, value?: string, flag: boolean, placeholder?: string, onchange: (arg0: keyof form_type, e: any) => void }) => {

  return <div className={"item_wrap"}
              style={{flexDirection: flag ? "row" : "column", alignItems: flag ? "center" : "start"}}>
    <div style={{fontWeight: "bold", width: "14%", display: "flex"}}>{t}</div>
    {t === "Bio" ? <textarea onChange={(e) => onchange(t, e)} placeholder={placeholder} name="" id=""></textarea> :
      <input onChange={(e) => onchange(t, e)} value={value} readOnly={!!value} placeholder={placeholder} type="text"/>
    }

  </div>
}


export const Done = ({done}: { done: MouseEventHandler<HTMLDivElement> }) => {
  return <div className={"done"} onClick={done}>
    Done
  </div>
}

const Avatar = ({setAvatarFile, profile}: { setAvatarFile: Function, profile: Profile }) => {
  const [previewImg, setPreviewImg] = useState("")

  const onDrop = React.useCallback((files: File[]) => {
    if (files.length === 0) {
      return message.warning("aaa")
    }
    getBase64(files[0]).then(e => {
      setPreviewImg(e)
    })
    setAvatarFile(files[0])
  }, [])

  const {getRootProps, getInputProps} = useDropzone({
    onDrop, multiple: true, accept: {
      'image/jpeg': [],
      'image/png': []
    }, maxSize, maxFiles: 1
  })

  return <div{...getRootProps()}>
    <input {...getInputProps()} />
    <div className={"avatar"}>
      <img
        src={previewImg ? previewImg : ("avatar_url" in profile) && profile.avatar_url ? profile.avatar_url : "./img_8.png"}
        style={{height: "100%", width: "100%", borderRadius: "50%"}} alt=""/>
    </div>
  </div>
}

const Background = ({setBackFile, profile}: { setBackFile: Function, profile: Profile }) => {
  const [previewImg, setPreviewImg] = useState("")
  const onDrop = React.useCallback((files: File[]) => {
    if (files.length === 0) {
      return message.warning("file size is too large")
    }
    getBase64(files[0]).then(e => {
      setPreviewImg(e)
    })
    setBackFile(files[0])
  }, [])

  const {getRootProps, getInputProps} = useDropzone({
    onDrop, multiple: true, accept: {
      'image/jpeg': [],
      'image/png': [],
    }, maxSize, maxFiles: 1
  })
  return <div className={"avatar_wrap"}>
    <div style={{width: "100%"}} {...getRootProps()}>
      <input {...getInputProps()} />
      <div className={"background"}
           style={{
             background: `rgba(0, 0, 0, 0.3) url(${previewImg ?
               previewImg : ("back_img_url" in profile) &&
               profile.back_img_url ? profile.back_img_url : "./img_8.png"}) no-repeat center center `,
             backgroundSize: previewImg || ("back_img_url" in profile) &&
             profile.back_img_url ? "cover" : "contain"
           }}>
      </div>
    </div>
  </div>
}
