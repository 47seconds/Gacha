import React from "react";
import { useSelector } from "react-redux";

function ProfileAfterLogin() {
    const avatar = useSelector(state => state.userReducer.user.avatarUrl);
    // console.log(useSelector(state => state.userReducer.user.avatarUrl));
    
  return (
    <img src={avatar} className="h-full p-2 rounded-full"/>
  )
}

export default ProfileAfterLogin