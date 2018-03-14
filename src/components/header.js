import React,{ Component } from 'react';
import { Row, Icon, Col } from 'antd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as sizeActions from '../redux/actions/size';

import '../assets/styles/component.css';

class HeaderComponent extends Component {

    clientMinimize = ()=>{
        if(typeof electronRequire === 'undefined'){
            alert('连接electron失败！');
        }else{
            /*eslint-disable*/
            const remote = electronRequire('electron').remote;
            remote.getCurrentWindow().minimize();
        }
    };

    clientClose = ()=>{
        if(typeof electronRequire === 'undefined'){
            alert('连接electron失败！');
        }else{
            /*eslint-disable*/
            const remote = electronRequire('electron').remote;
            remote.getCurrentWindow().close();
        }
    };

    render() {
        return (
            <Row type='flex' align='middle' justify='space-between' className='HeaderComponent'>
                <Col span={6}>
                    <img className='logo' src={require('../assets/images/logo.png')} alt='数能教育' />
                </Col>

                <Col span={6} className='toolbar'>
                    <Icon type='minus' onClick={this.clientMinimize}/>
                    <Icon type='scan'/>
                    <Icon type='close' onClick={this.clientClose}/>
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        size: state.size
    }
};
const mapDispatchToProps = (dispatch)=>{
    return{
        sizeActions: bindActionCreators(sizeActions, dispatch)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderComponent);