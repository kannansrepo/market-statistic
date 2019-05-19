import React, { PureComponent } from "react";
import statsData from "./stats.json";
import Statistics from "./Statistics";

class StatisticsList extends PureComponent{
    render(){
        return(
        <div style={{ display:'block'}}>
        {statsData.map(statsdata =>
          <Statistics
            key={statsdata.id}
          {...statsdata}
            />)
          }
        </div>)
    }
}
export default StatisticsList;
