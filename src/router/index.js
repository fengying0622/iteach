import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winSizeChange} from '../redux/actions/size'
import UserLogin from '../containers/user/login';
import Home from '../containers/home';
import Task from '../containers/window/task';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()


class AppRouter extends Component{
    componentDidMount(){
        //页面初次加载所需
        this.props.sizeActions;
        window.addEventListener('resize', ()=>{
            this.props.sizeActions
        })
    }

    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path='/' component={UserLogin}/>
                    <Route path='/home' component={Home}/>
                    <Route path='/task' component={Task}/>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        store: state.store,
        size: state.size
    }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        sizeActions: bindActionCreators(winSizeChange, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AppRouter);