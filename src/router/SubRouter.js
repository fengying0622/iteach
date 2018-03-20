import React from 'react';
import Login from '../containers/user/login';
import Task from '../containers/window/task';
import Home from '../containers/window/home';
import '../assets/styles/home.css'
import { Route,Link,Switch} from 'react-router-dom';
import { Layout, Menu,Icon} from 'antd';

const { Content, Sider } = Layout;



class SubRouter extends React.Component{
    render() {
        const routes = [
            {type:'solution',value: '我的任务',path:'/task',main:Task},
            {type:'edit',value: '个人备课',path:'/selfLesson',main:Task},
            {type:'file-text',value: '集体备课',path:'/groupLesson',main:Task},
            {type:'file-add',value: '教后反思',path:'/review',main:Task},
            {type:'appstore-o',value: '我的空间',path:'/selfSpace',main:Task},
            {type:'cloud-o',value: '公共空间',path:'/publicSpace',main:Task},
            {type:'idcard',value: '课堂教学',path:'/teach',main:Task},
            {type:'line-chart',value: '数据服务',path:'/data',main:Task},
            {type:'share-alt',value: '备课检查',path:'/audit',main:Task},
        ]
        return (
            <Switch>
                <Route exact path='/' component={Login}/>
                    <Layout className="home">
                        <Layout>
                            <Sider width={68} className="left">
                                <Menu
                                    mode="vertical"
                                    style={{height: '3%', borderRight: 1,background:'#0099FF'}}
                                >
                                    <Menu.Item />
                                </Menu>
                                <Menu
                                    mode="inline"
                                    style={{height: '75%', borderRight: 1,background:'#0099FF'}}
                                >
                                    <Menu.Item disabled><Icon type="smile" /></Menu.Item>
                                    <Menu.Item disabled><Icon type="contacts" /></Menu.Item>
                                    <Menu.Item disabled><Icon type="home" /></Menu.Item>
                                </Menu>
                                <Menu
                                    mode="inline"
                                    style={{height: '22%', borderRight: 1,background:'#0099FF'}}
                                >
                                    <Menu.Item disabled><Icon type="sound" /></Menu.Item>
                                    <Menu.Item disabled><Icon type="calendar" /></Menu.Item>
                                    <Menu.Item disabled><Icon type="bars" /></Menu.Item>
                                </Menu>
                            </Sider>
                            <Sider width={150} style={{background: '#E4E4E4'}}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['0']}
                                    style={{height: '100%', borderRight: 0,background:'#E4E4E4'}}
                                >
                                    {routes.map((route,index)=>(
                                        <Menu.Item key={index}>
                                            <Link to={route.path}>
                                                <Icon type={route.type} />
                                            {route.value}</Link>
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            </Sider>
                            <Layout style={{padding: '0'}}>
                                <Content style={{background: '#fff', padding: 0, margin: 0, minHeight: 600}}>
                                    {routes.map((route,index)=>(
                                        <Route
                                            key={index}
                                            path={route.path}
                                            component={route.main}
                                        />
                                        )
                                    )}
                                </Content>
                            </Layout>
                        </Layout>
                    </Layout>
            </Switch>
            )
        }
    }

export default SubRouter;