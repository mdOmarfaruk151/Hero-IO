import { useEffect, useMemo, useState } from "react";
import { AppCard } from "../components/AppCard";
import { PageLoader } from "../components/PageLoader";
import { PageHero } from "../components/PageHero";
import { appsData } from "../data/apps";

export const AppsPage = () => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    document.title = "Hero IO | Apps";
  }, []);

  useEffect(() => {
    if (!query) {
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    const timer = window.setTimeout(() => setIsSearching(false), 280);
    return () => window.clearTimeout(timer);
  }, [query]);

  const filteredApps = useMemo(
    () =>
      appsData.filter((app) =>
        app.title.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query],
  );

  return (
    <section className="section-pad">
      <PageHero
        title="Our All Applications"
        subtitle="Explore all apps on the market developed by us. We code for millions."
      />

      <div className="container">
        <div className="toolbar">
          <h2>{appsData.length} Apps Found</h2>
          <label className="search-input">
            <span className="sr-only">Search apps</span>
            <input
              type="search"
              placeholder="search apps"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>

        {isSearching ? (
          <PageLoader label="Searching apps..." />
        ) : filteredApps.length ? (
          <div className="apps-grid">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <PageLoader label="No App Found" />
        )}
      </div>
    </section>
  );
};
