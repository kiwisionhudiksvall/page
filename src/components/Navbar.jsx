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
        const res = await client.getEntries({
  content_type: "navigation",
  include: 4,
});

const nav = res.items[0];
setPages(nav.fields.items);

        const items = res.items
          .map((item) => item.fields)

          .filter((page) => page.showInNav !== false)
          
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
  {pages.map((item) => (
    <NavItem
      key={item.sys.id}
      item={item}
      onClick={() => setIsOpen(false)}
    />
  ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );

function NavItem({ item, onClick }) {
  const page = item.fields.page;
  const children = item.fields.children || [];

  return (
    <li>
      <Link
        className="menu-button"
        to={`/${page.fields.slug}`}
        onClick={onClick}
      >
        {item.fields.label}
      </Link>

      {children.length > 0 && (
        <ul className="submenu">
          {children.map((child) => (
            <NavItem
              key={child.sys.id}
              item={child}
              onClick={onClick}
            />
          ))}
        </ul>
      )}
    </li>
  );
}


}

 
