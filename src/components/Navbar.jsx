import client from "../contentfulClient";
import Logo from "../assets/images/logos/logo_aquablue-00-01.svg";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";

export default function Navbar() {
  const [pages, setPages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const res = await client.getEntries({ content_type: "pageContent" });
        const items = res.items
          .map((item) => item.fields)
          // Filtrera bort sidor som inte ska synas i nav (om du använder showInNav)
          .filter((page) => page.showInNav !== false)
          // Sortera efter menuOrder (eller alfabetiskt om det saknas)
          .sort((a, b) => (a.menuOrder || 999) - (b.menuOrder || 999));

        setPages(items);
      } catch (error) {
        console.error("Fel vid hämtning av navigation:", error);
      }
    };
    fetchPages();
  }, []);

  return (
    <nav className="navbar" style={{ position: "fixed", top: 0, paddingTop: "5vh", zIndex: 100 }}>
      <img
        src={Logo}
        alt="Logo"
        className="logo"
        onClick={() => navigate("/")}
      />
      <ul className="nav-menu">
        <li className="dropdown" ref={dropdownRef}>
          <button
            className="dropdown-button"
            onClick={() => setIsOpen((prev) => !prev)}
            style={{
              padding: "9px 30px",
              borderRadius: isOpen ? "20px 20px 0px 0px" : "20px",
              border: "none",
            }}
          >
            {isOpen ? "Stäng ⨯" : "Meny ☰"}
          </button>

          {isOpen && (
            <ul
              className="dropdown-menu"
              style={{
                position: "absolute",
                top: "7vh",
                right: "4.35vw",
                backgroundColor: "#020d21f0",
                boxShadow: "1px 2px 16px #EEFFFE60",
                borderRadius: "30px 0px 30px 0px",
                padding: "20px",
                listStyle: "none",
                zIndex: 1000,
              }}
            >
              {pages.map((p) => (
                <Link className="menu-button" key={p.slug} to={`/${p.slug}`} onClick={() => setIsOpen(false)}>
                  {p.pageTitle}
                </Link>
              ))}

            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}

 
