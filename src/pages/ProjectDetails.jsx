import { useParams } from "react-router-dom";
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
      <a
        href={`https://github.com/MateusLem/${project.url}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        Ver no GitHub
      </a>
    </section>
  );
}
