import React, { useContext } from 'react'
import classes from './EqualsButton.module.css'
import CalculatorContext from '../store/calculator-context'

function EqualsButton() {

    let calcCtx = useContext(CalculatorContext)

    return(
        <button className = {classes.button} onClick = {calcCtx.calculateResult}>
            =
        </button>
    )
}

export default EqualsButton