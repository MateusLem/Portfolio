import React from 'react';

export default function About() {
  return (
    <section className="text-center p-8">
      <img loading="lazy" src="https://avatars.githubusercontent.com/MateusLem" alt="Meu perfil" className="rounded-full w-32 mx-auto mb-4" />
      <h2 className="text-3xl font-bold">Mateus da Costa Leme</h2>
      <p className="text-lg mt-2">
        Sou desenvolvedor analista full-stack
      </p>
      <p className="text-lg mt-2">
        Trabalho na área desde 2023, abrangindo desde automação de processos à manutenção de microsserviços
      </p>
      <p className="text-lg mt-2">
        Nascido do Python, forjado em Java e temperado em React
      </p>
    </section>
  );
};

