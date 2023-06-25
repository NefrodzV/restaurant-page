import './style.css';
import navMenu from './NavMenu';
// import backgroundImage from './home-background.jpg';

const navData = navMenu;

function createComponent(type) {
    const element = document.createElement(type);
    console.log("Created a " + type);
    return element;
}

function navComponent() {
    const nav = component('nav')
    const items = navData.navItems;
    
    for(let i = 0; i < items.length; i++) {
        let navItem = items[i];
        let anchor = document.createElement('a');
        anchor.textContent = navItem.title;
        anchor.href = `#`;
        nav.appendChild(anchor);
    }

    return nav;
}

function addStyle(element, style) {
element.classList.add(style)
}

function addImage(element, source) {
    const image = new Image();
    image.src = source;
    element.appendChild(image);
}


const header = component('header');
header.appendChild(navComponent());
const main = component('main');
// addStyle(main, 'home-backgroud');

const footer = component('footer');

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);


