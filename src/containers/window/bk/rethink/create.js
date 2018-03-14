import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Row, Col, Icon, Button, Breadcrumb, Select, Input, Modal} from 'antd';
import {connect} from 'react-redux';

import '../../../../assets/styles/bk.css';
import {FooterComponent} from "../../../../components/footer";
class BkRethinkCreate extends Component{


    render(){
        return (
            <div>
                <div className='bk_edit'>
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>备课</Breadcrumb.Item>
                        <Breadcrumb.Item>教学反思</Breadcrumb.Item>
                        <Breadcrumb.Item>编辑</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className='titleInout'>
                        <span>主题 :</span>
                        <Input  />
                    </div>

                    <Button type='primary'>关联教案</Button>

                    <div className='editContent'>
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

const mapStateToProps = (state)=>{
    return {
        size: state.size
    }
};


export default connect(mapStateToProps)(BkRethinkCreate);