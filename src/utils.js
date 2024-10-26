const addStyle = (element, style)  => {
    element.classList.add(style)
}
    
const addImage = (element, source) => {
    const image = new Image();
    image.src = source;
    element.appendChild(image);
}

export const createElement = (type, css, style) => {
    const element = document.createElement(type);
    if(css) element.classList.add(css)
    if(style) element.style = style
    return element;
}


