import React from 'react';
import Login from '../containers/user/login';
import Task from '../containers/window/task';
import Home from '../containers/window/home';
import { Route,Link,Switch} from 'react-router-dom';
import { Layout, Menu, Breadcrumb} from 'antd';

const { Header, Content, Sider } = Layout;



class SubRouter extends React.Component{
    render() {
        const routes = [
            {value: '首页',path:'/home',main:Home},
            {value: '任务管理',path:'/task',main:Task},
            {value: '集体备课',path:'/firstLesson',main:Task},
            {value: '二次备课',path:'/secondLesson',main:Task},
            {value: '课堂教学',path:'/teach',main:Task},
            {value: '作业管理',path:'/homework',main:Task},
            {value: '反思评价',path:'/review',main:Task},
            {value: '我的空间',path:'/workspace',main:Task},
            {value: '资源中心',path:'/resource',main:Task},
            {value: '我的学生',path:'/student',main:Task},
        ]
        return (
            <Switch>
                <Route exact path='/' component={Login}/>
                <div className="App">
                    <Layout>
                        <Header className="header">
                            <div className="logo"/>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{lineHeight: '64px'}}
                            >
                                <Menu.Item key="1">nav 1</Menu.Item>
                                <Menu.Item key="2">nav 2</Menu.Item>
                                <Menu.Item key="3">nav 3</Menu.Item>
                            </Menu>
                        </Header>
                        <Layout>
                            <Sider width={200} style={{background: '#fff'}}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{height: '100%', borderRight: 0}}
                                >
                                    {routes.map((route,index)=>(
                                        <Menu.Item key={index}>
                                            <Link to={route.path}>{route.value}</Link>
                                        </Menu.Item>
                                    ))}
                                </Menu>
                            </Sider>
                            <Layout style={{padding: '0 24px 24px'}}>
                                <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
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
                </div>
            </Switch>
            )
        }
    }

export default SubRouter;