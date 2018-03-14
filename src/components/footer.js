import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import { Row, Icon, Col } from 'antd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import * as sizeActions from '../redux/actions/size';

import '../assets/styles/component.css';

export class FooterComponent extends Component {

    render() {
        return (
            <div className='FooterComponent'>
                <img className='logo' src={require('../assets/images/logo.png')} alt='数能教育' />

                <div className='link'>
                    <Link to='#'>关于我们</Link>
                    <Link to='#'>发展历程</Link>
                    <Link to='#'>意见反馈</Link>
                    <Link to='#'>免责声明</Link>
                    <Link to='#'>友情链接</Link>
                    <Link to='#'>联系我们</Link>
                </div>
                <Row type='flex' justify='space-between'>
                    <span>Copyright @ 2014-2018 www.zhinengpingtai.com</span>
                    <span>苏ICP备10223445</span>
                </Row>
            </div>
        )
    }
}
