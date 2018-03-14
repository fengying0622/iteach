import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Icon} from 'antd';
import {connect} from 'react-redux';

import '../../../../assets/styles/bk.css';
class Distribute extends Component{


    render(){
        return (
            <div className='bk_all' style={{width: this.props.size.contentWidth}}>
                <div className='add'>
                    <Link to='/bk/team/create'><Icon type='plus-circle-o'/>新建发布任务</Link>
                </div>
                <div className="history">
                    <h3>本周记录</h3>
                    <Row type="flex" justify='space-between' align="middle">
                        <Col>沁园春·长沙 2017-2018版教案</Col>
                        <Col>2017.01.10</Col>
                        <Col>已发布</Col>
                    </Row>
                </div>

                <div className='history'>
                    <div className='header'>
                        <Row type='flex' justify='space-between'>
                            <Col><h3>历史记录</h3></Col>
                            <Col><Icon type='down' /></Col>
                        </Row>
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


export default connect(mapStateToProps)(Distribute);