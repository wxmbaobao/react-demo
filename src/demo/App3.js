import React, {Component} from 'react';
import Clock from './Clock';

export default class App3 extends Component{
    // 构造函数
    constructor(props){
        // props 和 state的区别
        super(props);
        this.state = {date1: new Date()};  //定义 state
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({date1: new Date()})

        },1000)
    }

    render(){
        const {date1} = this.state;
        return(
            <Clock date={date1}></Clock>
        )

    }

}

