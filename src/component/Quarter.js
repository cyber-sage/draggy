import react from "react";
import VideoDrag from "./Video";
import "../Style/main.css";

const Quarter = (props)=>{
 const drop= (e)=>{
     e.preventDefault();
     const video_id=e.dataTransfer.getData('video_id');

     const videos= document.getElementById(video_id);
     videos.style.display="block";
     e.target.appendChild(videos);
 }

   const dragOver = (e)=>{
       e.preventDefault();
   }


  return(

   <div className={`main-div ${props.data}`}
       onDrop={drop} onDragOver={dragOver}
   >
       
       {props.last ? <VideoDrag id="video-1"/> : null}
       
       
   </div>


  );


}
export default Quarter;