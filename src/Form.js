import React, { useState } from "react";

export default function Form(){
    const [info,setInfo] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    return <form>
        <h3>The typed info is {info}</h3>
        <input type="text" placeholder="Enter Name" onChange={(e) => {
            setInfo(e.target.value);
        }}/>
        <h3>The typed email is {email}</h3>
        <input type="text" placeholder="Enter Email" onChange={(e) => {
            setEmail(e.target.value);
        }}/>
        <h3>The typed Password is {password}</h3>
        <input type="password" placeholder="Enter Password" onChange={(e) => {
            setPassword(e.target.value);
        }}/>
        <h3>The typed phone is {phone}</h3>
        <input type="text" placeholder="Enter Phone" onChange={(e) => {
            setPhone(e.target.value);
        }}/>
        </form>
}