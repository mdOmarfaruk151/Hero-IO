import { appsData } from "../data/apps";
import type { AppItem, InstallationSort } from "../types";

export const getAppById = (id: number) =>
  appsData.find((app) => app.id === id);

export const sortAppsByDownloads = (
  apps: AppItem[],
  direction: InstallationSort,
) =>
  [...apps].sort((a, b) =>
    direction === "high-low"
      ? b.downloads - a.downloads
      : a.downloads - b.downloads,
  );
