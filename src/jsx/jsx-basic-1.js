import React from 'react'
import ReactDOM from 'react-dom' //모듈 불러오기

const name = 'Josh Perez'
// 변수 내용 삽입 가능
const element = <h1>Hello, {name}</h1>

ReactDOM.render(element, document.getElementById("root"))

const lst = [100, 200, 300]
const person = {
    name: 'John',
    age: 20
}
function double(value) {
    return value * 2
}

//괄호 안에 JS 수식 넣을 수 있음
//괄호 안에 //혹은 /**/ 주석을 넣을 수 없음 -> 그대로 문자로 나옴
const JSXwithExpressions = (
    <h1>
        {lst[0]}
        &nbsp;{person.name}
        &nbsp;{person.age}
        &nbsp;{2 + 2}
        &nbsp;{person.name.toUpperCase()}
        &nbsp;{person.name.length}
        &nbsp;{double(person.age)}
    </h1>)
