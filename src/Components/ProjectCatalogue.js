import React from "react";
import Project from "./Project";
import './projectCatalogue.css'

export default function ProjectCatalogue(){
    return(
        <div className='container'>
        <div className='title'>
            <h1 className='page-title'>Dev Portfolio</h1>
            <br/>
        </div>
            <Project />
        </div>
    )
}