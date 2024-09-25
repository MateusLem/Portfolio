import React from 'react';
import { Link } from 'react-router-dom';


export default function ProjectCard({id, name, description, url}){
    return (
       
        <>
        <div key={id} className="flex flex-col text-center justify-center items-center">
            <h2 className="font-semibold">{name}</h2>
              <Link className="py-2 px-3 transition ease-in-out duration-300 bg-purple-800 hover:bg-white hover:text-purple-800 m-4 text-white rounded-3xl" to={`https://github.com/MateusLem/${url}`}><p>{description}</p></Link>
        </div>
        </>
        
      );
}