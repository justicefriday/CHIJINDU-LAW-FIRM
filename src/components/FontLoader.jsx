import { useEffect } from "react";
import { googleFontsHref } from "../theme/tokens";

export default function FontLoader() {
  useEffect(() => {
    if (document.getElementById("chijindu-fonts")) return;
    const link = document.createElement("link");
    link.id = "chijindu-fonts";
    link.rel = "stylesheet";
    link.href = googleFontsHref;
    document.head.appendChild(link);
  }, []);
  return null;
}