import React, { useState, useEffect } from "react";
import axios from "axios";
import Date from "./Components/date.js";
import Img from "./Components/Img.js";
import Title from "./Components/title.js";
import Explanation from "./Components/explanation.js";
import {Card} from 'semantic-ui-react';





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
        <div class="ui card">
            <div class="content">
            <div class="right floated meta"><Date date={data.date}/></div>
                <Title titleName={data.title} />
            </div>
            <div class="image">
                <Img media={data.url} />
            </div>
            <div class="content">
            <span class="right floated">
                Nasa Photo of The Day
            </span>
            <Explanation exp={data.explanation} />
            </div>
        </div>
    )
    
}

export default Data;

