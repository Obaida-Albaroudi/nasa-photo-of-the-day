import React from "react";

const Img = ({media}) => {
    console.log(media)
    // if("youtube" || "vimeo" in media  ){
    //     return (
    //     <video > 
    //     <source src={media} type="video/mp4" alt="Cool Nasa Picture or Video"/>
    //     </video>        
    //     )} else{
            return (
                <div>
                  <img src={media}  alt="Cool Nasa Picture or Video"/>
                </div>
              );

        // }

};

export default Img;