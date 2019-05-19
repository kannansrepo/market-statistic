import React, { PureComponent } from "react";
import TwoValuedBlock from "./TwoValuedBlock";
import ThreeValuedBlock from "./ThreeValuedBlock";
import TwoButtonBlock from "./TwoButtonBlock"
import TwoValuedBlockWithoutArrow from "./TwoValuedBlockWithoutArrow"
import VendorInfoBlock from "./VendorInfoBlock"
class Statistics extends PureComponent{
    render(){
      var rowHeight = '55px';
      var data = this.props
      const keyArrayForThreeValuedBlock =["quantity","avg-cost", "Invested Amt"]
      const valueArrayForThreeValuedBlock =[data.quantity,"$"+data.average_cost, (data.quantity*data.price)]

      const keyArrayForTwoValuedBlock =["Market Value","% of protfolio value"]
      const valueArrayForTwoValuedBlock =["$"+data.invested_Amount,data.protfolio_value]

      const keyArrayForTwoValuedLastBlock =["Unrealized P/L","% Return"]
      const valueArrayForTwoValuedLastBlock =[data.unrealized,data.return]

        return(
        <div style={{ display:'flex'}}>
        <VendorInfoBlock height={rowHeight} price={data.price} scrip={data.scrip}/>
        <ThreeValuedBlock left={keyArrayForThreeValuedBlock} value={valueArrayForThreeValuedBlock} color="#F9F9F9" height={rowHeight}/>
        <TwoValuedBlockWithoutArrow left={keyArrayForTwoValuedBlock} value={valueArrayForTwoValuedBlock} arrowVisible = "false" color="#F9F9F9" height={rowHeight}/>
        <TwoValuedBlock left={keyArrayForTwoValuedLastBlock} value={valueArrayForTwoValuedLastBlock} arrowVisible = "true" color="#F9F9F9" height={rowHeight}/>
        <TwoButtonBlock left="Invested Amount" value="$6736.58"/>
        </div>)
    }
}
export default Statistics;
