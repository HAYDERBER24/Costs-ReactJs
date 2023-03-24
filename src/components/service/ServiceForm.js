import React from 'react'
import { useState } from 'react'
import Imput from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from '../project/ProjectForm.module.css'


export default function ServiceForm({handleSubmit, btnText,projectData}){

    const [service,setService]= useState({})

    function submit(e){
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }
    function handleChange(e){
        setService({ ...service,[e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
        <Imput
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnchange={handleChange}
        />
        <Imput
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total"
        handleOnchange={handleChange}
        />
        <Imput
        type="text"
        text="Descripçao do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnchange={handleChange}
        />
        <SubmitButton text={btnText}/>
            
        </form>
    )
}