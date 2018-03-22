/**
 * Created by Feng Ying on 2018/3/22.
 */
import React from 'react';
import {Row,Col,Icon,Button} from 'antd'

class Arrange extends React.Component{
    render(){
        return(
            <Row className='distribute'>
                <Row className='yesterday'>
                    <Row><span>昨天</span></Row>
                    <hr />
                    <Row type="flex" justify='start' align="middle" onClick={this.showModal} className='name'>
                        <Col>沁园春·长沙 2017-2018版教案</Col>
                    </Row>
                    <Row type="flex" justify='space-between' align="middle">
                        <Row type="flex" justify='start' align="middle">
                        <Col><Icon type="clock-circle-o" />2017.01.10</Col>&nbsp;&nbsp;&nbsp;
                        <Col><Icon type="link" />《沁园春·长沙》2017教案</Col>
                        </Row>
                        <Row type="flex" justify='end' align="middle">
                        <Col><Button type="primary">发起备课</Button></Col>
                        <Col><Button>集体备课</Button></Col>
                        </Row>
                    </Row>
                </Row>
                <br/>
                <Row>
                    <span>历史记录</span>
                    <hr/>
                </Row>
            </Row>
        )
    }
}
export default Arrange
