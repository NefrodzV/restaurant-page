export default class Utils{
    constructor() {

    }
    
    static createComponent = (type) => {
        const element = document.createElement(type);
        console.log("Created a " + type);
        return element;
    }
}