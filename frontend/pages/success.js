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
    const res = await axios.put(`http://edunet.tranonline.ml/api/user/public/${user._id}`,
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
                        <div> {user.name} đã mua tài khoản thành công</div>
            ) : (null)}
            <Link href="/">quay trở về trang chủ</Link>
            </div>
        </>
    )
}
export default success;