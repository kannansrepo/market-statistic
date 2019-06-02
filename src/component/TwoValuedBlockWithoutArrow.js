import React, { PureComponent } from "react";
import "../style/general.css"
import { Line} from 'rc-progress'
class TwoValuedBlockWithoutArrow extends PureComponent{
  render(){
    const percentage = parseFloat(this.props.value[1]);
    return (
      <div className="white-border">
      <table className = "table-background" style={{background: this.props.color}}>
        <thead>
          <tr >
          <th>
          <div style={{height:this.props.height}} className="left-aligned justify-vertical">
              <span className="bold-label">{this.props.left[0]}</span>
              <span className="small-text-light-font" >{this.props.left[1]}</span>

            <Line percent={percentage} strokeWidth="4" strokeColor="green" />
              </div>
              </th>
            <th className="small-text" style= {{background: this.props.color, width: "100px", align: "right"}} >
            <div style={{height:this.props.height}} className="right-aligned justify-vertical">
                <span >{this.props.value[0]}</span>
                <span>{this.props.value[1]}</span>
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
export default TwoValuedBlockWithoutArrow;
