import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import downloadsIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import { PageLoader } from "../components/PageLoader";
import { PageHero } from "../components/PageHero";
import { appsData } from "../data/apps";
import type { InstallationSort } from "../types";
import { sortAppsByDownloads } from "../utils/apps";
import { formatMetric } from "../utils/format";
import { getInstalledIds, uninstallApp } from "../utils/storage";

export const InstallationPage = () => {
  const [installedIds, setInstalledIds] = useState<number[]>(getInstalledIds());
  const [sortBy, setSortBy] = useState<InstallationSort>("high-low");

  useEffect(() => {
    document.title = "Hero IO | Installation";
  }, []);

  useEffect(() => {
    const syncInstalledApps = () => {
      setInstalledIds(getInstalledIds());
    };

    window.addEventListener("storage", syncInstalledApps);
    return () => window.removeEventListener("storage", syncInstalledApps);
  }, []);

  const installedApps = useMemo(() => {
    const appMap = appsData.filter((app) => installedIds.includes(app.id));
    return sortAppsByDownloads(appMap, sortBy);
  }, [installedIds, sortBy]);

  const handleUninstall = (id: number, title: string) => {
    const next = uninstallApp(id);
    setInstalledIds(next);
    toast.info(`${title} removed from installation list.`);
  };

  return (
    <section className="section-pad">
      <PageHero
        title="Your Installed Apps"
        subtitle="Explore all trending apps on the market developed by us"
      />

      <div className="container">
        <div className="toolbar">
          <h2>{installedApps.length} Apps Found</h2>
          <select
            className="sort-select"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as InstallationSort)}
          >
            <option value="high-low">Sort By Downloads: High-Low</option>
            <option value="low-high">Sort By Downloads: Low-High</option>
          </select>
        </div>

        {installedApps.length ? (
          <div className="installed-list">
            {installedApps.map((app) => (
              <article key={app.id} className="installed-card">
                <div className="installed-app">
                  <img src={app.image} alt={app.title} className="installed-image" />
                  <div>
                    <h3>{app.title}</h3>
                    <div className="app-card-metrics">
                      <span className="metric-download">
                        <img src={downloadsIcon} alt="" />
                        {formatMetric(app.downloads)}
                      </span>
                      <span className="metric-rating">
                        <img src={ratingsIcon} alt="" />
                        {app.ratingAvg}
                      </span>
                      <span className="metric-size">{app.size} MB</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="install-btn uninstall"
                  onClick={() => handleUninstall(app.id, app.title)}
                >
                  Uninstall
                </button>
              </article>
            ))}
          </div>
        ) : (
          <PageLoader label="No installed apps yet. Install an app to see it here." />
        )}
      </div>
    </section>
  );
};
