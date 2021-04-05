import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// Q) stop, resume 버튼 추가하기
class Timer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            time: this.props.time,
            timeout: false,
            intervalId: null
        }
    }

    componentDidMount() {
        // 타이머 설정 (원래 이렇게 하면 안되지만 일단 실행은 됨)
        this.state.intervalId = setInterval(() => {
            this.setState((state) => {
                if( state.time === 1 ) {
                    clearTimeout(this.state.intervalId)
                    return { timeout: true, time: state.time - 1}
                } else {
                    return { time: state.time - 1 }
                }
            })
        }, 1000)
    }
    
    //타이머 멈추기

    componentWillUnmount() {
        // 타이머 해제
        clearTimeout(this.state.intervalId)
    }

    render() {
        return (
            <div>
                {this.state.timeout ? <h2>timeout</h2> : <h2>{this.state.time}</h2>}
                <button onClick={() => this.setState({ mount : true })}>stop</button>
                <button onClick={() => this.setState({ mount : true })}>resume</button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Timer time={10} />
        <Timer time={30} />
        <Timer time={60} />
    </div>,
    document.getElementById("root"))