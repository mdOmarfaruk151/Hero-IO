interface PageHeroProps {
  title: string;
  subtitle: string;
}

export const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section className="page-hero container">
    <h1>{title}</h1>
    <p>{subtitle}</p>
  </section>
);
