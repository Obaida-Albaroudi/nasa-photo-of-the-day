import React, { useState, useEffect } from "react";
import axios from "axios";
import Date from "./Components/date.js";
import Img from "./Components/Img.js";
import Title from "./Components/title.js";
import Explanation from "./Components/explanation.js";


function Data() {
    const [data, setData] = useState([]);
    


    useEffect(() =>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15")
        .then ( info  => {
            setData(info.data)
        })
        .catch(error =>{
            return "Error not workingggggg!"
        });        
    }, []);

    return (
        <div>

            <div>
            <Title titleName={data.title} />
            <Date date={data.date}/>
            </div>

            <div>
                <Img media={data.url}/>
            </div>

            <div>
                <Explanation exp={data.explanation} />
            </div>
       
        </div>


    )
    
}

export default Data;

