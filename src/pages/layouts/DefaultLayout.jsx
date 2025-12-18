export default function DefaultLayout({ page }) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1>{page.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: page.body }}
      />
    </div>
  );
}