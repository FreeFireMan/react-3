import {useEffect, useState} from "react";

export default function Details({match:{params:{id}}, location:{state}}) {

   let[user, setUser]= useState({})
    useEffect(()=>{
       setUser(state.item)
    },[id])
    return (
        <div>
            <h3>{`${user.id}. ${user.first_name} ${user.last_name}`}</h3>
            <img src={user.avatar}/>
            <p>{user.email}</p>
        </div>
    );
}