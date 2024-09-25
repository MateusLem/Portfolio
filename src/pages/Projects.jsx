import ProjectCard from '../components/ProjectCard';

const projects = [
  { id: 1, name: 'Projeto 1', description: 'Um projeto incrível', url:"" },
  { id: 2, name: 'Projeto 2', description: 'Outro projeto interessante' },
];

export default function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-2xl font-bold mb-4">Meus Projetos</h2>
      <ul>
        {projects.map(project => (
          <ProjectCard key={project.id} {...project}/>
        ))}
      </ul>
    </section>
  );
};

