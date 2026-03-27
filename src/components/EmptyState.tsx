import { Link } from "react-router-dom";

interface EmptyStateProps {
  image: string;
  title: string;
  message: string;
  buttonLabel?: string;
  buttonTo?: string;
}

export const EmptyState = ({
  image,
  title,
  message,
  buttonLabel = "Go Back",
  buttonTo = "/",
}: EmptyStateProps) => (
  <section className="empty-state container">
    <img src={image} alt={title} className="empty-state-image" />
    <h1>{title}</h1>
    <p>{message}</p>
    <Link to={buttonTo} className="primary-btn small">
      {buttonLabel}
    </Link>
  </section>
);
