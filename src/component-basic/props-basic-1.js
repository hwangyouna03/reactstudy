// 다음 모듈 불러오기 구문은 매 예제마다 삽입
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

class ComponentWithProps extends Component {
    // 컴포넌트 상속 받으면 이 것은 무조건 써줘야 함
    constructor(props) {
        super(props)

        console.log(props)

        // this.props.value = "modify" => 값 변경 불가능
        // this.props.obj.name = "Sally" => 권한이 없음(실행이 되기는 하지만 이렇게 작성을 해서는 안되고 props 값은 읽기만 해야 함)
    }

    render() {
        return (
            <>
                <p>{this.props.obj.value}</p>
                <p>{this.props.value.toString()}</p>
            </>
        )
    }
}

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

// ComponentWithProps => 컴포넌트를 그리고 있음
// 생성자로 연결되는 props로 "Hello" 들어감
// value={"Hello"} asdf={"World"} 객체상태로 연결
// obj={{name:"John"}} => 객체 전달
// ReactDOM.render(<ComponentWithProps value={"Hello"} asdf={"World"} obj={{name:"John"}}/>, document.getElementById("root"))

//ReactDOM.render(<ComponentWithMultipleProps value1="Hello" value2="World" whatever={1234} />, document.getElementById("root"))


class PersonProfile extends Component {
    render() {
        const { name, age, gender, profile } = this.props
        // props 값은 수정 불가
        // Cannot assign to read only property 'name' of object '#<Object>'
        // this.props.name = 'Jane'

        return (
            <div
                className='person'
                style={this.props.highlight ? {color: 'red'} : null}>
                <h1>Profile</h1>
                <img src={profile} />
                <p>name : {name}</p>
                <p>age : {age}</p>
                <p>gender : {gender}</p>
            </div>
        )
    }
}

// 기본 값이 필요없으면 사용하지 않아도 되지만 대부분 사용함
PersonProfile.defaultProps = {
    name: "Unknown",
    gender: "Unknown",
    age: 0,
    profile: 'https://via.placeholder.com/150'
}

ReactDOM.render(
    <div>
        <PersonProfile
            name='John'
            age={35}
            gender='male'
            profile='https://randomuser.me/api/portraits/men/75.jpg' />


    </div>,
    document.getElementById("root"))


const anotherPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}
const { name, gender, ...rest } = anotherPerson
console.log(rest)

ReactDOM.render(
    <div>
        <PersonProfile
            name='John'
            age={35}
            gender='male'
            profile='https://randomuser.me/api/portraits/men/75.jpg' />
        <PersonProfile {...anotherPerson} />
        <PersonProfile name='Ken' gender='male' age={32} {...rest} />
        <PersonProfile/>
    </div>,
    document.getElementById("root"))