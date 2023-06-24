

function component(type) {
    const element = document.createElement(type);
    console.log("Created a " + type);
    return element;
}

const header = component('header');
const main = component('main');
const footer = component('footer');

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);


