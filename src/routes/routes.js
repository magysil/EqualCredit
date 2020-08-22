import Home from "../views/home.js";
import About from "../views/about.js";
import Credit from "../views/credit.js";
import Contact from "../views/contact.js";
import NotFound from "../views/404.js";

const content = document.getElementById("root");

const router = (route) => {
    content.innerHTML = '';
  switch (route) {
    case "":
      return content.appendChild(Home());
    case "#":
      return content.appendChild(Home());
    case "#/about":
      return content.appendChild(About());
    case "#/credit":
      return content.appendChild(Credit());
    case "#/contact":
      return content.appendChild(Contact());
    default:
      return content.appendChild(NotFound());
  }
};

export { router };