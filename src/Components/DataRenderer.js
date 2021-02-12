import React, { useState, useEffect } from "react";
import FetchData from "../services/FetchData";
import Card from "./Card"
import "./css/DataRenderer.css";

// import {
//   Card, CardImg, CardText, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';


const DataRenderer = () => {
  const [output, setOutput] = useState([]);
  const getAllData = async () => {
    const dataHolder = await FetchData();
    setOutput(dataHolder.data._embedded.events);
  };

  useEffect(() => {
    getAllData();
  }, []);



  return (
    <div className = "DataRendererBody">
      {/* <button onClick={getRndom}> Get Random</button> */}

      {/* <img src={data.images[3].url} alt={data.name} /> */}
      <div className=" flex overflow-x ...">
      
      {output.map((apidata, id) => {
				
        return (
          <div>
          <Card 
            image = {apidata.name}
            title = {apidata.name}
            date = {apidata.dates.start.localDate}
            time = {apidata.dates.start.localTime}
          />
          
          <br/>

          <Card 
            image = {apidata.name}
            title = {apidata.name}
            date = {apidata.dates.start.localDate}
            time = {apidata.dates.start.localTime}
          />

          <Card 
            image = {apidata.name}
            title = {apidata.name}
            date = {apidata.dates.start.localDate}
            time = {apidata.dates.start.localTime}
          />


          <Card 
            image = {apidata.name}
            title = {apidata.name}
            date = {apidata.dates.start.localDate}
            time = {apidata.dates.start.localTime}
          />

          </div>

          
				)
			})}
      </div>
    </div>
  );
};

export default DataRenderer;