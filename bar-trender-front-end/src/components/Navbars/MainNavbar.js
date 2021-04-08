import React from "react";

import barTrender from "../../assets/img/barTrender60.png";
import * as uuid from 'uuid';

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import ModalSearch from "../../components/Modals/ModalSearch";
import ModalLogin from "../../components/Modals/ModalLogin";
import "./MainNavbar.css";

function MainNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 200 ||
        document.body.scrollTop > 200
      ) {
        setNavbarColor("bg-primary solid-color");
      } else if (
        document.documentElement.scrollTop < 201 ||
        document.body.scrollTop < 201
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const isLoggedIn =
    sessionStorage.getItem("token") && sessionStorage.getItem("rol") == "owner";
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}

      <Navbar
        className={"fixed-top " + navbarColor}
        color="primary"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate" style={{ margin: "0" }}>
            <Nav>
              <NavLink className="Logo" href="/main" style={{ float: "left" }}>
                <img alt="" src={barTrender} />
              </NavLink>
              <NavbarBrand href="/main" id="navbar-brand">
                BarTrender
              </NavbarBrand>

              <button
                className="navbar-toggler navbar-toggler"
                onClick={() => {
                  document.documentElement.classList.toggle("nav-open");
                  setCollapseOpen(!collapseOpen);
                }}
                aria-expanded={collapseOpen}
                type="button"
              >
                <span className="navbar-toggler-bar top-bar"></span>
                <span className="navbar-toggler-bar middle-bar"></span>
                <span className="navbar-toggler-bar bottom-bar"></span>
              </button>
            </Nav>
          </div>
          <ModalSearch key={uuid.v4()} />

          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              <NavItem>
                <NavLink
                  href="https://twitter.com/TrenderBar"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Síguenos en Twitter
                </UncontrolledTooltip>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://www.instagram.com/bartrenderofficial/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Síguenos en Instagram
                </UncontrolledTooltip>
              </NavItem>
              {isLoggedIn && (
                <NavItem>
                  <NavLink
                    href="/admin/dashboard"
                    id="discount-tooltip"
                  >
                    <i class="fal fa-tachometer-alt-fastest fa-lg mt-1"></i>
                    <p className="d-lg-none d-xl-none">Panel de control</p>
                  </NavLink>
                  <UncontrolledTooltip target="#discount-tooltip">
                    Panel de control
                  </UncontrolledTooltip>
                </NavItem>
              )}
              <NavItem>
                <NavLink id="account-tooltip">
                  <ModalLogin />
                  <UncontrolledTooltip target="#account-tooltip">
                    Iniciar sesión / Cerrar Sesión
                  </UncontrolledTooltip>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
