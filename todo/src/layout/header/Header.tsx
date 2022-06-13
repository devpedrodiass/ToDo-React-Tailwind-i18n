import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import BrazilIcon from "../../assets/icons/brazil.svg";
import UnitedStatesIcon from "../../assets/icons/unitedStates.svg";
import useAppData from "../../hooks/useAppData";

function Header() {
  const { theme, changeTheme } = useAppData();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  function setLanguage() {
    if (localStorage.getItem("lang")) {
      return i18n.changeLanguage(String(localStorage.getItem("lang")));
    }
    return i18n.changeLanguage("en");
  }

  function handleChangeCurrentLanguage(clickedLanguage: "br" | "en") {
    if (currentLanguage !== clickedLanguage) {
      localStorage.setItem("lang", clickedLanguage);
      return i18n.changeLanguage(clickedLanguage);
    }
    return;
  }

  useEffect(() => {
    setLanguage();
  }, []);
  return (
    <div className="header sticky h-16 top-0 w-full flex items-center justify-between px-10 bg-yellow-300 shadow-lg dark:bg-blue-300">
      <div className="header_title text-lg font-semibold ">
        <span className="text-yellow-600 dark:text-blue-600">{t("title")}</span>
      </div>
      <div className="header_nav dark:bg-blue-200  bg-yellow-200 rounded-lg">
        <button className="header_nav-button   rounded-lg p-2 border-b-2 border-yellow-600 dark:border-blue-600 flex items-center gap-2">
          <i className="bi bi-house-fill dark:text-blue-600 text-yellow-600"></i>
          <span className="dark:text-blue-600 text-yellow-600">
            {t("home")}
          </span>
        </button>
      </div>
      <div className="header_actionsButtons flex items-center gap-6">
        <div className="header_actionsButtons-language flex items-center gap-2">
          <button
            className={`header_actionsButtons-button-en dark:bg-blue-200 transition-all dark:border-blue-600 border-yellow-600 duration-75 bg-yellow-200 rounded-lg p-2 ${
              currentLanguage === "en" ? "border-b-2 " : ""
            }`}
            onClick={() => handleChangeCurrentLanguage("en")}
          >
            <img width={22} src={UnitedStatesIcon} alt={t("altLanguage")} />
          </button>
          <div className="h-4 w-[1px] bg-white"></div>
          <button
            className={`header_actionsButtons-button-br dark:bg-blue-200 dark:border-blue-600 transition-all border-yellow-600 duration-75 bg-yellow-200 rounded-lg p-2 ${
              currentLanguage === "br" ? "border-b-2 " : ""
            }`}
            onClick={() => handleChangeCurrentLanguage("br")}
          >
            <img width={24} src={BrazilIcon} alt={t("altLanguage")} />
          </button>
        </div>
        <div className="header_actionsButtons-theme">
          <button
            className="header_actionsButtons-theme-button dark:bg-blue-200  bg-yellow-200 rounded-full p-1 w-8"
            onClick={changeTheme}
          >
            {theme === "" ? (
              <i className="bi bi-sun-fill text-yellow-900"></i>
            ) : (
              <i className="bi bi-moon-fill text-white"></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
