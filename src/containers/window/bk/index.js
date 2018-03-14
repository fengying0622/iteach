import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../../assets/styles/lesson.css';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        console.log(this.props);
        window.addEventListener('resize', () => {
            this.setState({
                winWidth: window.innerWidth
            });
        })
    }


    render() {

        const size = this.props.size;

        return (
            <div>
                任务管理

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        size: state.size,
    }
};
export default connect(mapStateToProps)(Task);

