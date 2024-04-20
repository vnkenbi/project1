import React, { useState } from 'react';
import Mycomponenthead from './Mycomponenthead';
import Mycomponentdetail from './Mycomponentdetail';

const Mycomponent =()=>{
    const [listUsers,setlistUsers]=useState(
       [

        {id:1, name: "Nguyen1", tuoi:"12",diachi:"ChauPhong"},
        {id:2, name: "Nguyen2", tuoi:"22",diachi:"ChauPhong"},
        {id:3, name: "Nguyen3", tuoi:"32",diachi:"ChauPhong"}

       ]
    

    )

    // tạo 1 useState
    const [congcu,setcongcu]=useState(
        [
            'dao','keo','cua'
        ]

    )



    const handlethem=(pt)=>{
        // let listmoi=[pt,...listUsers];
        // setlistUsers([pt,...listUsers])
        let listmoi=[pt,...listUsers]
        setlistUsers(listmoi);

    }




    //=================
    const handlexoa=(user_id)=>{
            // let listUsersClone=listUsers;
            let listUsersClone=[...listUsers]

            listUsersClone=listUsersClone.filter(
                (DulieuTungDong)=>{ 
                    return (DulieuTungDong.id !==user_id)
                    
                }
            )
            setlistUsers(listUsersClone);
    }



    return (
        <>
            <div>
                Tieu De
                <Mycomponenthead 

                handlethem={handlethem}
                />
                <Mycomponentdetail 
                listUsers={listUsers}
                handlexoa={handlexoa}
                congcu={congcu}
                />
            </div>
        </>
    );
}
export default Mycomponent;