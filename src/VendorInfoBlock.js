import React, { PureComponent } from "react"
import "./general.css"
 import hamburger from "./hamburger.svg"
  import vendorImage from "./vendorLogo1.png"
   class VendorInfoBlock extends PureComponent{ render(){ return (
<div className="white-border">
  <table className="table-background">
    <thead>
      <tr style={{height:this.props.height,background: this.props.color}}>
        <th style={{display: "flex"}}>
          <img src={hamburger}/>
          <div style={{display: "block", marginLeft: "16px", marginRight: "16px"}}>
            <span className="bold-lightgrey">{this.props.scrip}</span>
            <div>
              <span >$</span>
              <span style={{color:"blue"}}> {this.props.price}</span>
            </div>
          </div>
        </th>
        <th>
          <img src={vendorImage}/>
        </th>
      </tr>
    </thead>
  </table>
</div>
) } } export default VendorInfoBlock;
