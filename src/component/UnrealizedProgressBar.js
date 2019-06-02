import React, { PureComponent } from "react";
import "../style/general.css"

class  UnrealizedProgressBar extends PureComponent{
render(){
  const positiveValue = this.props.positiveWidth;
  const negativeValue = this.props.negativeWidth;
  const negativeWdth = (100 + negativeValue);
  const negative  = negativeWdth+"%";
  return(
  <table>
  <tr>
  <th>
  <div className="negativeTh">
  <div id="negativeProgress" style={{width:negative}}/>
  </div>
  </th>
  <th>
  <div style={{backgroundColor: '#E4E4E4'}}>
  <div id="positiveProgress" style={{width:positiveValue}}/>
  </div>
  </th>
  </tr>
  </table>
  )
}
}

export default UnrealizedProgressBar;
