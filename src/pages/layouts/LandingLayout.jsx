export default function LandingLayout({ page }) {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-24">
      <div className="text-center max-w-3xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">{page.title}</h1>
        <p className="text-lg opacity-90 mb-8">{page.body}</p>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-gray-100">
          Kom igång
        </button>
      </div>
    </section>
  );
}