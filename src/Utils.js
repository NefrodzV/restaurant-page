export default class Utils{
    constructor() {

    }
    
    static createComponent = (type) => {
        const element = document.createElement(type);
        console.log("Created a " + type);
        return element;
    }

    static addStyle(element, style) {
        element.classList.add(style)
    }
    
    static addImage(element, source) {
        const image = new Image();
        image.src = source;
        element.appendChild(image);
    }
}