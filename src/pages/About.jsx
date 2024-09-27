import userData from "../data/user.json";
import linkedinIcon from "../img/linkedin.svg";
import githubIcon from "../img/github.svg";
import AboutIcon from "../components/AboutIcon";

const iconsData = [
  {
    id: 1,
    url: `https://www.linkedin.com/in/${userData.linkedin}`,
    icon: linkedinIcon,
    alt: "LinkedIn",
  },
  {
    id: 2,
    url: `https://github.com/${userData.github}`,
    icon: githubIcon,
    alt: "GitHub",
  },
];

export default function About() {
  return (
    <section className="text-center p-8">
      <img
        loading="lazy"
        src={`https://avatars.githubusercontent.com/${userData.github}`}
        alt="Meu perfil"
        className="rounded-full w-32 mx-auto mb-4"
      />

      <h2 className="text-3xl font-bold">{userData.name}</h2>

      {userData.phrases.map((phrase, index) => (
        <p key={index} className="text-lg mt-2">
          {phrase}
        </p>
      ))}

      <div className="flex flex-row justify-center items-center space-x-4 mt-10">
        {iconsData.map((data) => (
          <AboutIcon key={data.id} {...data} />
        ))}
      </div>
    </section>
  );
}
