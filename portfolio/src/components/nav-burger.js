import "../App.css";
import styled from "styled-components";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

// const NavBTNContainer = styled.div`
//   z-index: 2;
//   position: fixed;
//   width: 100%;
//   @media (min-width: 600px) {
//     display: none;
//   }
// `;

// const NavWrapper = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100%;
// `;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const TextRight = styled.a`
  padding: 0 10px;
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    transition: 500ms;
    transform: scale(1.3);
  }
`;

// export const NavBurger = (isAuth) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       <NavWrapper>
//         <NavBTNContainer>
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             id="burger"
//             class="open-main-nav"
//           >
//             <svg
//               stroke="currentColor"
//               fill="#fff"
//               stroke-width="0"
//               viewBox="0 0 512 512"
//               height="20px"
//               width="20px"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
//             </svg>
//           </button>
//         </NavBTNContainer>
//         <NavContainer
//           className={menuOpen ? "nav-container open" : "nav-container"}
//         >
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               height: "100%",
//               flexDirection: "column",
//               justifyContent: "center",
//               gap: "30px",
//             }}
//           >
//             <NavLink
//               className="text-left"
//               to="/"
//               style={{ display: "flex", alignItems: "center" }}
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <img
//                 src="https://t4.ftcdn.net/jpg/03/58/57/35/360_F_358573538_BNoT22Ti0oklTZRqBkvSevVaAHLBam5b.jpg"
//                 style={{
//                   width: "30px",
//                   height: "30px",
//                   borderRadius: "50%",
//                   objectFit: "cover",
//                 }}
//               ></img>
//             </NavLink>
//             {/* <Link
//               className="text-left left"
//               to="home"
//               spy={true}
//               smooth={true}
//               offset={0}
//               duration={1500}
//             >
//               Home
//             </Link> */}
//             <Link
//               className="text-left"
//               to="cards"
//               spy={true}
//               smooth={true}
//               offset={0}
//               duration={1500}
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               About Me
//             </Link>
//             <Link
//               className="text-left"
//               to="showcase"
//               spy={true}
//               smooth={true}
//               offset={50}
//               duration={1500}
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               Projects
//             </Link>
//             <Link
//               className="text-left"
//               to="contact"
//               spy={true}
//               smooth={true}
//               offset={50}
//               duration={1500}
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               Contact
//             </Link>
//             {isAuth.isAuth === true && (
//               <NavLink
//                 className="text-left"
//                 to="admin"
//                 onClick={() => setMenuOpen(!menuOpen)}
//               >
//                 Admin
//               </NavLink>
//             )}
//           </div>
//           <div style={{ display: "flex", paddingTop: "20px" }}>
//             <TextRight
//               href="https://github.com/DawidPiechotaGit"
//               target="_blank"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="25"
//                 height="25"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
//                   fill="#fff"
//                 />
//               </svg>
//             </TextRight>
//             <TextRight
//               href="https://www.linkedin.com/in/dawid-piechota-206213266/"
//               target="_blank"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="25"
//                 height="25"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
//                   fill="#fff"
//                 />
//               </svg>
//             </TextRight>
//             <TextRight
//               href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:c72ffc28-22bb-4bd3-8c55-8872629ba346"
//               target="_blank"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 384 512"
//                 width="25"
//                 height="25"
//               >
//                 <path
//                   d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
//                   fill="#fff"
//                 />
//               </svg>
//             </TextRight>
//           </div>
//         </NavContainer>
//       </NavWrapper>
//     </>
//   );
// };

export const NavBurger = (isAuth) => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hiddenNav");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hiddenNav");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div style={{ width: "100%", height: "0", position: "fixed", zIndex: "2" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>

      <div className={menu_class}>
        <NavContainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
              gap: "30px",
            }}
          >
            <NavLink
              className="text-left"
              to="/"
              style={{ display: "flex", alignItems: "center" }}
              onClick={updateMenu}
            >
              <img
                src="https://t4.ftcdn.net/jpg/03/58/57/35/360_F_358573538_BNoT22Ti0oklTZRqBkvSevVaAHLBam5b.jpg"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              ></img>
            </NavLink>
            {/* <Link
              className="text-left left"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={1500}
            >
              Home
            </Link> */}
            <Link
              className="text-left"
              to="cards"
              spy={true}
              smooth={true}
              offset={0}
              duration={1500}
              onClick={updateMenu}
            >
              About Me
            </Link>
            <Link
              className="text-left"
              to="showcase"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
              onClick={updateMenu}
            >
              Projects
            </Link>
            <Link
              className="text-left"
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={1500}
              onClick={updateMenu}
            >
              Contact
            </Link>
            {isAuth.isAuth === true && (
              <NavLink className="text-left" to="admin" onClick={updateMenu}>
                Admin
              </NavLink>
            )}
          </div>
          <div
            style={{
              display: "flex",
              paddingTop: "20px",
              justifyContent: "center",
            }}
          >
            <TextRight
              href="https://github.com/DawidPiechotaGit"
              target="_blank"
              onClick={updateMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  fill="#fff"
                />
              </svg>
            </TextRight>
            <TextRight
              href="https://www.linkedin.com/in/dawid-piechota-206213266/"
              target="_blank"
              onClick={updateMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  fill="#fff"
                />
              </svg>
            </TextRight>
            <TextRight
              href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:c72ffc28-22bb-4bd3-8c55-8872629ba346"
              target="_blank"
              onClick={updateMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="25"
                height="25"
              >
                <path
                  d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"
                  fill="#fff"
                />
              </svg>
            </TextRight>
          </div>
        </NavContainer>
      </div>
    </div>
  );
};
