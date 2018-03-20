import React from 'react'
import Public from '../public/index'
import { Tabs } from 'antd'
import Distribute from './distribute'
import '../../../assets/styles/task.css'
const TabPane = Tabs.TabPane;


class Task extends React.Component {

    render() {
        function callback(key) {
            console.log(key);
        }

        return (
            <div>
                <Public title="我的任务"/>
                <Tabs defaultActiveKey="1" onChange={callback}>
                    <TabPane tab="任务发布" key="1"><Distribute/></TabPane>
                    <TabPane tab="任务管理" key="2">任务管理</TabPane>
                </Tabs>
            </div>
        )
    }

}


export default Task;