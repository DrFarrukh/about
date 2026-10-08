// Apply the theme before the first paint, then share the same state with React.
(() => {
  const key = "fq-theme";
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const listeners = new Set();
  const readPreference = () => {
    try {
      const saved = window.localStorage.getItem(key);
      return saved === "light" || saved === "dark" ? saved : "system";
    } catch {
      return "system";
    }
  };
  let preference = readPreference();
  let snapshot;
  const apply = () => {
    const theme =
      preference === "system"
        ? system.matches
          ? "dark"
          : "light"
        : preference;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    if (snapshot?.theme === theme && snapshot?.preference === preference)
      return;
    snapshot = Object.freeze({ theme, preference });
    listeners.forEach((listener) => listener());
  };
  window.portfolioTheme = {
    getSnapshot: () => snapshot,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    setPreference: (next) => {
      if (!["light", "dark", "system"].includes(next)) return;
      preference = next;
      try {
        if (next === "system") window.localStorage.removeItem(key);
        else window.localStorage.setItem(key, next);
      } catch {
        // Switching still works when the browser disallows persistent storage.
      }
      apply();
    },
  };
  system.addEventListener("change", apply);
  window.addEventListener("storage", (event) => {
    if (event.key === key || event.key === null) {
      preference = readPreference();
      apply();
    }
  });
  apply();
})();
