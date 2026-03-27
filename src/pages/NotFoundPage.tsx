import { useEffect } from "react";
import errorImage from "../../assets/error-404.png";
import { EmptyState } from "../components/EmptyState";

export const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Hero IO | 404";
  }, []);

  return (
    <EmptyState
      image={errorImage}
      title="Oops, page not found!"
      message="The page you are looking for is not available."
      buttonTo="/"
    />
  );
};
