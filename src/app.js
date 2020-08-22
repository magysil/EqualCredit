import { router } from "./routes/routes.js";

router(window.location.hash);
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});