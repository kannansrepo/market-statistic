import React, { PureComponent } from "react"
import "./general.css"
import quantity from "./quantity.svg"
import money from "./money.svg"
import avgCost from "./avgCost.svg"

class ThreeValuedBlock extends PureComponent{ render(){ return (
<div className="white-border">
  <table className="table-background">
    <thead>
      <tr>
        <th>
          <div style={{height:this.props.height}} className="justify-vertical">
            <img src={quantity} style={{marginRight: "5px"}}/>
            <img src={avgCost} style={{marginRight: "5px"}}/>
            <img src={money} style={{marginRight: "5px"}}/>
          </div>
        </th>
        <th>
          <div style={{height:this.props.height}} className="justify-vertical">
            <span className="left-aligned small-text-light-font">{this.props.left[0]}</span>
            <span className="left-aligned small-text-light-font">{this.props.left[1]}</span>
            <span className="left-aligned small-text-light-font">{this.props.left[2]}</span>
          </div>
        </th>
        <th className="small-text" style={ {background: this.props.color, width: "150px", align: "right"}}>
          <div className="right-aligned justify-vertical" style={{height:this.props.height}}>
            <span className="small-text">{this.props.value[0]}</span>
            <span className="small-text">{this.props.value[1]}</span>
            <span className="small-text">{this.props.value[2]}</span>
          </div>
        </th>
      </tr>
    </thead>
  </table>
</div>
) } } export default ThreeValuedBlock;
