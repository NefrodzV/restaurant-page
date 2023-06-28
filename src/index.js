import './style.css';
import Utils from './Utils';
import backgroundImage from './images/home-background.jpg';
import Header from './headerFactory.js';
import Footer from './footerFactory.js';
import homeFactory from './homePageFactory';
import mainPageFactory from './mainPageFactory';

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


const navigation = header.getNavComponent();
const navItems = navigation.getItems();



for(let i = 0; i < navItems.length; i++) {
    let navItem = navItems[i];
    let element = navItem.navItemComponent;
    element.addEventListener('click',function(e){
        updateMainComponent(e.target.textContent);
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


