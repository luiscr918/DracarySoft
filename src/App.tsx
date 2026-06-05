import DragonIntro from "./components/animations/DragonIntro";
import { useIntroPlayed } from "./hooks/useIntroPlayer";
import { AppRoutes } from "./routers/AppRoutes";

function App() {
  const { introPlayed, markIntroPlayed } = useIntroPlayed();
  return (
    <>
    {!introPlayed && (
            <DragonIntro onComplete={markIntroPlayed} />
          )}
      <AppRoutes />
    </>
  );
}

export default App;
