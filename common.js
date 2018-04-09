import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class FetchRequest extends Component {

    static request(url,method,body,callBackSuccess,callBackError){
        method = method.toUpperCase();
        if (method === 'GET') {
            body = undefined;
        } else {
            body = body && JSON.stringify(body);
        }
        fetch(url,{
            method:method,
            body:body
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson)
                if(responseJson.code == 0) {
                    callBackSuccess(JSON.stringify(responseJson));
                }else if(responseJson.code == 10020) {
                    console.log("登录超时")
                }else if(responseJson.code > 9999) {
                    console.log(responseJson.message)
                }else {
                    console.log("服务器错误编码")
                }


            }).catch((error) => {
            callBackError(error);
        });
    }
}
