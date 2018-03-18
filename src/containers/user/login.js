import React,{ Component } from 'react';
import { Form, Row, Icon, Input, Button, Checkbox } from 'antd';
import {bindActionCreators} from "redux"
import '../../assets/styles/user.css';
import {login} from "../../redux/actions/user"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
class UserLogin extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){

    }

    doLogin = (e)=> {
        e.preventDefault();
        this.props.form.validateFields((err, value)=>{
            if(!err){
                value.grant_type = 'password';
                value.client_id = 2;
                value.client_secret = '7t3ltedj81iYTOlr2auIbqzjf9YechVdvHEf0xMm';
                value.scope = '';
                delete value['remember'];
                console.log(value);
                this.props.login(value);
                this.props.history.push('/home')
                //  userLogin(value).then(res=>{
                //     console.log(res);
                //     if(res.access_token) {
                //         if (typeof electronRequire === 'undefined') {
                //             alert('连接electron失败！');
                //         } else {
                //             this.props.login(value);
                //             const BrowserWindow = electronRequire('electron').remote.BrowserWindow;
                //             const remote = electronRequire('electron').remote;
                //             console.log(remote);
                //             remote.getCurrentWindow().close();
                //             let url = 'http://localhost:3000';
                //             let win = new BrowserWindow({
                //                 width: 350,
                //                 height: 750,
                //                 frame: false,
                //             });
                //
                //             win.loadURL(url);
                //             win.show();
                //         }
                //     }
                //
                // });
            }
        })
    };

    render(){
        console.log(this.state)
        const { getFieldDecorator } = this.props.form;
        return (
            <Row className='login' type='flex' justify='start' align='middle' >
                <Row className="left">
                    <span>智能备课</span>
                </Row>
                <Row className="right">
                    <h1>账号登录</h1><span className="tab_icon"><img src={require('../../assets/images/code.png')} alt="login"></img></span>
                    <Form onSubmit={this.doLogin}>
                        <Form.Item>
                            {
                                getFieldDecorator('username', {
                                    rules: [{required: true, message: '请输入用户名或手机号'}],
                                    // initialValue:'sadmin@me.com'
                                })(
                                    <Input prefix={<Icon type='user' />} placeholder='请输入手机号' style={{fontSize: 18}} />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password', {
                                    rules: [{required: true, message: '请输入密码！'}],
                                    // initialValue:'sadmin123'
                                })(
                                    <Input type='password' prefix={<Icon type='lock' style={{fontSize: 18}} />} placeholder='请输入密码' />
                                )
                            }
                        </Form.Item>
                        <Form.Item className='tool'>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <a className="login-form-forgot" href="javascript:" style={{float: 'right'}}>忘记密码</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Row>
        )
    }

}

const mapStateToProps =(state)=>{
    return {
        user:state.user
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        login : bindActionCreators(login,dispatch)
    }
}

export default withRouter (connect(
    mapStateToProps,
    mapDispatchToProps
)(Form.create()(UserLogin)));