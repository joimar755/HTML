//formulario 
import "bootstrap/dist/css/bootstrap.min.css"; 
import '../css/nav.scss'
import '../css/index.scss' 
import '../css/Form.css' 
//import '../css/style.css' 
import {router} from "../router/index.routes";


window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
})
window.addEventListener("hashchange", ()=> {
  router(window.location.hash);
})


// 


