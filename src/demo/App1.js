import React from 'react';
import { userInfo } from 'os';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//1 demo
// function formatName(user){
//     return user.firstName + ' ' +user.lastName;
// }

// const user={
//     firstName:'Mary',
//     lastName:'Wang'
// };
// const element=(
//     <h1>
//         Hello React,{formatName(user)}....
//     </h1>
// )

//2 demo  可以通过使用引号，来将属性值指定为字符串字面量：
// const element=<div tabIndex='11'></div>;


//3 demo  也可以使用大括号，来在属性值中插入一个 JavaScript 表达式：
//    在属性中嵌入 JavaScript 表达式时，不要在大括号外面加上引号。
//    你应该仅使用引号（对于字符串值）或大括号（对于表达式）中的一个，对于同一属性不能同时使用这两种符号。
// const element=<img src={userInfo.avatarUrl} /></img>

//4 demo  JSX 标签里能够包含很多子元素:
// const element=(
// <div>
//     <h1>Todolist</h1>
//     <p>Nice to meet you.</p>
// </div>
// );

// 4.1 class 定义组件
// class Welcome extends React.Component{
//     render(){
//         return <h1>Hello,{this.props.name}</h1>
//     }
// }

// function App(){
//     return Welcome
// }

// export default App;

// 4.2 渲染组件  组件名称必须以大写字母开头
// function Welcome(props){
//     return <h1>Hello,{props.name}</h1>
// }
// const element=<Welcome name='Mary' />
// function App(){
//     return element
// }
// export default App;


// 4.3 组合组件
// function Avatar(props){
//     return(
//         <img className="Avatar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//           />
//     )
// }
// function UserInfo(props){
//     return (
//        <div className="UserInfo">
//          <Avatar user={props.user} />
//          <div className="UserInfo-name">
//            {props.user.name}
//         </div>
//        </div>
//     );
// }
// function Comment(props) {
//     return (
//       <div className="Comment">
//         <userInfo user={props.author}/>
//         <div className="Comment-text">
//           {props.text}
//         </div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//     );
//   }

// 5.1 State & 生命周期
function Clock(props) {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
  
  function tick() {
    ReactDOM.render(
      <Clock date={new Date()} />,
      document.getElementById('root')
    );
  }
  
  setInterval(tick, 1000);
  function ReactDOM(){
      return ReactDOM
  }
  export default ReactDOM

  