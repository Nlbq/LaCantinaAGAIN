import React, { useState, useEffect ,useContext } from 'react';
import { Link } from 'react-router-dom';
import Project from '../models/project';
import PROJECTS from '../models/bdd-project';
import './project-detail.css';
import Navbar2 from './Navbar2';
// import { ThemeContext } from '../Context/ThemeContext';

  
function ProjectDetail({match}) {
    
  const [project, setProject] = useState(null);
//   const {theme} = useContext(ThemeContext);
  
  useEffect(() => {
    PROJECTS.forEach(project => {
      if (match.params.id === project.id.toString()) {
        setProject(project);
      }
    })
  }, [match.params.id]);
    
  return (
    <>
    <Navbar2 />
    <div className="wrapper">
      { project ? (

              <div className="project-detail-container">
              {/* <h2 className="header-project">{ project.name }</h2>  */}
              <div className="card-content-detail">
              <div className="card-image-detail">
                <img src={project.picture} alt={project.name}/>
              </div>
              
                <div className="project-detail-name">
                { project.name }
                </div>
                     
                <div className="songs-detail">

                    {project.songs.map(song => (
                           <span key={song} >{song}<br/></span>
                          ))}
                </div>
                <div className="date-detail">
                        Date de sortie:
                        {project.created}
                 </div>
                </div>
                <div className="card-action">
                  <Link to="/Discographie">Retour</Link>
                </div>
                </div>
        
        
      ) : (
        <h4 className="center">Aucun projet à afficher !</h4>
      )}
     </div>
     </>
  );
}
  
export default ProjectDetail;