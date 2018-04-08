
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var styles=StyleSheet.create({
    tabbarItem:{
        alignItems:"center",
        justifyContent:"center",
        textAlign:"center",
        marginLeft:-3
    }
})
export default  class TabIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let activeStyle = this.props.focused ? {color: "#3399FF"} : {};
        return <View>
            <Icon size={22}
                  color={activeStyle.color} name={this.props.name}>
            </Icon>
            <Text style={[activeStyle,styles.tabbarItem]}>{this.props.title}</Text>
        </View>

    }
}
