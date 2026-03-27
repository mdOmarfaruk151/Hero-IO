import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.png";
import { AppCard } from "../components/AppCard";
import { appsData } from "../data/apps";

const topApps = appsData.slice(0, 8);

const stats = [
  {
    label: "Total Downloads",
    value: 29.6,
    suffix: "M",
    decimals: 1,
    note: "21% More Than Last Month",
  },
  {
    label: "Total Reviews",
    value: 906,
    suffix: "K",
    decimals: 0,
    note: "46% More Than Last Month",
  },
  {
    label: "Active Apps",
    value: 132,
    suffix: "+",
    decimals: 0,
    note: "31 More Will Launch",
  },
];

const formatAnimatedValue = (
  value: number,
  decimals: number,
  suffix: string,
) => `${value.toFixed(decimals)}${suffix}`;

export const HomePage = () => {
  // Drives the count-up animation for the three highlighted homepage stats.
  const [animatedStats, setAnimatedStats] = useState(() =>
    stats.map(() => 0),
  );

  useEffect(() => {
    document.title = "Hero IO | Home";
  }, []);

  useEffect(() => {
    // Animate the totals once on page load so the stats section feels alive.
    const duration = 2200;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedStats(stats.map((stat) => stat.value * eased));

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    const frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const displayedStats = useMemo(
    () =>
      stats.map((stat, index) =>
        formatAnimatedValue(
          animatedStats[index] ?? 0,
          stat.decimals,
          stat.suffix,
        ),
      ),
    [animatedStats],
  );

  return (
    <>
      <section className="hero-section">
        <div className="container hero-home">
          <div className="hero-copy">
            <h1>
              We Build
              <br />
              <span>Productive</span> Apps
            </h1>
            <p className="eyebrow">
              At HERO.IO, we craft innovative apps designed to make everyday life
              simpler, smarter, and more exciting.
            </p>
            <p className="hero-subtitle">
              Our goal is to turn your ideas into digital experiences that truly
              make an impact.
            </p>
            <div className="hero-actions">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noreferrer"
                className="store-btn secondary store-chip"
              >
                <img
                  src="https://img.icons8.com/color/48/google-play.png"
                  alt=""
                  aria-hidden="true"
                  className="store-chip-icon-img"
                />
                Google Play
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                className="store-btn secondary store-chip"
              >
                <img
                  src="https://img.icons8.com/color/48/apple-app-store.png"
                  alt=""
                  aria-hidden="true"
                  className="store-chip-icon-img"
                />
                App Store
              </a>
            </div>
          </div>

          <div className="hero-image-only">
            <img src={heroImage} alt="Hero IO featured app" />
          </div>
        </div>
      </section>

      <section className="stats-band">
        <div className="container">
          <div className="stats-heading">
            <h2>Trusted By Millions, Built For You</h2>
          </div>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <article key={stat.label} className="stat-card">
                <p>{stat.label}</p>
                <h2>{displayedStats[index]}</h2>
                <span>{stat.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="apps-showcase container">
        <div className="section-heading">
          <h2>Trending Apps</h2>
          <p>Explore all trending apps on the market developed by us</p>
        </div>

        <div className="apps-grid">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="center-action">
          <Link to="/apps" className="primary-btn small">
            Show All
          </Link>
        </div>
      </section>
    </>
  );
};
