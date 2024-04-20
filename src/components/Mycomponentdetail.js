// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import './Mycomponentdetail.scss'
// import './Mycomponentdetail.css'
// const [isshowhide,setisshowhide]=useState(true)


const Mycomponentdetail =(props)=>{
       const [isshowhide,setisshowhide]=useState(true)
      const {listUsers}=props;
      console.log(props)
      const {congcu}=props
      const handleonclickshowhide=()=>{
              let isshowhidemoi =!isshowhide;
              setisshowhide(isshowhidemoi);
      }
      console.log(">>>>>Call me render")
      useEffect(
       ()=>{
              if(listUsers.length===0){
                     alert("Bạn đã xóa hết user")
              }
              console.log(">>>>>>Call me useeffect")
       },[listUsers]
      )

       return (
              <div className="Mycomponentdetail-container">
                    <div onClick={()=>{handleonclickshowhide()}}>
                     {isshowhide===true ? "Hide list user" : "Show list user"}
                    </div>
                    
                    {isshowhide &&
                    <>
                            {
                            listUsers.map((user)=>{
                                   return (
                                   <div key={user.id +"randa"} className={+user.tuoi>18 ? "blue" : "red"}>
                                                 <div>Tên: {user.name}</div>
                                                 <div>Tuổi: {user.tuoi}</div>
                                                 <button onClick={()=>{props.handlexoa(user.id)} }>Delete</button>
                                                 
                                                 <hr/>
                                          </div>
                                   )
                            })   
                            }
                     </>
                     }
                     
              </div>
       );
}
export default Mycomponentdetail;