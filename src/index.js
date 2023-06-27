import './style.css';
import Utils from './Utils';
import backgroundImage from './images/home-background.jpg';
import Header from './headerFactory.js';
import Footer from './footerFactory.js';
import homeFactory from './homeFactory';



// Main Page Components

//Header
const header = Header().headerElement;

// Main
const main = homeFactory().mainElement;

// Footer
const footer = Footer().footerElement;

document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);


