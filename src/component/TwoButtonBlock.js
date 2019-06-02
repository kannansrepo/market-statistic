import React, { PureComponent } from "react";
import "../style/general.css"

class TwoButtonBlock extends PureComponent{
  render(){
    return (
      <div className="white-border">
    <table className="table-background">
        <thead>
            <tr style={{height:this.props.height}} >
                <th>
                    <div className="left-aligned small-text-light-font">
                        <div className="square">
                            <div className="aligned-center">
                                BUY
                            </div>
                        </div>
                        <div className="square" style={{marginTop: '5px'}}>
                            <div className="aligned-center">
                                SELL
                            </div>
                        </div>
                    </div>

                </th>
            </tr>
        </thead>
    </table>
</div>
    )
  }
}
export default TwoButtonBlock;
