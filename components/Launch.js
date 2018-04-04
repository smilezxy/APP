import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Button,
    TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';




//初始化类
export default class Launch extends Component {
    constructor(props) {
        super(props)
        this.state = {}

    }
    render() {
        return <View style={styles.container}>

            <View style={styles.header}>
            </View>

            <View>
                <Image style = {styles.avatarimage} source = {require('../images/logo.png')}>
                </Image>
            </View>

            <View style={styles.inputview}>
                <TextInput style = {styles.textinput} placeholder='账号' underlinecolorandroid='transparent'/>
                {/*<View style={styles.dividerview}><Text style={styles.divider}></Text></View>*/}
                <TextInput style = {styles.textinput} placeholder='密码' secureTextEntry ={true} underlinecolorandroid='transparent'/>
            </View>

            <View style={styles.boxview}>
                <TouchableHighlight underlayColor="#fff" onPress={Actions.drawer}>
                    <View style={styles.buttonview}>
                        <Text style={styles.logintext}>登录</Text>
                    </View>
                </TouchableHighlight>

            </View>
        </View>

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1, //可拉伸
        backgroundColor: 'white',
    },

    header: { //头部高度
        height: 60,
        justifyContent: 'center', //水平方向
    },
    avatarimage: { //登录图标
        width: 120,
        height: 120,
        alignSelf: 'center',
        backgroundColor: '#3BB7FF',
    },
    inputview: { //用户名/密码区域
        height: 100,
        marginTop:50
    },
    textinput: { //用户名/密码输入框
        flex: 1,
        fontSize: 16,
        width:'70%',
        alignSelf: 'center',
    },
    boxview: {
        flex: 1,
        marginTop:'20%',
    },
    buttonview: {
        flexDirection: 'row',
        backgroundColor: '#1DBAF1',
        //margin: 10,
        width:'70%',
        borderRadius: 6,
        justifyContent: 'center',
        alignSelf: 'center',
        //alignItems: 'center',
    },
    logintext: {
        alignSelf:'center',
        fontSize: 17,
        color: '#FFF',
        marginTop: 10,
        marginBottom: 10,
    },
});
