import { FaLinkedin, FaGithub} from 'react-icons/fa';
import userData from "../data/user.json";

export default function Home() {
  return (
    <>
      <footer className="flex bg-white dark:bg-gray-900 p-4 shadow-md text-white text-center justify-center items-center">
        <a href={`https://www.linkedin.com/in/${userData.linkedin}`} className="mx-2" aria-label="LinkedIn">
          <FaLinkedin size={30} className='transform transition-transform duration-200 hover:scale-110 active:scale-90'/>
        </a>
        <a href={`https://github.com/${userData.github}`} className="mx-2" aria-label="GitHub">
          <FaGithub size={30} className='transform transition-transform duration-200 hover:scale-110 active:scale-90'/>
        </a>
      </footer>
    </>
  );
}
