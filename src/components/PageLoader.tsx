interface PageLoaderProps {
  label: string;
  fullPage?: boolean;
}

export const PageLoader = ({ label, fullPage = false }: PageLoaderProps) => (
  <div className={`search-loader${fullPage ? " full-page" : ""}`}>{label}</div>
);
