import ProjectCard from '../components/ProjectCard';
import data from '../data/projects.json';

export default function Projects() {
  if (!data || !data.length) {
    return <div>Loading projects...</div>;
  }

  return (
    <section className="p-8">
      <h2 className="text-center text-2xl font-bold mb-4">Meus Projetos</h2>
      <ul className="flex justify-center items-center space-x-4 mt-20">
        {data.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ul>
    </section>
  );
}
