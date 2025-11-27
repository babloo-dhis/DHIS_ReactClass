# ClassDayoneNote ReactJS

### Wrong 
<div class="class_name"></div>

### Correct 
<div className="class_name"></div>

### Wrong

return (
    <h1>Hello<h1>
)

### Correct
return (
    <div>
    <h1>Hello<h1>
    </div>
)

### Use of Fragment
return (
    <>
    <h1>Hello<h1>
    </>
)

### JSX Expressions use {}

<h1> Total Sum Of Numbers {23+34+43+43}<h2>

### Self-Closing tags

<img src="logo.png"/>
<br/>

### JSX Usage


function Subham() {
    let name ="Shubham Kumar"
    const a=30;
    const b =40;
    return (
        <div>
        <h1>{name}</h1>
        <h2>Sum of Numbers{a+b}<h2>

        </div>

    );
}

### Class Componenets (Old Style)

- A Class Componenet uses ES6 and Must Extend React.Componenet

import React from "react";

class Welcome extends React.Component {
    render(){
        return <h1>Hello World<h1>
    }
}
export default Welcome;


### Functional Componenet with function indide

function Message(){
    const showMessage=()=>"this is Message"
    return <p>{showMessage}<p>
}


### Class Componenet with function

class Info extends React.Component {
    showData(){
        return "This is Class Data"
    }
    render(){
        return <p>{showData}</p>
    }
}

