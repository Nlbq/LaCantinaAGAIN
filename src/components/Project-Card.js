import React from 'react'
import { useHistory } from 'react-router-dom';
// import Project from '../models/project';
import './Project-Card.css';

function ProjectCard({project, id}) {

    const history = useHistory();

    const goToProject = (id) => {
        history.push(`/Discographie/${id}`);
    }



    return (

        
                <div className="card-container"  onClick={() => goToProject(project.id)}>
                    <div className="image-container">
                        <img src={project.picture} alt={project.name} />
                    </div>
                    
                    <div className="card-content">
                    
                        <div className="card-title">
                            <h3>{project.name}</h3>
                        </div>
                    
                        <div className="card-date">
                        <p>{project.created}</p>
                        </div>

                    </div>
                   
                    <div className="card-btn">
                        <button>
                            <a href=""> Découvrir </a>
                        </button>
                    </div>
                </div>
            
    )
}

export default ProjectCard;
