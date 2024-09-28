import DarkModeSwitch from './DarkModeSwitch';
import { NavLink } from "react-router-dom";
import NavHeader from './NavHeader';


export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 p-4 shadow-md">
      <div  className='flex justify-between mt-3' >
      <NavLink to="/"><h1>Meu Portfólio</h1></NavLink>
      <NavHeader />
      <DarkModeSwitch />
      </div>
      
    </header>
  );
}
