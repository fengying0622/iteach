import React,{Component} from 'react';
import {Row, Col, Icon, Input, Button} from 'antd';
import {connect} from "react-redux";

import '../../../../assets/styles/bk.css';

class BkData extends Component{

    render(){

        const { size } = this.props;

        return (
            <div className='bk_data' style={{height: size.winHeight-100}}>

                <Row>
                    <Col sm={24} md={7} className='catalog'>
                        <div className='content'>
                            <Row className='header' type='flex' justify='space-between' align='middle'>
                                <h3>教材同步</h3>
                                <Icon type='right'/>
                            </Row>
                            <div className='copyright'>
                                <span>高中语文必修一人教版</span>
                            </div>
                            <dl>
                                <dt>第一单元</dt>
                                <dd>第1课 沁园春·长沙</dd>
                                <dd>第2课 诗两首</dd>
                                <dd>第3课 大堰河——我的保姆</dd>
                                <dt>第二单元</dt>
                                <dd>第4课 烛之武退秦师</dd>
                                <dd>第5课 靳柯刺秦王</dd>
                                <dd>第6课 大鸿门宴</dd>
                                <dt>第三单元</dt>
                                <dd>第7课 记念刘和珍君</dd>
                                <dd>第8课 小狗包弟</dd>
                                <dd>第9课 集两梁任公先生的一次演讲</dd>
                                <dt>第四单元</dt>
                                <dd>第10课 新闻短两篇</dd>
                                <dd>第11课 包身工</dd>
                                <dd>第12课 飞向太空的航程</dd>
                            </dl>
                        </div>
                    </Col>
                    <Col md={17} sm={24} className='listContainer'>
                        <div className='header'>
                            <div>
                                资源类别：
                                <span className='active'>全部</span>
                                <span>教学</span>
                                <span>学案</span>
                                <span>课件</span>
                                <span>试题试卷</span>
                                <span>备课综合</span>
                            </div>
                            <div>
                                资源来源：
                                <span className='active'>全部</span>
                                <span>平台</span>
                                <span>本校</span>
                                <span>集体</span>
                                <span>我的</span>
                            </div>
                        </div>
                        <div className='list'>
                            <Row className='listFilter' type='flex' justify='space-between' align='middle'>
                                <Col className='left'>
                                    <div>年份<Icon type='down'/></div>
                                    <div>最新<Icon type='down'/></div>
                                    <div>审核<Icon type='down'/></div>
                                </Col>
                                <Col className='search'>
                                    <Input.Search onSearch={(value)=>alert(value)} />
                                </Col>
                            </Row>
                            <div className='listContent'>
                                <Row className='item' type='flex' justify='space-between' align='middle'>
                                    <div>
                                        <img src={require('../../../../assets/images/word.jpg')} alt='啥啥啥'/>
                                        <div className='info'>
                                            <h3>《沁园春·长沙》新版</h3>
                                            <div>
                                                <span>版本: 苏教版</span>
                                                <span>更新时间: 2017-08-12</span>
                                            </div>
                                            <div>
                                                <span>类型: Word</span>
                                                <span>大小: 2.5MB</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Button type='primary' size='small'>删除</Button>
                                        <Button type='primary' size='small'>编辑</Button>
                                        <Button type='primary' size='small'>下载</Button>
                                        <Button type='primary' size='small'>发送</Button>
                                    </div>
                                </Row>
                                <Row className='item' type='flex' justify='space-between' align='middle'>
                                    <div>
                                        <img src={require('../../../../assets/images/word.jpg')} alt='啥啥啥'/>
                                        <div className='info'>
                                            <h3>《沁园春·长沙》新版</h3>
                                            <div>
                                                <span>版本: 苏教版</span>
                                                <span>更新时间: 2017-08-12</span>
                                            </div>
                                            <div>
                                                <span>类型: Word</span>
                                                <span>大小: 2.5MB</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <Button type='primary' size='small'>删除</Button>
                                        <Button type='primary' size='small'>编辑</Button>
                                        <Button type='primary' size='small'>下载</Button>
                                        <Button type='primary' size='small'>发送</Button>
                                    </div>
                                </Row>
                            </div>
                        </div>

                    </Col>
                </Row>


            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        size: state.size
    }
};

export default connect(mapStateToProps)(BkData);