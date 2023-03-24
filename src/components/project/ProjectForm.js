import React from 'react'
import {useEffect, useState} from 'react'
import styles from './ProjectForm.module.css'
import Imput from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

export default function ProjectForm({handleSubmit, btnText, projectData}){

    const [categories,setCategories]=useState([])
    const [project, setProject]=useState(projectData || {})

    useEffect(() =>{
        fetch('http://localhost:5000/categories', {
            method: "GET",
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) =>{
            setCategories(data)
        })
        .catch((err)=> console.log(err))
    
    }, [])

    const submit = (e) => {
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }

    function handleChange(e){
        setProject({ ...project, 
            [e.target.name]: e.target.value})
        
    }

    function handleCategory(e){
        setProject({ 
            ...project, 
            category:{
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
        
    }

    return(
        <form onSubmit={submit} className={styles.form}>

            <Imput type="text" 
            text="nome do projeto" 
            name="name" 
            placeholder="insira o nome do projeto"
            handleOnchange={handleChange}
            value={project.name ? project.name : ''}
            />

            <Imput type="number" 
            text="Orçamento do projeto" 
            name="budget" 
            placeholder="insira o orçamento do projeto"
            handleOnchange={handleChange}
            value={project.budget ? project.budget : ''} 
            />
            
            <Select name="category_id" 
            text="Selecione uma categoria"
            options={categories}
            handleOnchange={handleCategory}
            value={project.category ? project.category.id : ''}
            />
           
           <SubmitButton text={btnText}/>

        </form>
    )
}