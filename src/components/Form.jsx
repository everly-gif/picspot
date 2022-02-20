import React, { useRef, useState } from 'react'
import { sdk } from '../config'

const Form = () => {
 const [user,userState]=useState(null);
 const [files,getFiles]=useState();
 const inputRef=useRef();
 const createFile= (e)=>{
     e.preventDefault();
     if(user == null){
         let userSession=sdk.account.createAnonymousSession();
         userSession.then(()=>{
            console.log("Anonymous Session Created Successfully");
            userState(userSession);
        },(error)=>{
            console.log(error);
        })
         
     }
     let promise= sdk.storage.createFile('unique()',files);
     promise.then(()=>{
         console.log("Created File Successfully");
         inputRef.current.value = '';
         window.location.reload(); // for the time being
     },(error)=>{
         console.log(error);
     })
 }


  return (
    <div className='form'>
        <h3>Have a picture? Submit them</h3>
        <form onSubmit={(e)=>createFile(e)}>
        <div className='file-flex'><input type="file" ref={inputRef} onChange={(e)=>getFiles(e.target.files[0])} required/></div>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default Form