import styles from './SubmitButton.module.css'
import React from 'react'

export default function SubmitButton({text}){
    return(
        <div >
            <button className={styles.btn}>{text}</button>
        </div>
    )
}