import { useState } from "react";

const SESSION_KEY = "dracarysoft_intro_played";

export function useIntroPlayed() {
  const [introPlayed, setIntroPlayed] = useState<boolean>(() => {
    return sessionStorage.getItem(SESSION_KEY) === "true";
  });

  const markIntroPlayed = () => {
    sessionStorage.setItem(SESSION_KEY, "true");
    setIntroPlayed(true);
  };

  return { introPlayed, markIntroPlayed };
}
