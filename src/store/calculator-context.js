import React from 'react'

let CalculatorContext = React.createContext({
    firstNumber: 0,
    secondNumber: 0,
    operator: null,
    enterNumber: (digit) => {},
    enterOperator: (sign) => {}
})

export default CalculatorContext