import './style.css';
import navMenu from './NavMenu';
import Utils from './Utils';
import backgroundImage from './images/home-background.jpg';

const navData = navMenu;

function component(type) {
    const element = document.createElement(type);
    console.log("Created a " + type);
    return element;
}

function navComponent() {
    const nav = Utils.createComponent('nav');
    const items = navData.navItems;
    
    for(let i = 0; i < items.length; i++) {
        let navItem = items[i];
        let anchor = Utils.createComponent('a');
        addStyle(anchor, 'border');
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

// Page Components
const header = Utils.createComponent('header');
header.appendChild(navComponent());

const main = Utils.createComponent('main');

const content = Utils.createComponent('div');
addStyle(content, 'content');

const contentTitle = Utils.createComponent('h1');
contentTitle.textContent = "Restaurant name!";

const card = Utils.createComponent('div');
addStyle(card, 'card');
addStyle(card, 'border');
addStyle(card, 'box-shadow');

content.appendChild(contentTitle);
content.appendChild(card);

main.appendChild(content);
addImage(main, backgroundImage)



const footer = Utils.createComponent('footer');

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);


