import {CHANGE_SEARCHFIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILED} from './constants';



const initialState={
    SearchInput:''
}


export const searchRobots=(state=initialState,action={})=>{
    switch(action.type){
        case CHANGE_SEARCHFIELD:
        return Object.assign({},state,{SearchInput:action.payload});
        default:
            return state;
    }
}

const initialRobotState={
    robots:[],
    error:'',
    isPending:false
}

export const requestRobots=(state=initialRobotState,action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({},state,{isPending:true});
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({},state,{robots:action.payload,isPending:false});
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({},state,{error:action.payload,isPending:false});
        default:
            return state;

    }
}