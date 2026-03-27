import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/apps", label: "Apps" },
  { to: "/installation", label: "Installation" },
];

export const Layout = () => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // Shows a short top loading bar whenever the route changes.
    setIsNavigating(true);
    const timer = window.setTimeout(() => setIsNavigating(false), 350);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <NavLink to="/" className="brand" aria-label="Hero IO home">
            <img src={logo} alt="Hero IO" className="brand-logo" />
            <span className="brand-name">Hero IO</span>
          </NavLink>

          <nav className="main-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <a
            className="contribute-btn"
            href="https://github.com/mdOmarfaruk151/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
              alt=""
              aria-hidden="true"
              className="contribute-icon"
            />
            Contribute
          </a>
        </div>
      </header>

      {isNavigating && (
        <div className="route-loader" aria-hidden="true">
          <span className="route-loader-bar" />
        </div>
      )}

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <NavLink to="/" className="footer-brand-wrap" aria-label="Hero IO home">
            <img src={logo} alt="Hero IO" className="footer-logo" />
            <span className="brand-name footer-brand-name">Hero IO</span>
          </NavLink>
          <div className="footer-social">
            <h3>Social Links</h3>
            <div className="social-icons">
              <a href="https://x.com" target="_blank" rel="noreferrer">
                X
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                in
              </a>
              <a
                href="https://facebook.com/Md.Omar.Faruk.152"
                target="_blank"
                rel="noreferrer"
              >
                f
              </a>
            </div>
          </div>
        </div>
        <div className="container footer-divider" />
        <div className="container footer-bottom">
          <p className="footer-copy">Copyright 2026 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};
