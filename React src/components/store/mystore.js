//import {createStore} from 'redux'; //this is deprecated
import { configureStore } from '@reduxjs/toolkit'
//let x = require("@reduxjs/toolkit")

const counterReducer = (state={userrole:[],ngorole:[],foodform:null,},action)=>{

    console.log("here..")
    if(action.type==="request")
    {     
        return {foodform : action.data};
    }
    if(action.type==="userrole")
    {
        let temp = [...state.userrole]
        temp.push(action.data)
        return {...state,userrole:temp}
    }
    if(action.type === "ngorole")
    {
        let temp = [...state.ngorole]
        temp.push(action.data)
        return {...state,ngorole:temp}
    }
    return {foodform:null,userrole:[],ngorole:[]}
} 

//const store = x.configureStore({
    const store = configureStore({
    reducer:counterReducer,
  })

export default store;

/*
console.log(store.getState())
console.log(store.dispatch({type:"increment"}))
console.log(store.getState())
store.dispatch({type:"increment"})
store.dispatch({type:"increment"})
store.dispatch({type:"decrement"})
console.log(store.getState())
*/

