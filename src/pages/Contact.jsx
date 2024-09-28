export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };
    console.log(formData);
  };

  return (
    <section className="flex items-center justify-center p-8">
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Contato</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Nome"
            className="block w-full p-2 border border-gray-300 rounded text-black" // Set text color
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="block w-full p-2 border border-gray-300 rounded text-black" // Set text color
            required
          />
          <textarea
            name="message"
            placeholder="Sua mensagem"
            className="block w-full p-2 border border-gray-300 rounded text-black" // Set text color
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
