import HeaderLink from './HeaderLink';

const links = [
  { path: "", title: "Home" },
  { path: "about", title: "Sobre" },
  { path: "projects", title: "Projetos" },
  { path: "contact", title: "Contato" }
];

export default function NavHeader() {
  return (
    <nav className="w-full flex justify-center" style={{ flexBasis: '50%' }}>
      <ul className="flex justify-center gap-5">
        {links.map((link, index) => (
          <li key={index} className="transform transition-transform duration-200 hover:scale-110 active:scale-90">
            <HeaderLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
