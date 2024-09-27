export default function AboutIcon({ id, url, icon, alt }) {
  return (
    <>
      <div
        key={id}
        className="transform transition-transform duration-200 hover:scale-110 active:scale-90"
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={icon}
            alt={`Meu ${alt}`}
            className="rounded-full w-32 mx-auto mb-4"
          />
        </a>
      </div>
    </>
  );
}
