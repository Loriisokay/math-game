import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ParticlesComponent from './components/Particles';
import ParticlesConfetti from './components/WinnerConfetti';


function App() {

    const [state, setState] = React.useState({
        num1: Math.ceil(Math.random() * 10),
        num2: Math.ceil(Math.random() * 10),
        operator: '+',
        response: '',
        score: 0,
        class: '',
    })


    function updateResponse(event) {
        setState({
            ...state,
            response: event.target.value

        })
    }

    function checkResponse(event) {
        if (event.key === 'Enter') {
            const operators = ['+', '-', '*'];
            let operation;
            if (state.operator === '+') {
                operation = state.num1 + state.num2;
            } else if (state.operator === '-') {
                operation = state.num1 - state.num2;
            } else if (state.operator === '*') {
                operation = state.num1 * state.num2;
            }

            if (operation === Number(state.response)) {
                setState({
                    ...state,
                    score: state.score + 1,
                    response: "",
                    num1: Math.ceil(Math.random() * 10),
                    num2: Math.ceil(Math.random() * 10),
                    operator: operators[Math.floor(Math.random() * operators.length)],
                    class: 'right'
                })
            } else {
                setState({
                    ...state,
                    score: state.score - 1,
                    class: 'wrong'
                });
            }

        }

    }

    if (state.score === 10) {
        return (
            <div>
                <ParticlesConfetti />
                <h1 id="winner">You won! Congratulations!</h1>
            </div>
        )
    }

    return (
        <div>
            <ParticlesComponent />
            <h1>Solve a math problem!</h1>
            <p>If you get 10 points, you will win!</p>
            <h2 className={state.class}> {state.num1} {state.operator} {state.num2}</h2>
            <input onKeyDown={checkResponse} onChange={updateResponse} value={state.response} autoFocus={true} />
            <p className={state.class}>{state.score}</p>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
