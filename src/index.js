import './style.css';
import navMenu from './NavMenu';
import Utils from './Utils';
import backgroundImage from './images/home-background.jpg';
import Header from './Header.js';
import Footer from './Footer.js';

const navigation = navMenu;

function createComponent(type) {
    const element = document.createElement(type);
    console.log("Created a " + type);
    return element;
}

function navComponent() {
    const nav = Utils.createComponent('nav');
    const items = navigation.navItems;

    for (let i = 0; i < items.length; i++) {
        let navItem = items[i];
        let anchor = Utils.createComponent('a');
        addStyle(anchor, 'navItem')
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

// Main Page Components

//Header
const header = Header().headerElement;

// Main
const main = Utils.createComponent('main');

const content = Utils.createComponent('div');
addStyle(content, 'content');


const contentTitle = createComponent('h1');
contentTitle.textContent = "Nana's Kitchen!";

const card = Utils.createComponent('div');
addStyle(card, 'card');
addStyle(card, 'border');
addStyle(card, 'box-shadow');

content.appendChild(contentTitle);
content.appendChild(card);

main.appendChild(content);
addImage(main, backgroundImage)



// Footer
const footer = Footer().footerElement;

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);


