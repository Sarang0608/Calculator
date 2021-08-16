import React, { useContext } from 'react'
import classes from './ResultsTab.module.css'
import CalculatorContext from '../../store/calculator-context'

function ResultsTab() {

    let calcCtx = useContext(CalculatorContext)

    return(
        <div className = {classes['result-display']}>
            <div className = {classes.calculations}>
                {calcCtx.firstNumber + 
                calcCtx.operator + 
                calcCtx.secondNumber}
            </div>
            <div className = {classes.result}>
                {calcCtx.result}
            </div>
        </div>
    )
}

export default ResultsTab