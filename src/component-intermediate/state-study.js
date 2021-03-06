import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class StateDemoComponent extends Component {
    constructor(props) {
        super(props)

        // 반드시 "생성자 함수 내부"에서 상태 초기화 진행
        // props와는 다르게 state는 변경 가능함을 유의 (단, setState 메소드를 이용하여 변경)
        this.state = {
            value1: "hello",
            value2: 1000,
            inner: {
                value3: null
            }
        }
    }

    handleValue2 = () => {
        //state = 이전 함수 ex) 나이 변경 => 이전 값에 1을 더해줘야함 
        // 이전 상태를 참조하여 상태값을 변경해야 하므로, setState 메소드에 함수 전달하여 상태 변경
        this.setState(state => {
            return { value2: state.value2 - 1 }
            //이전함수를 가져오는 콜백함수 사용
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState((state) => {
                        return { value1: state.value1 === "hello" ? "bye" : "hello" }
                    })
                }}>{this.state.value1}</button>
                <br />
                <button onClick={this.handleValue2}>{this.state.value2}</button>
            </div>
        )
    }
}

ReactDOM.render(<StateDemoComponent />, document.getElementById("root"))