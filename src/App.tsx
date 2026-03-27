import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { PageLoader } from "./components/PageLoader";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((module) => ({ default: module.HomePage })),
);
const AppsPage = lazy(() =>
  import("./pages/AppsPage").then((module) => ({ default: module.AppsPage })),
);
const AppDetailsPage = lazy(() =>
  import("./pages/AppDetailsPage").then((module) => ({
    default: module.AppDetailsPage,
  })),
);
const InstallationPage = lazy(() =>
  import("./pages/InstallationPage").then((module) => ({
    default: module.InstallationPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((module) => ({
    default: module.NotFoundPage,
  })),
);

function App() {
  return (
    // Lazy-loaded pages keep the initial bundle smaller and improve route loading.
    <Suspense fallback={<PageLoader label="Loading page..." fullPage />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/apps/:id" element={<AppDetailsPage />} />
          <Route path="/installation" element={<InstallationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
