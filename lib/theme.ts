export const THEME_STORAGE_KEY = "va-theme";

export type Theme = "light" | "dark";

// Runs before first paint (inlined in <head>) so a saved theme never flashes.
export const themeInitScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;
