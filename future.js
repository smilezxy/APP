//所有的API请求都在这
import {Component} from 'react'
import {
    Alert
} from 'react-native'
import { Actions } from 'react-native-router-flux';

import Request from './common.js'

window.appFutureImpl = {
}


var baseURL = "https://demo.proudsmart.com/api/rest/post";
var LOGIN_API = "/userLoginUIService/login";

appFutureImpl.goLogin = (name,password) =>{
    Request.request(baseURL + LOGIN_API,"POST",[name,password],
        (responseData)=>{
           Actions.drawer()
        },
        (error)=>{
            console.log(error)
        })



}


export {appFutureImpl}





// export {showAlert}