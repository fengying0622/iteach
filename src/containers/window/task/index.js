import React from 'react'
import Public from '../public/title'
import { Tabs } from 'antd'
import Distribute from './distribute'
import Arrange from './arrange'
import '../../../assets/styles/task.css'
import {connect} from 'react-redux';
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
                    <TabPane tab="任务发布" key="1"><Distribute id={this.props.user.user.userID}/></TabPane>
                    <TabPane tab="任务管理" key="2"><Arrange/></TabPane>
                </Tabs>
            </div>
        )
    }

}
const mapStateToProps =(state)=>{
    return {
        user:state.user
    }
}


export default connect(mapStateToProps)(Task);