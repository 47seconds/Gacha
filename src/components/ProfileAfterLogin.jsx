import React from "react";
import { useSelector } from "react-redux";

function ProfileAfterLogin() {
    const avatar = useSelector(state => state.userReducer.user.avatarUrl);
    // console.log(useSelector(state => state.userReducer.user.avatarUrl));
    
  return (
    <img src={avatar} alt="user profile pic" className="w-12 h-12 rounded-full"/>
  )
}

export default ProfileAfterLogin