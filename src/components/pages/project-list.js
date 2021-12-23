import React, { useEffect, useState } from 'react'
import Project from '../../models/project';
import PROJECTS from '../../models/bdd-project';
import ProjectCard from '../Project-Card';
import './project-list.css';


const  ProjectList = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(PROJECTS);
    }, []);

    return (
        <>
                
            <div className="container">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
            
            </div>
        </>
    )
}

export default ProjectList;
