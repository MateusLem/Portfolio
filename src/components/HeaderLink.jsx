import { NavLink } from "react-router-dom";

export default function HeaderLink({id, path, title}) {
  return (
    <>
      <NavLink key={id} to={`/${path}`}>{title}</NavLink>
    </>
  );
}