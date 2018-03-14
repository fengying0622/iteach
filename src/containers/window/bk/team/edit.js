import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Icon, Button, Breadcrumb, Select, Input, Modal} from 'antd';
import {connect} from 'react-redux';
import '../../../../assets/styles/bk.css';
import {FooterComponent} from "../../../../components/footer";

class BkTeamEdit extends Component{

    constructor(props){
        super(props);
        this.state = {
            data: true
        };
    }

    doSubmit = ()=>{
        let { history } = this.props;
        Modal.confirm({
            title: '请确认是否提交当前备课内容！',
            content: '一旦提交，你就GG了。',
            onOk() {
                history.push('/bk/team');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    render(){

        return (
            <div>
                <div className='bk_edit'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>备课</Breadcrumb.Item>
                        <Breadcrumb.Item>集体备课</Breadcrumb.Item>
                        <Breadcrumb.Item>编辑</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className='selectBox'>
                        <Row>
                            <Col span={6}>
                                <Select defaultValue="数学">
                                    <Select.Option value="语文">语文</Select.Option>
                                    <Select.Option value="数学">数学</Select.Option>
                                    <Select.Option value="英语">英语</Select.Option>
                                </Select>
                            </Col>
                            <Col span={6}>
                                <Select defaultValue="初二">
                                    <Select.Option value="初一">初一</Select.Option>
                                    <Select.Option value="初二">初二</Select.Option>
                                    <Select.Option value="初三">初三</Select.Option>
                                </Select>
                            </Col>
                            <Col span={6}>
                                <Select defaultValue="第三章">
                                    <Select.Option value="第一章">第一章</Select.Option>
                                    <Select.Option value="第二章">第二章</Select.Option>
                                    <Select.Option value="第三章">第三章</Select.Option>
                                    <Select.Option value="第四章">第四章</Select.Option>
                                    <Select.Option value="第五章">第五章</Select.Option>
                                    <Select.Option value="第六章">第六章</Select.Option>
                                </Select>
                            </Col>
                            <Col span={6}>
                                <Select defaultValue="初二">
                                    <Select.Option value="初一">初一</Select.Option>
                                    <Select.Option value="初二">初二</Select.Option>
                                    <Select.Option value="初三">初三</Select.Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select defaultValue="沁·园春雪" className='long'>
                                    <Select.Option value="初一">沁·园春雪</Select.Option>
                                    <Select.Option value="初二">诗两首</Select.Option>
                                    <Select.Option value="初三">大堰河————我的保姆</Select.Option>
                                </Select>
                            </Col>
                        </Row>
                    </div>

                    <div className='titleInout'>
                        <span>主题 :</span>
                        <Input  />
                    </div>

                    <Button type='primary'>导入资料</Button>

                    <div className='editContent'>
                        <h4>一、 学习目标</h4>
                        <Input.TextArea rows={6}/>
                        <h4>二、 重点与难点</h4>
                        <Input.TextArea rows={6}/>
                        <h4>三、 课前学习</h4>
                        <Input.TextArea rows={6}/>
                        <h4>四、 课中学习</h4>
                        <Input.TextArea rows={6}/>
                    </div>

                    <Button type='primary'>保存</Button>
                    <Button type='primary' onClick={this.doSubmit}>提交</Button>

                </div>

                <FooterComponent/>
            </div>

        )
    }
}

const mapStateToProps = (state)=>{
    return {
        size: state.size
    }
}

export default connect(mapStateToProps)(BkTeamEdit);