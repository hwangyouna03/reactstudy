import React, { Component, createContext } from 'react'
import ReactDOM from 'react-dom'

// 문자열을 저장하는 Context 생성 (기본값은 'global')
const MyContext = createContext('default');

class ChildComponent extends Component {
    /* Consumer는 데이터를 소비*/
    render() {
        return (
            <MyContext.Consumer>
                {valueFromContext => {
                    return (
                        <div>
                            <p>id : {this.props.id}</p>
                            <p>value : {valueFromContext}</p>
                        </div>
                    )
                }}
            </MyContext.Consumer>
        );
    }
}

const Nested = (props) => <>{props.children}</>

class App extends Component {
    render() {
        let globalValue = 'global'

        return (
            <div>
                <MyContext.Provider value={globalValue}>
                    {/* props 값을 전달하지 않아도 내부에서 Provider를 통해 전달한 값에 접근 가능 */}
                    <ChildComponent id='child 1' />
                    <Nested>
                        <Nested>
                            <Nested>
                                {/* 비록 많은 중첩 컴포넌트의 내부에 포함되어 있다고 하더라도, (props를 통해 값을 전달받지 않아도) Context 값에 접근 가능 */}
                                <ChildComponent id='child 2' />
                            </Nested>
                        </Nested>
                    </Nested>
                </MyContext.Provider>
                {/*
                    Provider 컴포넌트로 감싸지 않은 ChildComponent는 디폴트값('default')을 전달받게 됨
                */}
                <ChildComponent id='child 3' />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"))