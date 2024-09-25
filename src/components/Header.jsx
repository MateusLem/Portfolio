import DarkModeSwitch from './DarkModeSwitch';
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header className="flex bg-white dark:bg-gray-900 p-4 shadow-md">
      <div className="flex w-full">
        <NavLink to="/"><h1>Meu Portfólio</h1></NavLink>
        <nav className="ml-auto" style={{ flexBasis: '50%' }}>
          <ul className="flex justify-center gap-5">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">Sobre</NavLink></li>
            <li><NavLink to="/projects">Projetos</NavLink></li>
            <li><NavLink to="/contact">Contato</NavLink></li>
          </ul>
        </nav>
      </div>
      <DarkModeSwitch/>
    </header>
  );
}
