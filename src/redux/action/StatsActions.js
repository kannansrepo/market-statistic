import * as statsAPI from "../../api/statsApi";
import * as types from "../actionType"

export function loadStatsSuccess(stats){
    return {type: types.LOAD_STATS_SUCCESS,stats }
} 
export function loadStats(){
    return function (dispatch){
        return statsAPI.getStats().then(stats =>{
dispatch(loadStatsSuccess(stats))
        }).catch(error =>{
            throw error;
        }
)
    }
}