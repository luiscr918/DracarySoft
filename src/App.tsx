import { lazy, Suspense } from "react";
import { useIntroPlayed } from "./hooks/useIntroPlayer";
import { AppRoutes } from "./routers/AppRoutes";

const DragonIntro = lazy(() => import("./components/animations/DragonIntro"));

function App() {
  const { introPlayed, markIntroPlayed } = useIntroPlayed();
  return (
    <>
      {!introPlayed && (
        <Suspense fallback={null}>
          <DragonIntro onComplete={markIntroPlayed} />
        </Suspense>
      )}
      <AppRoutes />
    </>
  );
}

export default App;
