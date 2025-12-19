// import { useState, useEffect, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import Logo from "../assets/images/logos/logo_aquablue-00-01.svg";
// import "../styles/global.css";
// import { getEntries } from "../sdk/contentful.js";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [navItems, setNavItems] = useState([]);
//   const navigate = useNavigate();
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     async function fetchNavItems() {
//       const entries = await getEntries("navigationItem");
//       // sortera efter order om det finns
//       const sorted = entries
//         .map((item) => item.fields)
//         .sort((a, b) => (a.order || 0) - (b.order || 0));
//       setNavItems(sorted);
//     }
//     fetchNavItems();
//   }, []);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (
//         isOpen &&
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target)
//       ) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [isOpen]);

//   return (
//     <nav className="navbar" style={{ position: "fixed", top: 0, zIndex: 100 }}>
//       <img
//         src={Logo}
//         alt="Logo"
//         className="logo"
//         onClick={() => navigate("/")}
//       />
//       <ul className="nav-menu">
//         <li className="dropdown" ref={dropdownRef}>
//           <button
//             className="dropdown-button"
//             onClick={() => setIsOpen((prev) => !prev)}
//             style={{
//               padding: "8px 30px 10px 30px",
//               borderRadius: isOpen ? "20px 20px 0px 0px" : "20px",
//               border: "none",
//             }}
//           >
//             {isOpen ? "Stäng ⨯" : "Meny ☰"}
//           </button>

//           {isOpen && (
//             <ul
//               className="dropdown-menu"
//               style={{
//                 position: "absolute",
//                 top: "7vh",
//                 right: "4.35vw",
//                 backgroundColor: "#020d21f0",
//                 boxShadow: "3px 2px 10px rgba(255, 255, 255, 0.12)",
//                 borderRadius: "30px 0px 30px 0px",
//                 padding: "20px",
//                 listStyle: "none",
//                 zIndex: 1000,
//               }}
//             >
//               {navItems.map((item, index) => (
//                 <li
//                   key={index}
//                   style={{
//                     marginLeft: "20px",
//                     width: "170px",
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "0.5rem",
//                   }}
//                 >
//                   <Link to={item.url} className="nav-button">
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// }
//                 <Link to="/products" className="nav-button">
//                   Utbud
//                 </Link>
//                 <Link to="/products" className="nav-sub">
//                   Systemutveckling
//                 </Link>
//                 <Link to="/products" className="nav-sub">
//                   Infrastruktur & moln
//                 </Link>
//                 <Link to="/products" className="nav-sub">
//                   IT-säkerhet
//                 </Link>
//                 <Link to="/products" className="nav-sub">
//                   Kundcase
//                 </Link>
//               </li>
//               <li
//                 style={{
//                   marginLeft: "20px",
//                   width: "160px",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "0.5rem",
//                 }}
//               >
//                 <Link to="/career" className="nav-button">
//                   Karriär
//                 </Link>
//                 <Link to="/products" className="nav-sub">
//                   Jobba hos oss
//                 </Link>
//                 <Link to="/products" className="nav-sub">
//                   Yrkestitlar
//                 </Link>
//                 <Link to="/products" className="nav-sub">
//                   Lediga tjänster
//                 </Link>
//               </li>
//               <li
//                 style={{
//                   marginLeft: "20px",
//                   width: "160px",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "0.5rem",
//                 }}
//               >
//                 <Link to="/about" className="nav-button">
//                   Om oss
//                 </Link>
//                 <Link to="/about" className="nav-sub">
//                   Bakgrund
//                 </Link>
//                 <Link to="/about" className="nav-sub">
//                   Kompetenser
//                 </Link>
//                 <Link to="/about" className="nav-sub">
//                   Samarbeten
//                 </Link>
//                 <Link to="/about" className="nav-sub">
//                   Kunder
//                 </Link>
//               </li>
//               <li
//                 style={{
//                   marginLeft: "20px",
//                   width: "160px",
//                   display: "flex",
//                   flexDirection: "column",
//                   gap: "0.5rem",
//                 }}
//               >
//                 <Link to="/contact" className="nav-button">
//                   Kontakt
//                 </Link>
//                 <Link to="/contact" className="nav-sub">
//                   Kontaktuppgifter
//                 </Link>
//                 <Link to="/contact" className="nav-sub">
//                   Direktformulär
//                 </Link>
//                 <Link to="/contact" className="nav-sub">
//                   Här finns vi
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// }
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
      const res = await client.getEntries({ content_type: "pageContent" });
      setPages(res.items.map((item) => item.fields));
    };
    fetchPages();
  }, []);

  return (
    <nav className="navbar" style={{ position: "fixed", top: 0, zIndex: 100 }}>
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
              padding: "8px 30px 10px 30px",
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
                boxShadow: "3px 2px 10px rgba(255, 255, 255, 0.12)",
                borderRadius: "30px 0px 30px 0px",
                padding: "20px",
                listStyle: "none",
                zIndex: 1000,
              }}
            >
              <Link to="/">Hem</Link>
              {pages.map((p) => (
                <Link className="menu-button" key={p.slug} to={`/${p.slug}`}>
                  {p.heading1}
                </Link>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
