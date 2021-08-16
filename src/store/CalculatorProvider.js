import React, { useReducer } from 'react'
import CalculatorContext from './calculator-context'

function CalculatorReducer(state, action) {
    if(action.type === 'FIRST_NUMBER') {
        let newNumberArray = state.firstNumberArray.concat(action.digit)
        let newNumber = ""
        for(let item in newNumberArray) {
            newNumber += newNumberArray[item]
        }
        newNumber = parseInt(newNumber)
        return({
            ...state,
            firstNumberArray: newNumberArray,
            firstNumber: newNumber
        })
    }
    if(action.type === 'SECOND_NUMBER') {
        let newNumberArray = state.secondNumberArray.concat(action.digit)
        let newNumber = ""
        for(let item in newNumberArray) {
            newNumber += newNumberArray[item]
        }
        newNumber = parseInt(newNumber)
        return({
            ...state,
            secondNumberArray: newNumberArray,
            secondNumber: newNumber
        })
    }
    if(action.type === 'OPERATOR') {
        if(action.sign === 'x') {action.sign = '*'}
        return({
            ...state,
            operator: action.sign
        })
    }
    if(action.type === 'CALCULATE' && state.operator) {
        let newResult = eval(state.firstNumber + state.operator + state.secondNumber)
        let newResultStr = newResult.toString()
        let newFirstArray = []
        for(let digit in newResultStr) {
            newFirstArray.push(parseInt(newResultStr[digit]))
        }
        return({
            ...state,
            firstNumberArray: newFirstArray,
            firstNumber: newResult,
            secondNumberArray: [],
            secondNumber: 0,
            operator: null,
            result: newResult
        })
    }
    if(action.type === 'CLEAR') {
        return ({
            ...defaultCalculatorState
        })
    }
}

const defaultCalculatorState = {
    firstNumberArray: [],
    secondNumberArray: [],
    firstNumber: 0,
    secondNumber: 0,
    operator: null,
    result: 0
}

function CalculatorProvider(props) {

    let [calculatorState, dispatchCalculatorAction] = useReducer(CalculatorReducer, defaultCalculatorState)

    const calculatorContext = {
        firstNumberArray: calculatorState.firstNumberArray,
        secondNumberArray: calculatorState.secondNumberArray,
        firstNumber: calculatorState.firstNumber,
        secondNumber: calculatorState.secondNumber,
        operator: calculatorState.operator,
        result: calculatorState.result,
        enterNumber: enterNumberToCalculator,
        enterOperator: enterOperatorToCalculator,
        calculateResult: calculateNumbers,
        clearState: clearNumbers
    }

    function enterNumberToCalculator(digit) {
        if(!calculatorState.operator) {
            dispatchCalculatorAction({
                type: "FIRST_NUMBER",
                digit: digit
            })
        }
        else {
            dispatchCalculatorAction({
                type: "SECOND_NUMBER",
                digit: digit
            })
        }
    }

    function enterOperatorToCalculator(sign) {
        dispatchCalculatorAction({
            type: "OPERATOR",
            sign: sign
        })
    }

    function calculateNumbers() {
        dispatchCalculatorAction({
            type: "CALCULATE"
        })
    }

    function clearNumbers() {
        dispatchCalculatorAction({
            type: "CLEAR"
        })
    }

    return(
        <CalculatorContext.Provider value = {calculatorContext}>
            {props.children}
        </CalculatorContext.Provider>
    )
}

export default CalculatorProvider
