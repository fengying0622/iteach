/**
 * Created by Administrator on 2018/3/12.
 */
import React from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Router,Link,Route } from 'react-router-dom';
import Task from '../window/task';
const { Header, Content, Sider } = Layout;



class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            key: 'home'
        };
    }
    render() {
        const data = [
                {key: 'home', value: '首页',path:'/home', exact:true,main:Home},
                {key: 'task', value: '任务管理',path:'/task',main:Task},
                {key: 'lessonFirst', value: '集体备课',path:'/task',main:Task},
                {key: 'lessonSecond', value: '二次备课',path:'/task'},
                {key: 'teach', value: '课堂教学',path:'/task'},
                {key: 'homework', value: '作业管理',path:'/task'},
                {key: 'reflect', value: '反思评价',path:'/task'},
                {key: 'mySpace', value: '我的空间',path:'/task'},
                {key: 'resource', value: '资源中心',path:'/task'},
                {key: 'student', value: '我的学生',path:'/task'},
            ]

        const renderContent = ()=>{

            const key = this.state.key;
            data.map((item)=>{
                if(key===item.key){
                    return <Task />;
                }
            })
        }
        return (
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
                                {data.map((item)=>(
                                    <Menu.Item key={item.key}>
                                        <Link to={item.path}><div onClick={()=>this.setState({key: item.key})}>{item.value}</div></Link>
                                    </Menu.Item>
                                ))}
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>{this.props.params}</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content style={{background: '#fff', padding: 24, margin: 0, minHeight: 280}}>
                                {data.map((item)=>{
                                    if(this.state.key===item.key){
                                       return <item.main key={item.key}/>;
                                    }
                                })}
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}
export default Home;

