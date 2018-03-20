/**
 * Created by Administrator on 2018/3/19.
 */
import React from "react"
import { Button,Icon,Row,Col,Modal} from 'antd';

class Distribute extends React.Component{
    state = {
        loading: false,
        visible: false,
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }

    render(){
        const { visible, loading } = this.state;
        return (
            <div>
            <Row className='distribute'>
                <Row type="flex" justify='space-around' align="middle">
                <Button type="primary"  size="large">发布任务</Button>
                </Row>
                <Row className='yesterday'>
                    <Row><span>昨天</span></Row>
                    <hr />
                    <Row type="flex" justify='start' align="middle" onClick={this.showModal} >
                        <Col className='name'>沁园春·长沙 2017-2018版教案</Col>
                    </Row>
                    <Row type="flex" justify='start' align="middle">
                        <Col><Icon type="clock-circle-o" />2017.01.10</Col>
                        <Col span={1}></Col>
                        <Col><Icon type="link" />《沁园春·长沙》2017教案</Col>
                    </Row>
                </Row>
                <br/>
                <Row>
                    <span>历史记录</span>
                    <hr/>
                </Row>
            </Row>
                <Row>
                    <Modal
                        visible={visible}
                        title="发布任务"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>Return</Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                Submit
                            </Button>,
                        ]}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </Row>
            </div>

        )
    }
}
export default Distribute;