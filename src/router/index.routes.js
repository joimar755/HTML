import {pages} from "../Controlador/index";
let content = document.getElementById("main-page");
const router = (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/": { 
        return content.appendChild(pages.home());
    }
    case "#/about":{
      return content.appendChild(pages.about());
    }
    case "#/Services":
      return console.log("Services!!!!");
    case "#/contact":
      return console.log("contact!!!!");
    default:
      return content.appendChild(pages.Notfound());
  }
};
export { router };
