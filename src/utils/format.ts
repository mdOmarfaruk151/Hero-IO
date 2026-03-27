export const formatCompactNumber = (value: number) =>
  new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);

export const formatMetric = (value: number, suffix = "") =>
  `${formatCompactNumber(value)}${suffix}`;
