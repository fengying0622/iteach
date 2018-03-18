import React from 'react'
import {withRouter} from "react-router-dom"
//根路由
//withRouter作用：页面跟路由绑定，没有这个，会发生路由变了但页面不跳转bug
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            initDone : false,
        }
    }
    componentDidMount() {
        this.setState({
            initDone : true
        })
    }

    render() {
        return (
            <div>
                {this.state.initDone? this.props.children : <div>正在加载...</div>}
            </div>
        )
    }

}

export default withRouter (App)


