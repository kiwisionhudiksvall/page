
import ContentfulFetch from "../components/ContentfulFetch";

export default function Products() {
  return (
    <>
    <header className="products-header">
      <h1>Utbud</h1>
      <p>Vårt utbud med våra produkter.</p>
    </header>
    <section className="create-content">
        <ContentfulFetch />
        </section>
        </> 
  );
}