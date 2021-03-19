// 다음 모듈 불러오기 구문은 매 예제마다 삽입
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

class ComponentWithProps extends Component {
    constructor(props) {
        super(props)

        console.log(props)

        this.props.obj.name="selly"
    }

    render() {
        return (
            <>
                <p>{this.props.value.toString()}</p>
                <p>{this.props.value.toString()}</p>
            </>
        )
    }
}



//전달된 <b style="color:red">props 값은 수정이 불가능 (읽기 전용 값)</b>
//자바스크립트에서는 함수는 값처럼 취급
//props로 함수도 전달가능

class ComponentWithMultipleProps extends Component {
    constructor(props) {
        super(props)

        console.log(props)
    }

    render() {
        // 객체 비구조 할당 사용 idiom
        const { value1, value2, whatever } = this.props

        /*
        return (
            <>
                <p>{this.props.value1}</p>
                <p>{this.props.value2}</p>
                <p>{this.props.whatever}</p>
            </>
        )
        */
        return (
            <>
                <p>{value1} {value2} {whatever}</p>
            </>
        )
    }
}

ReactDOM.render(<ComponentWithMultipleProps value1="Hello" value2="World" whatever={1234} />, document.getElementById("root"))


