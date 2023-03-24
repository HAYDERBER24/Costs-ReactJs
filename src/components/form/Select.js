import styles from './Select.module.css'
import React from 'react'

export default function Select({text, name, options, handleOnchange, value}){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>

            <select 
            name={name} 
            id={name} 
            onChange={handleOnchange} 
            value={value || ''}>

            <option>Slecione uma opçao</option>
            {options.map((option)=> (
                <option 
                value={option.id} 
                key={option.id}>
                    {option.name}</option>
            ))}

            </select>
        </div>
    )
}