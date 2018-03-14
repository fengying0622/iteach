import React,{Component} from 'react';
import {Button, Breadcrumb, Input, Modal} from 'antd';
import {connect} from 'react-redux';
import '../../../../assets/styles/bk.css';
import {FooterComponent} from "../../../../components/footer";

class BkTeamResearch extends Component{

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

        const commons = [
            {
                user: {username: '孙和平', avatar: 'header_img01.jpg'},
                time: '15分钟前',
                common: '整篇文章并无太大问题，建议的文字表达再精炼点，阅读会更舒服也很容易了理解。'
            },
            {
                user: {username: '曹景辉', avatar: 'header_img02.jpg'},
                time: '12分钟前',
                common: '整篇文章并无太大问题，建议的文字表达再精炼点。'
            },
            {
                user: {username: '曹景辉', avatar: 'header_img03.jpg'},
                time: '10分钟前',
                common: '整篇文章并无太大问题，建议的文字表达再精炼点。整篇文章并无太大问题，建议的文字表达再精炼点。整篇文章并无太大问题，建议的文字表达再精炼点。整篇文章并无太大问题，建议的文字表达再精炼点。'
            },

        ];

        return (
            <div>
                <div className='bk_research'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>备课</Breadcrumb.Item>
                        <Breadcrumb.Item>集体备课</Breadcrumb.Item>
                        <Breadcrumb.Item>教研</Breadcrumb.Item>
                    </Breadcrumb>

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

                    <Button type='primary' className='btn'>存草稿</Button>
                    <Button type='primary' className='btn' onClick={this.doSubmit}>提交</Button>

                    <div className='common'>
                        <div className='title'>
                            <span>相关评论</span>
                        </div>
                        <div className='content'>
                            {
                                commons.map((item) => (
                                    <div className='item' key={item.time}>
                                        <img src={require('../../../../assets/images/'+item.user.avatar)}/>
                                        <div>
                                            <span>{item.user.username}</span>
                                            <span>{item.time}</span>
                                            <p>{item.common}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <Input.Search placeholder="说点什么..." enterButton="评论" className='doCommon' />

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

export default connect(mapStateToProps)(BkTeamResearch);