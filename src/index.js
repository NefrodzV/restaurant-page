import './style.css';
import Utils from './Utils';
import backgroundImage from './images/home-background.jpg';
import Header from './headerFactory.js';
import Footer from './footerFactory.js';
import homeFactory from './homePageFactory';
import mainPageFactory from './mainPageFactory';

// Main Page Components

//Header
const header = Header();


const navigation = header.getNavComponent();
const navItems = navigation.getItems();



for(let i = 0; i < navItems.length; i++) {
    let navItem = navItems[i];
    let element = navItem.navItemComponent;

    
    element.addEventListener('click',function(e){
        navigation.disableNavItemsActive();
        navItem.toggleActive();
        let clickedNavItem = e.target.textContent;
        main.updateMainPage(clickedNavItem);
    })
}

// Main
const main = mainPageFactory();
// const main = homeFactory().mainElement;

// Footer

const footer = Footer();

document.body.appendChild(header.headerElement);
document.body.appendChild(main.mainPageElement);
document.body.appendChild(footer.footerElement);


