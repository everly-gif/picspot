import React, { useEffect, useState } from 'react'
import { sdk } from '../config'
import Card from './Card';

const Display = () => {
  const [files,displayFiles]=useState();
  const displayPictures=()=>{
   let promise=sdk.storage.listFiles();
      promise.then((response)=>{
          displayFiles(response.files);
      },(error)=>{
          console.log(error);
      })
  }
  useEffect(()=>{
    displayPictures();
  },[]);
      
  
  return (
    <div className='card-cont'>
    {files && files.map((file)=>{
    return(
      <Card key={file.$id} id={file.$id}name={file.name} mimetype={file.mimeType} size={file.sizeOriginal} displayFiles={displayPictures}/>
    );
    })}
    </div>
  )
}

export default Display