import vistas from '../vistas/index.html'

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = vistas 

    return divElement;
}