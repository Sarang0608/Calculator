import React, { useContext } from 'react'
import classes from './Button.module.css'
import CalculatorContext from '../store/calculator-context'

function Button(props) {
    let btnType = `button-${props.buttonType}`

    let calcCtx = useContext(CalculatorContext)

    function addDigit() {
        calcCtx.enterNumber(props.value)
        console.log(calcCtx)
    }

    function addOperator() {
        calcCtx.enterOperator(props.value)
        console.log(calcCtx)
    }

    function clearNumbers() {
        calcCtx.clearState()
    }
    
    return (
        <button className = {classes[btnType]} onClick = {btnType === 'button-number' ? addDigit : 
        (btnType === 'button-action'? addOperator : clearNumbers)}>{props.children}</button>
    )
}

export default Button