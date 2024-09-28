import { Link } from "react-router-dom";

export default function ProjectCard({ id, title, name, description, bg }) {
  return (
    <div key={id} className="flex flex-col text-center justify-center items-center">
      <h2 className="font-semibold">{title}</h2>
      <Link
        className="w-[10rem] py-2 px-3 transition ease-in-out duration-300 hover:text-purple-800 m-4 text-white rounded-3xl text-lg"
        to={`/projects/${id}`}
        style={{ backgroundColor: bg }}
      >
        <p>{name}</p>
      </Link>
    </div>
  );
}
