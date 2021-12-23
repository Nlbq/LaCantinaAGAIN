import React from 'react';
// import { Link } from 'react-router-dom';
// import Project from '../../models/project';
import PROJECTS from '../../models/bdd-project';
import ProjectList from './project-list';
import Navbar2 from '../Navbar2';


export default function Discographie() {

  return (

    <>

    <Navbar2 />
    <ProjectList/>














     {/* <h1 className="center">Discographie</h1>
    <div className="container">
      <div className="row">
        {PROJECTS.map(({id, name, picture, created}) =>(
          <div className="col s12 m4 l3" key={id}>   
            <div className="card vertical"> 
              <div className="card-image">
                  <img src={picture} alt={name} />
              </div>
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{name}</p>  
                    <p>{created}</p>
                  </div>
                </div>
            </div>
          </div>  
          ))}
    </div>
    </div> */}







    {/* {PROJECTS.map(Project => {

      return(

      <li className='cards__item'>
        <Link className='cards__item__link' >
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt=''
              src={Project.picture}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{Project.name}</h5>
          </div>
        </Link>
      </li>
      )
    })} */}
    </>
  );

}
