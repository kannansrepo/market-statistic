import React, { PureComponent } from "react";
import DonutChart from 'react-donut-chart';
class PieChartSample extends PureComponent {
  render() {
    return (
      <div style={{marginTop:"25px"}}>
      <DonutChart
        width ={300}
          data={[{
              label: 'Mutual Fund',
              value: this.props.mfValue,
              strokeColor:"#606af2",
          },
          {
              label:'Equity',
              value: this.props.eqValue,
              strokeColor:"#27ad71"

          }]} />
          </div>
)}
}
export default PieChartSample;
