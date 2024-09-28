import { useParams } from "react-router-dom";
import {FaGithub} from 'react-icons/fa';
import data from "../data/projects.json";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = data.find((project) => project.id === parseInt(id));

  return !project ? (
    <h1 className="flex flex-row justify-center items-center text-2xl font-bold space-x-4 mt-10 p-8">
      Projeto não encontrado!
    </h1>
  ) : (
    <section className="flex flex-col justify-center items-center space-y-4 mt-10 p-8 font-serif text-lg">
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <h3 className="rounded-3xl w-[10rem] py-2 px-3 text-center"
      style={{ backgroundColor: project.bg }}>
        {project.name}
        </h3>
      <p className="text-center" >
        {project.description.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <div className=" flex w-[10rem] py-2 px-3 text-lg leading-[1.5rem] m-4 rounded-3xl text-center justify-around items-center
      bg-black text-white
       hover:bg-white hover:text-black 
        active:bg-black active:text-white
        transition ease-in-out duration-300 hover:scale-110 active:scale-90" >
        <a
          href={`https://github.com/MateusLem/${project.url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver no GitHub
          
        </a>
        <FaGithub size={30}/>
      </div>
      
    </section>
  );
}
