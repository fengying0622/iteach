import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Row, Col, Button} from 'antd';
import { connect } from 'react-redux';

import '../../assets/styles/client.css';

class Client extends Component{
    constructor(props){
        super(props);
        this.state = {
            activeSlideBar: 'home'
        };
    }

    render(){

        const data = {
            slideBar: [
                {key: 'home', value: '首页',path:'/home'},
                {key: 'task', value: '任务管理',path:'/task'},
                {key: 'lessonFirst', value: '集体备课',path:'/task'},
                {key: 'lessonSecond', value: '二次备课',path:'/task'},
                {key: 'teach', value: '课堂教学',path:'/task'},
                {key: 'homework', value: '作业管理',path:'/task'},
                {key: 'reflect', value: '反思评价',path:'/task'},
                {key: 'mySpace', value: '我的空间',path:'/task'},
                {key: 'resource', value: '资源中心',path:'/task'},
                {key: 'student', value: '我的学生',path:'/task'},
            ],
        };

        return(
            <div className='Client'>
                <div className='top'>
                    <Row type='flex' justify='space-between' align='middle' className='header'>
                        <Col>
                            <img src={require('../../assets/images/logo.png')} style={{height: 20, marginRight: 10, marginLeft: 10}} />
                        </Col>
                        <Col>
                            <Icon type='question-circle-o'/>
                            <Icon type='minus' onClick={this.clientMinimize}/>
                            <Icon type='close' onClick={this.clientClose}/>
                        </Col>

                    </Row>
                    <Row className='userInfo'>
                        <Col>
                            <img src={require('../../assets/images/header_img01.jpg')} className='headerImg' />
                        </Col>
                        <Col className='info'>
                            <div>
                                <h3>李丽</h3>
                                <span>高中教师-语文</span>
                                <span>LV 3</span>
                            </div>
                            <div className='des'>
                                化作春泥更护花~
                            </div>
                            <div className='other'>
                                <Icon type='bell'/>
                                <Icon type='profile'/>
                                <Icon type='weibo'/>
                                <Icon type='right'/>
                            </div>
                        </Col>
                        <Col className='money'>
                            <Icon type='pay-circle-o' />
                            <span>2756</span>
                        </Col>
                    </Row>
                </div>

                <div className='container'  style={{height: this.props.size.winHeight-200}}>
                    <div className='slideBar' style={{height: this.props.size.winHeight-200}}>
                        {
                            data.slideBar.map((item)=>(
                                this.state.activeSlideBar===item.key
                                    ?
                                (
                                    <div className='group active' key={item.key}>
                                        <h3 onMouseOver={()=>this.setState({activeSlideBar: item.key})}>{item.value}</h3>
                                    </div>
                                )
                                    :
                                (
                                    <div className='group'  key={item.key} >
                                        <h3 onMouseOver={()=>this.setState({activeSlideBar: item.key})}>{item.value}</h3>
                                    </div>
                                )
                            ))
                        }
                    </div>
                    <div className='content' style={{width: this.props.size.winWidth-60}}>
                        {
                            data.slideBar.map((item)=>(
                            <Link to={item.path}></Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return {
        size: state.size
    }
};

export default connect(
    mapStateToProps,
)(Client);