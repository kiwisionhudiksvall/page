export default function ContactLayout({ page }) {
  return (
    <div className="p-8 bg-blue-50 min-h-screen">
      <h1>{page.title}</h1>
      <p>{page.body}</p>
      <form className="space-y-4 max-w-lg">
        <input type="text" placeholder="Ditt namn" className="border w-full p-2 rounded" />
        <input type="email" placeholder="Din e-post" className="border w-full p-2 rounded" />
        <textarea placeholder="Ditt meddelande" className="border w-full p-2 rounded" rows="5" />
        <button className="bg-blue-600 text-white py-2 px-4 rounded">Skicka</button>
      </form>
    </div>
  );
}