import { Link } from "react-router-dom";

export default function ProjectCard({ id, name, description, url, bg }) {
  return (
    <>
      <div
        key={id}
        className="flex flex-col text-center justify-center items-center"
      >
        <h2 className="font-semibold">{name}</h2>
        <Link
          className={`w-[10rem] py-2 px-3 transition ease-in-out duration-300 ${bg} hover:bg-white hover:text-purple-800 m-4 text-white rounded-3xl`}
          to={`https://github.com/MateusLem/${url}`}
          target="blank"
        >
          <p>{description}</p>
        </Link>
      </div>
    </>
  );
}
