const addStyle = (element, style)  => {
    element.classList.add(style)
}
    
const  addImage = (element, source) => {
    const image = new Image();
    image.src = source;
    element.appendChild(image);
}


const createComponent = (type) => {
    const element = document.createElement(type);
    console.log("Created a " + type);
    return element;
}

export default {
    addStyle,
    addImage,
    createComponent
}