import { useTranslation } from "react-i18next";
import useAppData from "../../hooks/useAppData";

function footer() {
  const { theme } = useAppData();
  const { t } = useTranslation();
  return (
    <div
      className={`${theme} bg-gray-200 dark:bg-gray-600 sticky bottom-0 w-full px-10 h-14 flex items-center justify-between`}
    >
      <span className="font-semibold animate-bounce dark:text-white">
        {t("madeBy")}🚀🚀
      </span>
      <a
        href="https://www.linkedin.com/in/pedrovdf/"
        target="_blank"
        className="dark:text-white bg-gray-300 p-2 rounded-lg dark:bg-gray-700"
      >
        {t("linkedin")}
      </a>
    </div>
  );
}

export default footer;
