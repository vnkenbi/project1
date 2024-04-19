import React from "react";

const MycomChinh =(props)=>{
    const {listUsers}=props;
    // console.log(props)
    return (
        <>
            <div>
                {listUsers.map(
                    (DuLieuTungDong)=>{
                        return (DuLieuTungDong);
                    }
                )
                }
                <div> Noi dung Ten tu Input: </div>
                <div> Noi dung Tuoi tu Input: </div>
            </div>
        </>
    );
}
export default MycomChinh;