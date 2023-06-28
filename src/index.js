import './style.css';
import Utils from './Utils';
import backgroundImage from './images/home-background.jpg';
import Header from './headerFactory.js';
import Footer from './footerFactory.js';
import homeFactory from './homeFactory';

function updateMainComponent(target) {
    switch (target) {
        case "Home":
            console.log('Updating main to home');
            break;
        case "Menu":
            console.log('Updating main to menu');
        
        break;   

        case "Contact":
            console.log('Updating main to contact');
        
        break;
    
        default:
            console.log('Something went wrong in menu click logic');
            break;
    }

}

// Main Page Components

//Header
const header = Header();
const headerComponent = header.headerElement;

const navigation = header.getNavComponent();
const navItems = navigation.getItems();
console.log(navItems);

for(let i = 0; i < navItems.length; i++) {
    let navItem = navItems[i];
    let element = navItem.navItemComponent;
    element.addEventListener('click',function(e){
        updateMainComponent(e.target.textContent);
    })

}

// Main
const main = homeFactory().mainElement;

// Footer
const footer = Footer().footerElement;

document.body.appendChild(headerComponent);
document.body.appendChild(main);
document.body.appendChild(footer);


