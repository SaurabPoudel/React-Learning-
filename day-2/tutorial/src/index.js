import React from "react";
import ReactDOM  from "react-dom";
//statekess functional component
// always return JSK

function Greeting(){
  return (<div>
    <h1>Hello world</h1>
  </div>
  );
}
// const Greeting=()=>{
//   return React.createElement('h1',{},'Hello World');
// }




ReactDOM.render(<Greeting/>,document.getElementById('root'));

