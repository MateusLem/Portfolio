import DarkModeSwitch from './DarkModeSwitch';
import HeaderLink from './HeaderLink';
import { NavLink } from "react-router-dom";

const links = [
  { path: "", title: "Home" },
  { path: "about", title: "Sobre" },
  { path: "projects", title: "Projetos" },
  { path: "contact", title: "Contato" }
];

export default function Header() {
  return (
    <header className="flex bg-white dark:bg-gray-900 p-4 shadow-md">
      <div className="flex w-full">
        <NavLink to="/"><h1>Meu Portfólio</h1></NavLink>
        <nav className="ml-auto" style={{ flexBasis: '50%' }}>
          <ul className="flex justify-center gap-5">
            {links.map((link, index) => (
              <li key={index} className="transform transition-transform duration-200 hover:scale-110 active:scale-90">
                <HeaderLink {...link} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <DarkModeSwitch />
    </header>
  );
}
