import React, { useState } from 'react';
import MycomponentRuotCha from './MycomponentRuotCha'
const Mycomponent =()=>{
    const [listUsers,setlistUsers]=useState(
       [

        {id:1, name: "Nguyen1", diachi:"ChauPhong"},
        {id:2, name: "Nguyen2", diachi:"ChauPhong"},
        {id:3, name: "Nguyen3", diachi:"ChauPhong"}

       ]

    )
    return (
        <>
            <div>
                Tieu De
                <MycomponentRuotCha listUsers={listUsers} />
            </div>
        </>
    );
}
export default Mycomponent;