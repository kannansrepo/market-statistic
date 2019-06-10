import React, { PureComponent } from "react";
import stats from "../icons/stats.json"
import Statistics from "./Statistics";
import { bindActionCreators } from "redux";
import * as statsAction from "../redux/action/StatsActions"
import {connect} from "react-redux";
import PropTypes from "prop-types";

class StatisticsList extends PureComponent{
  componentDidMount() {
    if (this.props.stats.length === 0) {
      this.props.actions.loadStats().catch(error => {
        alert("stats failed to load. " + error);
      });
    }
  }
    render(){
        return(
        <div style={{ display:'block'}}>
        {stats.map(stat =>
          <Statistics
            key={stat.id}
          {...stat}
            />)
          }
        </div>)
    }
}

Statistics.propTypes = {
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  stats: PropTypes.array.isRequired
}

function mapstateToProps(state){
  return {
    stats : state.stats
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadStats: bindActionCreators(statsAction.loadStats, dispatch)
      
    }
  };
}
export default connect(mapstateToProps,mapDispatchToProps)(StatisticsList);
