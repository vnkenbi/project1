import React, { useState } from "react";

const Mycomponenthead =(props) => {
    const [name,setname]=useState(''); 
    const [tuoi,settuoi]=useState('');
    const [diachi,setdiachi]=useState('');
    


    const handleOnchangeName=(event)=>{
        // alert("me")
        setname(event.target.value);
        
    }

    const handleOnchangeTuoi=(event)=>{
        settuoi(event.target.value);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        props.handlethem(
            {   
                id:Math.floor(Math.random()*100+1)+"danom",
                name:name,
                tuoi:tuoi
            }
        )
       
            

    }
    return (
        
                
                <>
                    <div> Nội dung input Tên đang nhập:  {name} </div>
                    <div> Nội dung input Tuổi đang nhập: {tuoi}</div>
                                <form onSubmit={(event)=>{handleSubmit(event)} }>
                                    <label>Tên:</label>
                                    <input onChange={(event)=>{handleOnchangeName(event)} }/> <br />
                                    <label>Tuổi: </label>
                                    <input onChange={(event)=>{handleOnchangeTuoi(event)} }/><br />
                                    <button>Submit</button>
                                </form>
                                <hr/>
                                <hr/>
                                <hr/>

                    
                    
                </>
                
        
    );
}
export default Mycomponenthead;