import { createContext, useState } from "react";

type Theme = "dark" | "";

interface AppContextProps {
  theme?: Theme;
  changeTheme?: () => void;
}

const AppContext = createContext<AppContextProps>({
  theme: "",
  changeTheme: undefined,
});

interface AppProviderProps {
  children?: any;
}

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>("");

  function changeTheme() {
    console.log("entrou: ", theme);
    setTheme(theme === "" ? "dark" : "");
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;

export const AppConsumer = AppContext.Consumer;
