import React from "react";
import "./Chart.css"
import Data from "../../Data";
const months = Data.months;
const ChartItem = () =>{
    return(
        <div className="chart">
             {months?.map((month, index) => (
           <div key={index} className="chart-bar">
                <div className="chart-bar-inner">
                <div className="chart-bar-fill"></div>
                </div>
           <h5>{month}</h5>
        </div>
      ))}
        </div>
   );
 };
export default ChartItem;