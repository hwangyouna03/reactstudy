import React from 'react'
import ReactDOM from 'react-dom'

//리액트 요소 생성
const img = React.createElement(
    'img',
    {
        src: 'https://picsum.photos/id/237/200/300',
        title: 'img title'
    }
)
//리액트 요소 객체 내용 확인
console.log(img)

const rootElement = document.getElementById("root")
//리액트 요소 그리기
//ReactDOM.render(img, rootElement)


const paragraph = React.createElement(
    'p',
    null,
    'Hello, React'
)


// 리액트 요소 그리기
ReactDOM.render(paragraph, rootElement) //VDOM으로 비교 -> 실제DOM에 반영



