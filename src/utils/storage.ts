const STORAGE_KEY = "hero-io-installed-apps";

export const getInstalledIds = (): number[] => {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((item): item is number => typeof item === "number")
      : [];
  } catch {
    return [];
  }
};

export const saveInstalledIds = (ids: number[]) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
};

export const installApp = (id: number) => {
  const current = getInstalledIds();
  if (current.includes(id)) {
    return current;
  }

  const next = [...current, id];
  saveInstalledIds(next);
  return next;
};

export const uninstallApp = (id: number) => {
  const next = getInstalledIds().filter((item) => item !== id);
  saveInstalledIds(next);
  return next;
};
