import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
import CardComponent from "../../components/CardComponent.jsx";
import "../../styles/global.css";

export default function HomeLayout({ pageContent }){
 const homeHeroImage =
    pageContent.heroImage?.fields?.file?.url
      ? `https:${pageContent.heroImage.fields.file.url}`
      : null;

  return (
    <>
        <header
          className="home-hero"
          style={{
            backgroundImage: `url(${homeHeroImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 30%",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            marginTop: "-25vh",
            textAlign: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              backgroundColor: "rgba(30, 67, 44, 0.7)",
              zIndex: 1,
            }}
          ></div>
          <div
            className="hero-content"
            style={{
              position: "relative",
              marginTop: "25vh",
              zIndex: 2,
            }}
          >
            <h1
              style={{
                fontFamily: "'Eastman-Alternate-Trial-Medium', sans-serif",
                letterSpacing: "0.75rem",
                fontWeight: "300",
                fontSize: "3.0rem",
                color: "var(--lightblue)",
              }}
            >
              {pageContent.heading1}
            </h1>
            <p
              style={{
                maxWidth: "60%",
                margin: "2rem auto",
                fontWeight: "400",
                fontSize: "1.1rem",
                lineHeight: "1.5rem",
                color: "var(--whiteblue)",
              }}
            >
              {pageContent.heroText}

            </p>
            <div
              className="button-wrap"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Link to="/contact" className="link-1">
                <button className="button-1">BOKA MÖTE</button>
              </Link>
              <Link to="/products" className="link-1">
                <button className="button-1">PRODUKTER</button>
              </Link>
            </div>
          </div>
        </header>
        <section
          className="section-1"
          style={{
            textAlign: "center",
            backgroundImage: "url('src/assets/images/decoration/graphic_0101-long2-whiteblue.png')",
            backgroundSize: "140%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "var(--whiteblue)",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "4% 0 5% 0",
          }}
        >
          <h2 style={{ color: "var(--aquablue)" }}>Våra kontor</h2>
          <CardComponent />
         {documentToReactComponents(pageContent.richText)}
        </section>
        <section
          className="section-2"
          style={{ textAlign: "center" }}
        ></section>
    </>
  );
}
