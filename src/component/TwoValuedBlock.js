import React, { PureComponent } from "react";
import "../style/general.css"
import UnrealizedProgressBar from './UnrealizedProgressBar';
class TwoValuedBlock extends PureComponent{
  render(){
    const percentage = parseFloat(this.props.value[1]);
const isPositive = parseInt(this.props.value[1]) >0;
const positiveWidth = isPositive?this.props.value[1] : '0%';
const negativeWidth = isPositive? 0 :  percentage;
    return (
      <div className="white-border">
      <table className = "table-background" style={{background: this.props.color}}>
        <thead>
          <tr >
          <th>
          <div style={{height:this.props.height}} className="left-aligned justify-vertical">
              <span className="bold-label">{this.props.left[0]}</span>
              <span className="small-text-light-font" >{this.props.left[1]}</span>

            <UnrealizedProgressBar positiveWidth = {positiveWidth} negativeWidth = {negativeWidth}/>
              </div>
              </th>
            <th className="small-text" style= {{background: this.props.color, width: "100px", align: "right"}} >
            <div style={{height:this.props.height}} className="right-aligned justify-vertical">
                <span >{this.props.value[0]}</span>
                <div >
                  <div style={{   display: this.props.arrowVisible ? 'block': 'none'}}>
                    <img className="arrow-up" style={{display: isPositive ? 'block' :'none'}}/>
                     <img className="arrow-down" style={{display: !isPositive ? 'block' :'none'}} /></div>

                <span className="right-aligned">{this.props.value[1]}</span></div>

                <span></span>
                </div>
            </th>
            </tr>
        </thead>
      </table>
      </div>
    )
  }
}
export default TwoValuedBlock;
