import vistas from '../vistas/404.html'

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = vistas 

    return divElement;
}