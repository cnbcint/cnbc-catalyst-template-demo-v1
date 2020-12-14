import translations from "../assets/translations.json";
import { useEffect, useState } from "react";

export default function useTranslation(section, defaultLang) {
  const [lang, setLang] = useState(defaultLang);
  useEffect(() => {
    const urlLang = new URLSearchParams(window.location.search).get("lang");
    if (urlLang) {
      setLang(urlLang);
    }
  }, []);
  let result = {};
  for (const [key, value] of Object.entries(translations[section])) {
    result[key] = value[lang];
  }

  return result;
}
