import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import appErrorImage from "../../assets/App-Error.png";
import downloadsIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import reviewsIcon from "../../assets/icon-review.png";
import { EmptyState } from "../components/EmptyState";
import { getAppById } from "../utils/apps";
import { formatMetric } from "../utils/format";
import { getInstalledIds, installApp } from "../utils/storage";

export const AppDetailsPage = () => {
  const { id } = useParams();
  const appId = Number(id);
  const app = useMemo(() => getAppById(appId), [appId]);
  const [installedIds, setInstalledIds] = useState<number[]>(getInstalledIds());

  useEffect(() => {
    document.title = app ? `Hero IO | ${app.title}` : "Hero IO | App Not Found";
  }, [app]);

  if (!app) {
    return (
      <EmptyState
        image={appErrorImage}
        title="OPPS!! APP NOT FOUND"
        message="The app you are requesting is not found on our system. Please try another app."
        buttonTo="/apps"
      />
    );
  }

  const isInstalled = installedIds.includes(app.id);

  const handleInstall = () => {
    const next = installApp(app.id);
    setInstalledIds(next);
    toast.success(`${app.title} installed successfully.`);
  };

  return (
    <section className="section-pad">
      <div className="container details-card">
        <div className="details-top">
          <div className="details-image-wrap">
            <img src={app.image} alt={app.title} className="details-image" />
          </div>

          <div className="details-main">
            <h1>{app.title}</h1>
            <p className="muted">
              Developed by <span>{app.companyName}</span>
            </p>
            <div className="details-metrics">
              <div>
                <img src={downloadsIcon} alt="" />
                <span>Downloads</span>
                <strong>{formatMetric(app.downloads)}</strong>
              </div>
              <div>
                <img src={ratingsIcon} alt="" />
                <span>Average Ratings</span>
                <strong>{app.ratingAvg}</strong>
              </div>
              <div>
                <img src={reviewsIcon} alt="" />
                <span>Total Reviews</span>
                <strong>{formatMetric(app.reviews)}</strong>
              </div>
            </div>
            <button
              type="button"
              className={`install-btn${isInstalled ? " installed" : ""}`}
              onClick={handleInstall}
              disabled={isInstalled}
            >
              {isInstalled ? "Installed" : `Install Now [${app.size} MB]`}
            </button>
          </div>
        </div>

        <div className="details-section">
          <h2>Ratings</h2>
          <div className="chart-wrap">
            <ResponsiveContainer width="100%" height={320}>
              <BarChart
                data={[...app.ratings].reverse()}
                layout="vertical"
                margin={{ top: 0, right: 24, left: 0, bottom: 0 }}
              >
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#ff8d1b" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="details-section">
          <h2>Description</h2>
          <p>{app.description}</p>
          <p>
            This app focuses on dependable daily performance with clean navigation,
            quick onboarding, and practical feedback loops that help users stay
            organized without feeling overwhelmed.
          </p>
          <p>
            It combines timers, task planning, and review insights into one
            responsive experience so users can track their progress across mobile,
            tablet, and desktop without losing context.
          </p>
        </div>
      </div>
    </section>
  );
};
