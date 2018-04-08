import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    Image
} from 'react-native';
import Launch from './components/Launch';
import {
  Scene,
  Router,
  Actions,
  Reducer,
  ActionConst,
  Tabs,
  Modal,
  Drawer,
  Stack,
  Lightbox,
} from 'react-native-router-flux';
//侧边栏页面
import DrawerContent from './components/drawer/DrawerContent';

//每个tab展示的页面（这里面试都一样）
import TabView from './components/TabView';
import Home from './components/tabs/home'
import Custom from './components/tabs/custom'
import  Order from './components/tabs/order'
import Warning from './components/tabs/warning'
import Device from './components/tabs/device'

//icon
// import Icon from 'react-native-vector-icons/FontAwesome';


//控制tab栏选中与不选中的图标颜色
import TabIcon from './components/TabIcon';


//点击这个icon展示侧边栏
import MenuIcon from './images/menu_burger.png';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#FFF',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: 'yellow',
  },
    iconstyle:{
        width: 25,
        height:25,
    }
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};

// const getSceneStyle = () => ({
//     backgroundColor: '#F5FCFF',
//   shadowOpacity: 1,
//   shadowRadius: 3,
// });

// on Android, the URI prefix typically contains a host in addition to scheme
const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

const Example = () => (
  <Router
    createReducer={reducerCreate}
    //getSceneStyle={getSceneStyle}  控制整个页面的样式
    uriPrefix={prefix}>

    <View>
      {/*想要实现模态，您必须将其<Modal>作为您Router的根场景。*/}
      {/*在Modal将正常呈现第一个场景（应该是你真正的根场景），*/}
      {/*它将渲染第一个元素作为正常场景，其他所有元素作为弹出窗口（当它们 被push）*/}
      <Modal key="modal"
        hideNavBar
      >
        {/*Lightbox是用于将组件渲染在当前组件上Scene的组件 。与Modal不同，它将允许调整大小和背景的透明度。*/}
        <Lightbox key="lightbox">
          <Stack
            hideNavBar
            key="root"
            titleStyle={{ alignSelf: 'center' }}
          >
            <Scene key="launch" component={Launch} title="Launch" initial />
            {/*侧边栏加tab标签*/}
            <Drawer
              hideNavBar
              key="drawer"
              contentComponent={DrawerContent}
              drawerImage={MenuIcon}
              drawerWidth={300}
            >
              {/*<Scene hideNavBar  key="tabbar" name="tabbar" tabs={true}  initial={true} tabBarPosition = "bottom">*/}
                {/*下面的选项卡*/}
                <Tabs
                  key="tabbar"
                  swipeEnabled   //是否可以滑动选项卡
                  showLabel={false}     //是否显示标签栏文字
                  tabBarStyle={styles.tabBarStyle}   //标签栏的样式
                  tabBarPosition = "bottom"      //标签栏位置
                >

                    <Scene key="home" component={Home} title="首页" name="home" icon={TabIcon}
                    />
                      <Scene key="custom" component={Custom} title="客户" name="user-o" icon={TabIcon}
                      />
                        <Scene key="device" component={Device} title="设备" name="television" icon={TabIcon}
                        />
                      <Scene key="warning" component={Warning} title="告警" name="warning" icon={TabIcon}
                      />
                    <Scene key="order" component={Order} title="工单"  name="sticky-note-o" icon={TabIcon}
                    />


                </Tabs>

              {/*</Scene>*/}
            </Drawer>
          </Stack>
        </Lightbox>
      </Modal>
      {/*<Scene component={MessageBar} />*/}
    </View>
  </Router>
);

export default Example;
