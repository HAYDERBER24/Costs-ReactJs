import React from 'react'
import {useNavigate} from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'


export default function NewProject(){

    const navigate = useNavigate()

    function creatPost(project){

        //inicializar cost and servicios
        project.cost= 0 
        project.services= []

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
              console.log(data)
              navigate('/projects', {state:{message: 'Projeto criado com sucesso!'}})
        })
            .catch(err=> console.log(err))
    }


    return(
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu porjeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={creatPost} btnText="criar projeto"/>

        </div>
    )
}