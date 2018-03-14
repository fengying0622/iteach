import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import {Row, Col, Icon} from 'antd';
import {connect} from 'react-redux';

class BkRethink extends Component{


    render(){
        return (
            <div className='bk_all'>

                <div className='add'>
                    <Link to='/bk/rethink/create'><Icon type='file-add'/>新建教学反思</Link>
                </div>
                <div className='empty'>
                    您暂无文件
                </div>

                <div className='history'>
                    <div className='header'>
                        <Row type='flex' justify='space-between'>
                            <Col>历史记录</Col>
                            <Col><Icon type='down' /></Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        size: state.size,
    }
};

export default connect(mapStateToProps)(BkRethink);