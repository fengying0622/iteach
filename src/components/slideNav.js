import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Icon, Row, Col, Button} from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import * as sizeAction from '../redux/actions/size';
import '../assets/styles/component.css';

class SlideNavComponent extends Component{


    changeSize = ()=>{
        console.log(this.props.size.state==='small');
        if(this.props.size.state==='small'){
            this.props.sizeAction.changeBig();
        }else{
            this.props.sizeAction.changeSmall();
        }
    };


    render(){

        return (
            <div className='slideNav' style={{width: this.props.size.sideWidth}}>
                <Row className='userInfo'>
                    <Col>

                    </Col>
                </Row>
                <Row type='flex' justify='space-between' align='middle' className='item active'>
                    <div>
                        <Icon type='home' />
                        <span>首页</span>
                    </div>
                    <div>
                        <Link to='/'>
                            <Button size='small'>点击进入</Button>
                        </Link>
                    </div>
                </Row>
                <Row type='flex' justify='space-between' align='middle' className='item'>
                    <div>
                        <Icon type='form' />
                        <span>备课</span>
                    </div>
                    <div>
                        <Link to='/lesson/team'>
                            <Button size='small'>点击进入</Button>
                        </Link>
                    </div>
                </Row>
                <Row type='flex' justify='space-between' align='middle' className='item'>
                    <div>
                        <Icon type='table' />
                        <span>组卷</span>
                    </div>
                    <div>
                        <Button size='small'>点击进入</Button>
                    </div>
                </Row>
                <Row type='flex' justify='space-between' align='middle' className='item'>
                    <div>
                        <Icon type='team' />
                        <span>学生</span>
                    </div>
                    <div>
                        <Button size='small'>点击进入</Button>
                    </div>
                </Row>
                <Row type='flex' justify='space-between' align='middle' className='item'>
                    <div>
                        <Icon type='exception' />
                        <span>资源</span>
                    </div>
                    <div>
                        <Button size='small'>点击进入</Button>
                    </div>
                </Row>
                <Row type='flex' justify='space-between' align='middle' className='item'>
                    <div>
                        <Icon type='copy' />
                        <span>研训</span>
                    </div>
                    <div>
                        <Button size='small'>点击进入</Button>
                    </div>
                </Row>
                <Row type='flex' justify='space-between' align='middle' className='item'>
                    <div>
                        <Icon type='bar-chart' />
                        <span>数据</span>
                    </div>
                    <div>
                        <Button size='small'>点击进入</Button>
                    </div>
                </Row>

                {
                    this.props.size.sideState==='big'
                        ?
                        (
                            <Row type='flex' justify='space-between' align='middle' className='menuItem'>
                                <Col span={8}>
                                    <Icon type='appstore-o' />
                                    <span>菜单</span>
                                </Col>
                                <Col span={8} className='centerBorder'>
                                    <Icon type='customer-service' />
                                    <span>客服</span>
                                </Col>
                                <Col span={8}>
                                    <Icon type='folder-add' />
                                    <span>添加</span>
                                </Col>
                            </Row>
                        )
                        :
                        (
                            <Row type='flex' justify='start' align='middle' className='menuItem'>
                                <Col span={5}>
                                    <Icon type='appstore-o' />
                                </Col>
                            </Row>
                        )
                }


            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        size: state.size,
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        sizeAction: bindActionCreators(sizeAction, dispatch)
    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SlideNavComponent);