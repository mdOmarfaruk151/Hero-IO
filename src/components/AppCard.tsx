import { Link } from "react-router-dom";
import downloadsIcon from "../../assets/icon-downloads.png";
import ratingsIcon from "../../assets/icon-ratings.png";
import type { AppItem } from "../types";
import { formatMetric } from "../utils/format";

interface AppCardProps {
  app: AppItem;
}

export const AppCard = ({ app }: AppCardProps) => (
  <Link to={`/apps/${app.id}`} className="app-card">
    <div className="app-card-image-wrap">
      <img src={app.image} alt={app.title} className="app-card-image" />
    </div>
    <div className="app-card-body">
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
      </div>
    </div>
  </Link>
);
