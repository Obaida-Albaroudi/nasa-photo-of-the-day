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
        <div class="ui card" style = {{width: '80%', margin:"5%"}} textAlign="center" vertivalAlign="center">
            <div class="content" >
            <div class="right floated meta" style={{ width:"100%"}}><Date date={data.date}/></div>
                <div style = {{width: '100%'}}><Title titleName={data.title} /></div>
            </div>
            <div class="image" style = {{width: '10%', padding:"10%"}}>
                <Img media={data.url} />
            </div>
            <div class="content">
             <span class="right floated" style = {{width: '100%'}}>
                    <p>Nasa Photo of The Day</p>
                    <Explanation exp={data.explanation} />
             </span >         
            </div>
        </div>
    )
    
}

export default Data;

