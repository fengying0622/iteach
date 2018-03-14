import React, {Component} from 'react';
import {
    Row,
    Col,
    Icon,
    Button,
    Breadcrumb,
    Checkbox,
    Input,
    DatePicker,
    Cascader,
} from 'antd';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import '../../../../assets/styles/bk.css';
import {FooterComponent} from "../../../../components/footer";

class BkTeamCreate extends Component {

    render() {

        const options = [
            {
                value: '语文',
                label: '语文',
                children: [
                    {
                        value: '初一',
                        label: '初一',
                        children: [
                            {
                                value: '第一章',
                                label: '第一章',
                                children: [
                                    {
                                        value: '第一节',
                                        label: '第一节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第二节',
                                        label: '第二节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第三节',
                                        label: '第三节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第四节',
                                        label: '第四节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第五节',
                                        label: '第五节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                ],
                            }
                        ],
                    }
                ],
            },
            {
                value: '数学',
                label: '数学',
                children: [
                    {
                        value: '初一',
                        label: '初一',
                        children: [
                            {
                                value: '第一章',
                                label: '第一章',
                                children: [
                                    {
                                        value: '第一节',
                                        label: '第一节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第二节',
                                        label: '第二节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第三节',
                                        label: '第三节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第四节',
                                        label: '第四节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第五节',
                                        label: '第五节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                ],
                            }
                        ],
                    }
                ],
            },
            {
                value: '英语',
                label: '英语',
                children: [
                    {
                        value: '初一',
                        label: '初一',
                        children: [
                            {
                                value: '第一章',
                                label: '第一章',
                                children: [
                                    {
                                        value: '第一节',
                                        label: '第一节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第二节',
                                        label: '第二节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第三节',
                                        label: '第三节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第四节',
                                        label: '第四节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                    {
                                        value: '第五节',
                                        label: '第五节',
                                        children: [
                                            {value: '沁·园春雪', label: '沁·园春雪1'},
                                            {value: '沁·园春雪', label: '沁·园春雪2'},
                                            {value: '沁·园春雪', label: '沁·园春雪3'},
                                            {value: '沁·园春雪', label: '沁·园春雪4'},
                                        ]
                                    },
                                ],
                            }
                        ],
                    }
                ],
            },

        ];

        return (
            <div>
                <div className='team_bk_creat'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>备课</Breadcrumb.Item>
                        <Breadcrumb.Item>集体备课</Breadcrumb.Item>
                        <Breadcrumb.Item>发布</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className='type'>
                        <Button type='primary'>教学</Button>
                        <Button>学案</Button>
                        <Button>课件</Button>
                        <Button>其他</Button>
                    </div>

                    <div className='titleInput'>
                        <Cascader
                            options={options}
                            expandTrigger='hover'
                            allowClear={false}
                            // onChange={onChange}
                            placeholder="请选择课程"
                            showSearch
                        />
                    </div>
                    <div className="addTeacher">
                        <div>
                            <span><h4>选择主备老师:</h4></span>
                            <h3><Icon type="plus-circle-o" /></h3>
                        </div>
                        <Row type="flex" align='middle'>
                            <Col><h4>选择协同老师:</h4></Col>
                            <Col>
                                <Checkbox >教研组</Checkbox>
                            </Col>
                        </Row>
                        <div> <h3><Icon type="plus-circle-o" /></h3></div>
                        <div>
                            <span><h4>选择协同专家:</h4></span>
                            <h3><Icon type="plus-circle-o" /></h3>
                        </div>
                    </div>
                    <div className="timePicker">
                        <Row type="flex" align='middle'>
                            <Col>
                                <h4>截止时间:</h4>
                            </Col>
                            <Col>
                                <DatePicker
                                    showTime
                                    format="YYYY-MM-DD HH:mm:ss"
                                    placeholder="默认选择当日时间"
                                />
                            </Col>
                        </Row>
                    </div>
                    <div className="attach">
                        <h4>添加附件  <Icon type="link" /></h4>
                        <div>
                            <h4>备注:</h4>
                            <Input.TextArea rows={4} placeholder="请输入文字"/>
                        </div>
                    </div>

                    <div className="newPlan">
                        <Icon type="plus-circle-o" />&nbsp;&nbsp;添加新的任务
                    </div>
                    <div>
                        <Link to='/bk/team/distribute'><Button type='primary'>发布</Button></Link>
                    </div>
                </div>

                <FooterComponent/>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        size: state.size
    }
};


export default connect(mapStateToProps)(BkTeamCreate);