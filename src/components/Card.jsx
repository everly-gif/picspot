import React, { useEffect, useRef } from 'react'
import { sdk } from '../config'
const Card = (props) => {
  
  const viewFile=(id)=>{
      let result=sdk.storage.getFileView(id);
      return result.href;
      
  }
  const previewFile=(id)=>{

  let result = sdk.storage.getFilePreview(id,200,200);
  return result.href;
  }
 
  const downloadFile=(e,id)=>{
  let result = sdk.storage.getFileDownload(id);
  window.open(result.href);
  }

  const deleteFile=(e,id)=>{
    let promise = sdk.storage.deleteFile(id);
    promise.then(function (response) {
        console.log(response); // Success
    }, function (error) {
        console.log(error); // Failure
    });
 
  }
  
  return (
    <div className="card">
        <div className='img-cont'><img  src={previewFile(props.id)}/></div>
        <h4> Name : {props.name}</h4>
        <p>  MimeType: {props.mimetype}</p>
        <p>  Original Size: {props.size}</p>
        <div className='card-buttons'>
        <a target="_blank" href={viewFile(props.id)}>View</a>
        <button onClick={(e)=>downloadFile(e,props.id)}>Download</button>
        <button onClick={(e)=>deleteFile(e,props.id)}>Delete</button>
        </div>
    </div>
  )
}

export default Card;