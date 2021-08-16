import React from 'react'
import Button from '../../UI/Button'
import EqualsButton from '../../UI/EqualsButton'
import classes from './InputBox.module.css'

function InputBox() {

    let bottomArray = [0,1,2,3].map(item => {
        return(
            <li>
                <Button 
                key = {item} 
                buttonType = "number" 
                className = {classes.number} 
                value = {item}>{item}</Button>
            </li>
        )
    })

    let middleArray = [4,5,6].map(item => {
        return(
            <li>
                <Button 
                key = {item} 
                buttonType = "number"
                className = {classes.number} 
                value = {item}>{item}</Button>
            </li>
        )
    })

    let topArray = [7,8,9].map(item => {
        return(
            <li>
                <Button 
                key = {item} 
                buttonType = "number" 
                className = {classes.number} 
                value = {item}>{item}</Button>
            </li>
        )
    })

    return(
        <div className = {classes['input-box']}>
            <ul className = {classes.operators}>
                <Button buttonType = "action" value = "+">+</Button>
                <Button buttonType = "action" value = "x">x</Button>
                <Button buttonType = "action" value = "/">/</Button>
                <Button buttonType = "action" value = "-">-</Button>
            </ul>
            <ul className = {classes['top-row']}>
                {topArray}
            </ul>

            <ul className = {classes['middle-row']}>
                {middleArray}
            </ul>

            <ul className = {classes['bottom-row']}>
                {bottomArray}
            </ul>
            
            <EqualsButton />
            <Button buttonType = "clear"  value = "+">C</Button>
        </div>
    )
}

export default InputBox