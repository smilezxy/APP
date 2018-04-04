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


//控制tab栏选中与不选中的字体颜色
//import TabIcon from './components/TabIcon';


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

const getSceneStyle = () => ({
    backgroundColor: '#F5FCFF',
  shadowOpacity: 1,
  shadowRadius: 3,
});

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
            {/*<Scene key="echo" back clone component={EchoView} getTitle={({ navigation }) => navigation.state.key} />*/}
            <Scene key="launch" component={Launch} title="Launch" initial />
            {/*侧边栏*/}
            <Drawer
              hideNavBar
              key="drawer"
              contentComponent={DrawerContent}
              drawerImage={MenuIcon}
              drawerWidth={300}
            >
              {/*
                Wrapper Scene needed to fix a bug where the tabs would
                reload as a modal ontop of itself
              */}
              {/*<Scene hideNavBar panHandlers={null}>*/}
              <Scene hideNavBar>
                {/*下面的选项卡*/}
                <Tabs
                  key="tabbar"
                  swipeEnabled   //是否可以滑动选项卡
                  showLabel={false}     //是否显示标签栏文字
                  tabBarStyle={styles.tabBarStyle}   //标签栏的样式
                  tabBarPosition = "bottom"      //标签栏位置
                    //activeBackgroundColor="#3BB7FF"   //选中焦点的背景色
                  //inactiveBackgroundColor="rgba(255, 0, 0, 0.5)"  //非焦点的选项卡背景色
                >

                  {/*第一个选项卡*/}
                  <Stack key="tab_1" initial>
                    <Scene key="tab_1_1" component={TabView} title="首页"
                           icon={() => <View>
                        <Image style={styles.iconstyle} source={require('./images/home.png')} />
                        <Text>首页</Text>
                    </View>} />
                  </Stack>


                    {/*第二个选项卡*/}
                  <Stack key="tab_2">
                      <Scene key="tab_2_1" component={TabView} title="客户"
                             icon={() => <View>
                                 <Image style={styles.iconstyle} source={require('./images/me.png')} />
                                 <Text>客户</Text>
                             </View>} />
                  </Stack>

                    {/*第三个选项卡*/}
                    <Stack key="tab_3">
                        <Scene key="tab_3_1" component={TabView} title="设备"
                               icon={() => <View>
                                   <Image style={styles.iconstyle} source={require('./images/important_devices.png')} />
                                   <Text>设备</Text>
                               </View>}/>
                    </Stack>


                    {/*第四个选项卡*/}
                    <Stack key="tab_4">
                      <Scene key="tab_4_1" component={TabView} title="告警"
                             icon={() => <View>
                                 <Image style={styles.iconstyle} source={require('./images/warning.png')} />
                                 <Text>告警</Text>
                             </View>}/>
                    </Stack>


                  {/*第五个选项卡*/}
                  <Stack key="tab_5">
                    <Scene key="tab_5_1" component={TabView} title="工单"  icon={() => <View>
                        <Image style={styles.iconstyle} source={require('./images/order_form.png')} />
                        <Text>工单</Text>
                    </View>} />
                  </Stack>


                </Tabs>

              </Scene>
            </Drawer>
          </Stack>
        </Lightbox>
      </Modal>
      {/*<Scene component={MessageBar} />*/}
    </View>
  </Router>
);

export default Example;
