import './style.css';
import navMenu from './NavMenu';
import Utils from './Utils';
import backgroundImage from './images/home-background.jpg';

const navData = navMenu;

function createComponent(type) {
    const element = document.createElement(type);
    console.log("Created a " + type);
    return element;
}

function navComponent() {
    const nav = createComponent('nav');
    const items = navData.navItems;
    
    for(let i = 0; i < items.length; i++) {
        let navItem = items[i];
        let anchor = createComponent('a');
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

// Page Components

//Header
const header = createComponent('header');
const brandLogo = createComponent('h1');
brandLogo.textContent = "Nana's Kitchen !"
addStyle(brandLogo, 'logo');
header.appendChild(brandLogo);
header.appendChild(navComponent());

// Main
const main = createComponent('main');

const content = createComponent('div');
addStyle(content, 'content');


const contentTitle = createComponent('h1');
contentTitle.textContent = "Nana's Kitchen!";

const card = createComponent('div');
addStyle(card, 'card');
addStyle(card, 'border');
addStyle(card, 'box-shadow');

content.appendChild(contentTitle);
content.appendChild(card);

main.appendChild(content);
addImage(main, backgroundImage)



// Footer
const footer = createComponent('footer');

const footerText = createComponent('h6');
footerText.textContent = "Created by ";

const footerAnchor = createComponent('a');
footerAnchor.textContent = "Nfrodzv";
footerAnchor.href = 'https://github.com/NefrodzV/restaurant-page';

footerText.appendChild(footerAnchor);
footer.appendChild(footerText);

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);


