import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Row,
    Col,
    Icon,
    Button,
    Breadcrumb,
    Select,
    Input,
    Modal,
    Cascader,
    Upload
} from 'antd';
import {connect} from 'react-redux';
import Awesome from 'react-ckeditor5';

import {FooterComponent} from "../../../../components/footer";
import '../../../../assets/styles/bk.css';

class BkSelfCreate extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: 'hello',
        }
    }

    onChange = (text)=>{
        console.log(text);
    }

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

                <div className='bk_edit'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>备课</Breadcrumb.Item>
                        <Breadcrumb.Item>个人备课</Breadcrumb.Item>
                        <Breadcrumb.Item>编辑</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className='type'>
                        <Button type='primary'>教学</Button>
                        <Button type='primary'>学案</Button>
                        <Button type='primary'>课件</Button>
                    </div>

                    <div className='titleInout'>
                        <Cascader
                            options={options}
                            expandTrigger='hover'
                            allowClear={false}
                            // onChange={onChange}
                            placeholder="请选择课程"
                            showSearch
                        />
                        <Input placeholder='请填写主题'/>
                    </div>

                    <Upload name='bk_data'>
                        <Button type='primary'><Icon type="upload" />导入资料</Button>
                    </Upload>

                    <div className='editContent'>
                        <h4>一、 学习目标</h4>
                        <Awesome value={this.state.value} onChange={this.onChange} />
                        <h4>二、 重点与难点</h4>
                        <Awesome value={this.state.value} onChange={this.onChange} />
                        <h4>三、 课前学习</h4>
                        <Input.TextArea rows={6}/>
                        <h4>四、 课中学习</h4>
                        <Input.TextArea rows={6}/>
                    </div>

                    <Button type='primary'>存草稿</Button>
                    <Button type='primary'>另存为</Button>
                    <Button type='primary' onClick={this.doSubmit}>提交</Button>

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


export default connect(mapStateToProps)(BkSelfCreate);