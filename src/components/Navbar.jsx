import client from "../contentfulClient";
import Logo from "../assets/images/logos/logo_aquablue-00-01.svg";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/global.css";

export default function Navbar() {
  const [navItems, setNavItems] = useState([]);
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

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    async function fetchNavigation() {
      try {
        const res = await client.getEntries({
          content_type: "navigation",
          include: 4,
        });

        if (!res.items.length) return;

        // Vi antar EN navigation: "Main navigation"
        const navigation = res.items[0];
        setNavItems(navigation.fields.items || []);
      } catch (error) {
        console.error("Fel vid hämtning av navigation:", error);
      }
    }

    fetchNavigation();
  }, []);

  return (
    <nav
      className="navbar"
      style={{ position: "fixed", top: 0, paddingTop: "5vh", zIndex: 100 }}
    >
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
              {navItems.map((item) => (
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
}

function NavItem({ item, onClick }) {
  const { label, page, children = [] } = item.fields;

  if (!page) return null;

  return (
    <li>
      <Link
        className="menu-button"
        to={`/${page.fields.slug}`}
        onClick={onClick}
      >
        {label}
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
