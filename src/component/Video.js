import React from "react";
import Video from '../asset/Enrique Iglesias - Finally Found You.mp4';
import "../Style/main.css";

const VideoDrag=(props)=>{

  const dragStart = (e)=>{
      const target = e.target;
      e.dataTransfer.setData('video_id',target.id);
      const data=e.target.childNodes;
    //   data[0].pause();
    // console.log(e.target.childNodes); 
    data[0].pause();

      
  }

  const dragOver = (e)=>{
      e.stopPropagation();
  }


return (

<div className="video-div" 
  id={props.id} draggable={true} onDragStart={dragStart} onDragOver={dragOver}>
    <video width="200" height="240" controls>
        <source src={Video} type="video/mp4"/>
    </video>
</div>

);


}
export default VideoDrag;