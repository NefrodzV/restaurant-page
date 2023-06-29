
import Utils from "./Utils";
import contactPageFactory from "./contactPageFactory";
import homePageFactory from "./homePageFactory";
import menuPageFactory from "./menuPageFactory";

export default function mainPageFactory() {

    const home = homePageFactory();
    const menuPage = menuPageFactory();
    const contactPage = contactPageFactory();

    const mainPageElement = document.createElement('main');
    mainPageElement.append(home.content);
    mainPageElement.append(home.image)
    Utils.addStyle(mainPageElement, home.STYLE);
           
    
    const updateMainPage = (clickedNavItem) => {
        removeStyle();
        removeChildren();
        switch (clickedNavItem) {
            case 'Home':
                mainPageElement.append(home.content);
                mainPageElement.append(home.image)
                Utils.addStyle(mainPageElement, home.STYLE);
            break;
            case 'Menu':
                mainPageElement.append(menuPage.menuPageElement);
                Utils.addStyle(mainPageElement, menuPage.STYLE);
            break;

            case 'Contact':
                mainPageElement.append(contactPage.contactElement)
                Utils,addStyle(mainPageElement, contactPage.STYLE);
                break;

            default:
                console.log('Updating page bug');
                break;
        }
    }

    const removeChildren = () => {
        while(mainPageElement.firstChild) {
            mainPageElement.removeChild(
                mainPageElement.firstChild);
        }
    }

    const removeStyle = () => {
        mainPageElement.classList.remove('home');
        mainPageElement.classList.remove('menu');
        mainPageElement.classList.remove('contact');

    }
    return {
        mainPageElement,
        updateMainPage
    }

    
}