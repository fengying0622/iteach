import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Icon, Button, Breadcrumb} from 'antd';
import {connect} from 'react-redux';
import '../../../../assets/styles/bk.css';

class BkTeam extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: true
        };
    }

    render(){
        const empty = (
            <div className='empty'>
                您暂无文件
            </div>
        );

        const list = (
            <div className='list'>
                <Row className='time' type='flex' align='middle'>
                    <h3>今天</h3><span>12月13号</span>
                </Row>
                <Row className='item' type='flex' justify='space-between' align='middle'>
                    <Col><h2>《沁园春·长沙》集体教学-2017新版</h2></Col>
                    <Col><Icon type='link'/>附件（ 2个 ）</Col>
                    <Col><Link to='/bk/team/edit'>开始备课</Link></Col>
                </Row>
                <Row className='item' type='flex' justify='space-between' align='middle'>
                    <Col><h2>《沁园春·长沙》集</h2></Col>
                    <Col><Icon type='link'/>附件（ 2个 ）</Col>
                    <Col><Link to='/bk/team/research'>开始教研</Link></Col>
                </Row>
            </div>
        );

        return (
            <div className='bk_all'>
                <Button size='small' type='danger' onClick={()=>this.setState({data: !this.state.data})} style={{float: 'right', zIndex: 200}}>添加/清除数据</Button>

                <Breadcrumb separator=">">
                    <Breadcrumb.Item>备课</Breadcrumb.Item>
                    <Breadcrumb.Item>集体备课</Breadcrumb.Item>
                </Breadcrumb>
                {
                    this.state.data ? list : empty
                }
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

const mapStateToProps = (state)=>{
    return {
        size: state.size
    }
}

export default connect(mapStateToProps)(BkTeam);