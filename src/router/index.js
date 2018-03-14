import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {winSizeChange} from '../redux/actions/size'
import UserLogin from '../containers/user/login';
import Home from '../containers/home';
import Task from '../containers/window/task';
import LessonTeam from '../containers/window/lesson/team';
import LessonTeamEdit from '../containers/window/lesson/team/edit';
import LessonTeamResearch from '../containers/window/lesson/team/research';
import LessonSelf from '../containers/window/lesson/self';
import Distribute from '../containers/window/lesson/team/distribute';
import LessonSelfCreate from '../containers/window/lesson/self/create';
import LessonTeamCreate from '../containers/window/lesson/team/create';
import LessonRethink from '../containers/window/lesson/rethink';
import LessonRethinkCreate from '../containers/window/lesson/rethink/create';
import LessonData from '../containers/window/lesson/data';
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
                    <Route exact path='/lesson/team' component={LessonTeam}/>
                    <Route path='/lesson/team/distribute' component={Distribute}/>
                    <Route path='/lesson/team/edit' component={LessonTeamEdit}/>
                    <Route path='/lesson/team/research' component={LessonTeamResearch}/>
                    <Route path='/lesson/team/create' component={LessonTeamCreate}/>
                    <Route exact path='/lesson/self' component={LessonSelf}/>
                    <Route path='/lesson/self/create' component={LessonSelfCreate}/>
                    <Route exact path='/lesson/rethink' component={LessonRethink}/>
                    <Route exact path='/lesson/rethink/create' component={LessonRethinkCreate}/>
                    <Route exact path='/lesson/data' component={LessonData}/>
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