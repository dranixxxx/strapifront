import React, {useContext, useEffect} from "react";
import axios from 'axios';
import Cookie from "js-cookie";
import AppContext from "../context/AppContext";
import {NavItem} from "reactstrap";
import Link from "next/link";


function success() {
    const { user } = useContext(AppContext);
    useEffect(async() => {
    if (!user) return;
    const token = Cookie.get("token");
    const res = await axios.put(`http://localhost:1337/users/${user.id}`,
    //const res = await axios.put(`http://localhost:1337/users/1`,
    {
        roleprice: 3,
    },
    {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
console.log("success")

});


    return (
        <>
            <div className="texctr">
            {user ? (
                        <div> {user.username} đã mua tài khoản thành công</div>
            ) : (null)}
            <Link href="/">quay trở về trang chủ</Link>
            </div>
        </>
    )
}
export default success;